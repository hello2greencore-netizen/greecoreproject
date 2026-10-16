import fs from "node:fs";
import path from "node:path";

/**
 * Blog posts live as Markdown files in src/content/blog/<slug>.md.
 * Each file starts with a simple frontmatter block:
 *
 * ---
 * title: Post title
 * description: One-sentence summary for Google and the blog list
 * date: 2026-10-12
 * category: Water Heaters
 * image: /images/services/heat-pump-water-heaters.jpg
 * imageAlt: Technician installing a heat pump water heater
 * related: heat-pump-water-heaters, water-heaters
 * ---
 */

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  related: string[];
  readingMinutes: number;
};

export type PostFaq = { question: string; answer: string };

export type Post = PostMeta & { html: string; faqs: PostFaq[] };

/** Strip Markdown link/emphasis syntax so FAQ answers read as plain text in schema. */
function plainText(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1$2")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Pull question/answer pairs from a "## Common questions" (or "## FAQ") section:
 * each "### Question" heading followed by its answer paragraph(s).
 * Used for FAQPage structured data so Google and AI search can quote the answers.
 */
export function extractFaqs(md: string): PostFaq[] {
  const text = md.replace(/\r\n/g, "\n");
  const start = text.search(/^##\s+(common questions|frequently asked questions|faqs?)\b.*$/im);
  if (start === -1) return [];
  const rest = text.slice(start).split("\n").slice(1).join("\n");
  const end = rest.search(/^##\s/m);
  const section = end === -1 ? rest : rest.slice(0, end);
  const faqs: PostFaq[] = [];
  const parts = section.split(/^###\s+/m).slice(1);
  for (const part of parts) {
    const [qLine, ...body] = part.split("\n");
    const answer = plainText(
      body
        .join("\n")
        .split(/\n\s*\n/)
        .map((b) => b.trim())
        .filter((b) => b && !/^#/.test(b))
        .join(" "),
    );
    const question = plainText(qLine);
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const text = raw.replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: text };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { data, body: match[2] };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, href: string) => {
    const external = /^https?:\/\//.test(href);
    return external
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
      : `<a href="${href}">${text}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  return out;
}

/** Small Markdown renderer: ## and ### headings, paragraphs, - and 1. lists, > quotes, pipe tables, bold, italic, links. */
export function renderMarkdown(md: string): string {
  const blocks = md.replace(/\r\n/g, "\n").trim().split(/\n\s*\n/);
  const html: string[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trimEnd());
    const first = lines[0];
    if (/^###\s/.test(first)) {
      html.push(`<h3>${inline(first.replace(/^###\s+/, ""))}</h3>`);
      if (lines.length > 1) html.push(`<p>${inline(lines.slice(1).join(" "))}</p>`);
    } else if (/^##\s/.test(first)) {
      html.push(`<h2>${inline(first.replace(/^##\s+/, ""))}</h2>`);
      if (lines.length > 1) html.push(`<p>${inline(lines.slice(1).join(" "))}</p>`);
    } else if (lines.every((l) => /^[-*]\s/.test(l))) {
      html.push(`<ul>${lines.map((l) => `<li>${inline(l.replace(/^[-*]\s+/, ""))}</li>`).join("")}</ul>`);
    } else if (lines.every((l) => /^\d+\.\s/.test(l))) {
      html.push(`<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+\.\s+/, ""))}</li>`).join("")}</ol>`);
    } else if (lines.every((l) => /^>\s?/.test(l))) {
      html.push(`<blockquote><p>${inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "))}</p></blockquote>`);
    } else if (lines.length >= 2 && lines.every((l) => /^\|.*\|$/.test(l)) && /^\|[\s:|-]+\|$/.test(lines[1])) {
      const cells = (l: string) => l.slice(1, -1).split("|").map((c) => c.trim());
      const head = cells(lines[0]).map((c) => `<th>${inline(c)}</th>`).join("");
      const rows = lines
        .slice(2)
        .map((l) => `<tr>${cells(l).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
        .join("");
      html.push(`<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`);
    } else {
      html.push(`<p>${inline(lines.join(" "))}</p>`);
    }
  }
  return html.join("\n");
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    updated: data.updated || undefined,
    category: data.category ?? "Home Comfort",
    image: data.image ?? "/images/hero/home.jpg",
    imageAlt: data.imageAlt ?? data.title ?? "",
    author: data.author ?? "Green Core Heating & Air",
    related: (data.related ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: renderMarkdown(body),
    faqs: extractFaqs(body),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatPostDate(date: string): string {
  if (!date) return "";
  const d = new Date(`${date}T12:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
