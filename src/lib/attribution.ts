// Remembers which ad or link brought a visitor to the site, so estimator leads can be credited
// to the right campaign (for example Meta ads) even if the visitor browses other pages first.
// Stored in this browser only, for 30 days. Wrapped in try/catch because storage can be blocked.

export const ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "gbraid", "wbraid"] as const;
const STORE = "gc_attr";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Saved = Partial<Record<(typeof ATTR_KEYS)[number] | "lp", string>> & { ts?: number };

function fromUrl(): Saved {
  const out: Saved = {};
  if (typeof window === "undefined") return out;
  const q = new URLSearchParams(window.location.search);
  for (const k of ATTR_KEYS) {
    const v = q.get(k);
    if (v) out[k] = v.slice(0, 200);
  }
  return out;
}

/** Save the current page's tracking tags, if it has any. The newest tagged visit wins. */
export function captureAttribution() {
  try {
    const found = fromUrl();
    if (!Object.keys(found).length) return;
    window.localStorage.setItem(STORE, JSON.stringify({ ...found, lp: window.location.pathname, ts: Date.now() }));
  } catch {
    /* storage blocked: tags on the current URL still work */
  }
}

/** Query string to pass into the estimator iframe: this page's tags first, otherwise the saved ones. */
export function attributionQuery(): string {
  const p = new URLSearchParams();
  let src: Saved = fromUrl();
  if (Object.keys(src).length) {
    src.lp = window.location.pathname;
  } else {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORE) || "null") as Saved | null;
      if (saved && saved.ts && Date.now() - saved.ts < MAX_AGE_MS) src = saved;
    } catch {
      /* ignore */
    }
  }
  for (const k of [...ATTR_KEYS, "lp"] as const) {
    const v = src[k];
    if (v) p.set(k, v);
  }
  const s = p.toString();
  return s ? `?${s}` : "";
}
