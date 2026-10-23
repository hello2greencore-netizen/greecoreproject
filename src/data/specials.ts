/**
 * Specials and ad landing offers.
 *
 * Each special gets its own page at /specials/<slug>, which is the URL to use in ads
 * (add UTM tags in the ad, e.g. /specials/fall-tune-up?utm_source=google&utm_medium=cpc).
 * The /specials page lists every special that is running today.
 *
 * To add a special: copy the sample below, give it a new slug, set sample to false (or
 * remove it), and fill in the real offer, terms and dates. Only add offers Tony has approved.
 * A special shows from `starts` (optional) through `ends` (Pacific time), then its page
 * switches to an "offer has ended" message so old ad clicks still land somewhere useful.
 */
export type SpecialCategory = "heating" | "cooling" | "water" | "maintenance" | "financing" | "other";

export type Special = {
  /** URL slug: /specials/<slug>. Short, lowercase, hyphens. Don't change it once ads point to it. */
  slug: string;
  /** Page and card headline, e.g. "Fall furnace tune-up special". */
  title: string;
  /** The big badge text, e.g. "$75 off" or "Free". */
  offer: string;
  /** One or two sentences for the card and the top of the page. */
  summary: string;
  /** What's included, one short line each. */
  details: string[];
  /** Fine print shown on the page (who qualifies, limits, can't combine, etc.). */
  terms: string;
  /** First day it shows (YYYY-MM-DD, Pacific). Optional. */
  starts?: string;
  /** Last day it's valid (YYYY-MM-DD, Pacific). */
  ends: string;
  category: SpecialCategory;
  /** Main button: "book" opens online booking, "call" leads with the phone number. */
  cta?: "book" | "call";
  /** Layout sample only. Shows on preview links, never on the live site. */
  sample?: boolean;
};

export const specials: Special[] = [
  {
    slug: "sample-offer",
    title: "Sample special (layout only)",
    offer: "$XX off",
    summary:
      "This is a placeholder so you can see the layout. Real specials you approve will show here with their own page to point ads at.",
    details: ["What the offer includes, line one", "What the offer includes, line two", "What the offer includes, line three"],
    terms:
      "Sample terms: who qualifies, how many per household, can't be combined with other offers, valid in our Sonoma and Marin service area.",
    ends: "2026-12-31",
    category: "maintenance",
    cta: "book",
    sample: true,
  },
];

/** Today's date in Pacific time as YYYY-MM-DD. */
export function todayPacific(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

const isLiveSite = process.env.VERCEL_ENV === "production";

/** Specials that exist on this deployment (samples are hidden on the live site). */
export function getSpecials(): Special[] {
  return specials.filter((s) => !(s.sample && isLiveSite));
}

export function isRunning(s: Special, today: string = todayPacific()): boolean {
  return (!s.starts || s.starts <= today) && today <= s.ends;
}

export function getRunningSpecials(today: string = todayPacific()): Special[] {
  return getSpecials()
    .filter((s) => isRunning(s, today))
    .sort((a, b) => a.ends.localeCompare(b.ends));
}

export function getSpecialBySlug(slug: string): Special | undefined {
  return getSpecials().find((s) => s.slug === slug);
}

/** "2026-12-31" -> "December 31, 2026" */
export function formatEnds(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** A related homeowner guide for each kind of special. */
export const relatedGuide: Record<SpecialCategory, { href: string; label: string }> = {
  heating: { href: "/guides/furnace-heat-pump-or-ductless", label: "Furnace, heat pump or ductless?" },
  cooling: { href: "/guides/ac-maintenance-checklist", label: "AC checklist" },
  water: { href: "/guides/tank-tankless-or-heat-pump-water-heater", label: "Tank, tankless or heat pump water heater?" },
  maintenance: { href: "/guides/furnace-maintenance-checklist", label: "Furnace checklist" },
  financing: { href: "/guides/hvac-cost", label: "What should a new system cost?" },
  other: { href: "/guides", label: "Homeowner guides" },
};
