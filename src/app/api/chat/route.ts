import { chatbotSystemPrompt } from "@/data/chatbotKnowledge";

/**
 * Corey's AI answers. The browser posts the recent conversation here, and this
 * route asks Claude using the Green Core knowledge in src/data/chatbotKnowledge.ts.
 * If this route fails for any reason, the chatbot falls back to its built-in FAQ matching.
 *
 * Env vars (set in Vercel → Project → Settings → Environment Variables):
 *   ANTHROPIC_API_KEY  required
 *   ANTHROPIC_MODEL    optional, defaults to a fast, low-cost Haiku model
 */

const DEFAULT_MODEL = "claude-haiku-5-5";
const MAX_MESSAGE_CHARS = 600;
const MAX_HISTORY = 10;
const REQUEST_TIMEOUT_MS = 15_000;

// Per-visitor limits. Kept in memory per server instance, so they're a
// best-effort guard against abuse rather than an exact count.
const LIMITS = [
  { windowMs: 60_000, max: 6 }, // 6 questions per minute
  { windowMs: 60 * 60_000, max: 30 }, // 30 questions per hour
];

const hits = new Map<string, number[]>();

function isRateLimited(visitor: string) {
  const now = Date.now();
  const longest = Math.max(...LIMITS.map((l) => l.windowMs));
  const recent = (hits.get(visitor) ?? []).filter((t) => now - t < longest);

  const limited = LIMITS.some(
    (l) => recent.filter((t) => now - t < l.windowMs).length >= l.max,
  );
  if (!limited) recent.push(now);
  hits.set(visitor, recent);

  // Keep memory bounded.
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= longest)) hits.delete(key);
    }
  }

  return limited;
}

function visitorId(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

type IncomingMessage = { role?: unknown; text?: unknown };
type ApiMessage = { role: "user" | "assistant"; content: string };

function cleanHistory(raw: unknown): ApiMessage[] {
  if (!Array.isArray(raw)) return [];

  const messages: ApiMessage[] = [];
  for (const item of raw.slice(-MAX_HISTORY) as IncomingMessage[]) {
    const role = item?.role === "assistant" ? "assistant" : item?.role === "user" ? "user" : null;
    const text = typeof item?.text === "string" ? item.text.trim().slice(0, MAX_MESSAGE_CHARS) : "";
    if (!role || !text) continue;

    // The API needs alternating turns, so merge any back-to-back messages.
    const last = messages.at(-1);
    if (last && last.role === role) last.content += `\n\n${text}`;
    else messages.push({ role, content: text });
  }

  // Must start with the visitor and end with the visitor's new question.
  while (messages[0]?.role === "assistant") messages.shift();
  if (messages.at(-1)?.role !== "user") return [];
  return messages;
}

/** Last line of defense for wording rules. */
function polish(text: string) {
  return text
    .replace(/\bmanual\s*j\b(\s+load)?(\s+calculations?)?/gi, "a load calculation")
    .replace(/\bgreen\s?core\b/gi, "Green Core")
    .replace(/\*\*|__|^#+\s*/gm, "")
    .trim();
}

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: "not_configured" }, 503);

  let payload: { messages?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const messages = cleanHistory(payload.messages);
  if (messages.length === 0) return json({ error: "bad_request" }, 400);

  if (isRateLimited(visitorId(request))) {
    return json({ error: "rate_limited" }, 429);
  }

  const model = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;
  const isHaiku5 = model.startsWith("claude-haiku-5");

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: 400,
        system: [
          { type: "text", text: chatbotSystemPrompt, cache_control: { type: "ephemeral" } },
        ],
        messages,
        // Short FAQ-style answers: skip thinking for speed and cost.
        ...(isHaiku5 && {
          thinking: { type: "disabled" },
          output_config: { effort: "low" },
        }),
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error("Chat API error", response.status, await response.text().catch(() => ""));
      return json({ error: "upstream_error" }, 502);
    }

    const data = (await response.json()) as {
      content?: { type: string; text?: string }[];
    };
    const reply = polish(
      (data.content ?? [])
        .filter((block) => block.type === "text" && block.text)
        .map((block) => block.text)
        .join("\n"),
    );

    if (!reply) return json({ error: "empty_reply" }, 502);
    return json({ reply });
  } catch (error) {
    console.error("Chat API request failed", error);
    return json({ error: "upstream_error" }, 502);
  }
}
