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
export type SpecialCategory = "heating" | "cooling" | "ductless" | "ducts" | "water" | "maintenance" | "financing" | "other";

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
    slug: "heat-pump-1500-off",
    title: "$1,500 off a qualifying heat pump system",
    offer: "$1,500 off",
    summary:
      "Save $1,500 on a new qualifying heat pump system from Green Core, for heating and cooling in one. Book a free estimate and we'll show you which systems qualify.",
    details: [
      "$1,500 off a qualifying heat pump system",
      "Free in-home estimate with written options and pricing",
      "Equipment sized to your home",
      "Permit, clean install, startup and a walkthrough of your new system",
      "Help with rebate paperwork when you qualify",
    ],
    terms:
      "Applies to new installations of qualifying heat pump systems by Green Core Heating & Air. We confirm which systems qualify at your free estimate. Can be combined with our other current specials. Not valid on prior purchases or work already under contract. Valid in our service area.",
    ends: "2026-12-31",
    category: "heating",
    cta: "book",
  },
  {
    slug: "free-smart-thermostat",
    title: "Free smart thermostat with a qualifying heat pump install",
    offer: "Free",
    summary:
      "Choose a new qualifying heat pump installation from Green Core and we'll include a smart thermostat at no charge, a $450 value. Control your heating and cooling from your phone.",
    details: [
      "Smart thermostat included at no charge ($450 value)",
      "Installed and set up by our team with your new heat pump",
      "We show you how it works before we leave",
    ],
    terms:
      "Free smart thermostat ($450 value) with a new installation of a qualifying heat pump system by Green Core Heating & Air. One per qualifying installation. Can be combined with our other current specials. Not valid on prior purchases. Valid in our service area.",
    ends: "2026-12-31",
    category: "heating",
    cta: "book",
  },
  {
    slug: "duct-system-500-off",
    title: "$500 off a new duct system",
    offer: "$500 off",
    summary:
      "Old, leaky ducts waste the heating and cooling you pay for. Save $500 on a new sealed and insulated duct system from Green Core.",
    details: [
      "$500 off a new duct system",
      "New ducts sealed and insulated to R-8",
      "Free in-home duct check and written estimate",
      "Pairs well with a new heating and cooling system",
    ],
    terms:
      "Applies to new duct system installations by Green Core Heating & Air. Can be combined with our other current specials. Not valid on prior purchases or work already under contract. Valid in our service area.",
    ends: "2026-12-31",
    category: "ducts",
    cta: "book",
  },
  {
    slug: "mini-split-1000-rebate",
    title: "$1,000 manufacturer rebate on qualifying mini split systems",
    offer: "$1,000 rebate",
    summary:
      "Install a qualifying ductless mini split system with Green Core and get a $1,000 mail-in rebate from the manufacturer. We help with the paperwork.",
    details: [
      "$1,000 mail-in rebate from the manufacturer",
      "We help you fill out and send in the rebate",
      "Free in-home estimate with written options and pricing",
      "Quiet heating and cooling for rooms, additions and ADUs",
    ],
    terms:
      "Mail-in rebate paid by the equipment manufacturer on qualifying ductless mini split systems installed by Green Core Heating & Air, subject to the manufacturer's terms. We confirm which systems qualify at your free estimate and help with the paperwork. Can be combined with our other current specials. Valid in our service area.",
    ends: "2026-12-31",
    category: "ductless",
    cta: "book",
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
  ductless: { href: "/guides/furnace-heat-pump-or-ductless", label: "Furnace, heat pump or ductless?" },
  ducts: { href: "/guides/hvac-size-calculator", label: "Home sizing check (with a duct check)" },
  water: { href: "/guides/tank-tankless-or-heat-pump-water-heater", label: "Tank, tankless or heat pump water heater?" },
  maintenance: { href: "/guides/furnace-maintenance-checklist", label: "Furnace checklist" },
  financing: { href: "/guides/hvac-cost", label: "What should a new system cost?" },
  other: { href: "/guides", label: "Homeowner guides" },
};
