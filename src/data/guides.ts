/**
 * Homeowner Guides: free tools, decision guides, cost guide and maintenance checklists.
 * Each guide's page content lives in src/content/guides/<slug>.html (and <slug>.js when interactive);
 * its stylesheet is src/content/guides/<style>.css.
 */
export type GuideGroup = "plan" | "choose" | "maintain";

export type Guide = {
  slug: string;
  /** Page title for Google and the browser tab (the layout appends the brand). */
  title: string;
  /** Meta description, under about 155 characters. */
  description: string;
  /** Short name for the guides hub card. */
  name: string;
  /** One line for the guides hub card. */
  summary: string;
  group: GuideGroup;
  kind: "Tool" | "Guide" | "Checklist" | "Cost guide";
  /** Stylesheet in src/content/guides/<style>.css (shared by pages with the same layout). */
  style: string;
};

export const guideGroups: { id: GuideGroup; title: string; description: string }[] = [
  { id: "plan", title: "Plan and price a new system", description: "See what size your home needs and what it typically costs." },
  { id: "choose", title: "Choose the right system", description: "Side-by-side comparisons to help you pick with confidence." },
  { id: "maintain", title: "Keep it running well", description: "What to do and when, plus what a tune-up covers." },
];

export const guides: Guide[] = [
  {
    slug: "hvac-cost",
    title: "What Should a New HVAC System or Water Heater Cost? | Sonoma & Marin",
    description: "Typical installed prices for furnaces, AC, heat pumps, mini splits, ductwork and water heaters in Sonoma and Marin. Slide to your size to compare.",
    name: "What should it cost?",
    summary: "Typical installed prices for every system, by size.",
    group: "plan",
    style: "hvac-cost",
    kind: "Cost guide",
  },
  {
    slug: "hvac-size-calculator",
    title: "What Size AC or Heat Pump Do I Need? | Sonoma & Marin",
    description: "Free HVAC sizing calculator for North Bay homes. See the AC, heat pump or furnace size your house needs, check a quote, and see where you lose heat.",
    name: "Home sizing check",
    summary: "Find the AC, heat pump or furnace size your home needs.",
    group: "plan",
    style: "hvac-size-calculator",
    kind: "Tool",
  },
  {
    slug: "furnace-heat-pump-or-ductless",
    title: "Furnace, Heat Pump or Ductless Mini Split? | Homeowner Guide",
    description: "Compare gas furnaces, heat pumps and ductless mini splits for Sonoma and Marin homes, and see which one fits your house.",
    name: "Furnace, heat pump or ductless?",
    summary: "Which heating system fits your home.",
    group: "choose",
    style: "decision-guide",
    kind: "Guide",
  },
  {
    slug: "tank-tankless-or-heat-pump-water-heater",
    title: "Tank, Tankless or Heat Pump Water Heater? | Homeowner Guide",
    description: "Compare tank, tankless and heat pump water heaters on cost, energy use, lifespan and space, and see which one fits your home.",
    name: "Tank, tankless or heat pump?",
    summary: "Which water heater fits your home.",
    group: "choose",
    style: "decision-guide",
    kind: "Guide",
  },
  {
    slug: "furnace-maintenance-checklist",
    title: "Furnace Maintenance Checklist: Get Ready for Heating Season",
    description: "What to check on your furnace every month and every fall, what a tune-up covers, and the warning signs that mean it's time to call.",
    name: "Furnace checklist",
    summary: "Getting ready for heating season.",
    group: "maintain",
    style: "checklist",
    kind: "Checklist",
  },
  {
    slug: "ac-maintenance-checklist",
    title: "AC Maintenance Checklist: Get Your Air Conditioner Ready for Summer",
    description: "What to check on your AC every month and every spring, what a tune-up covers, and the warning signs that mean it's time to call.",
    name: "AC checklist",
    summary: "Getting ready for summer.",
    group: "maintain",
    style: "checklist",
    kind: "Checklist",
  },
  {
    slug: "heat-pump-maintenance-checklist",
    title: "Heat Pump & Mini Split Maintenance Checklist",
    description: "Twice-a-year heat pump and mini split care: filters, outdoor unit, drains, what a tune-up covers and when to call.",
    name: "Heat pump checklist",
    summary: "Twice-a-year care for heat pumps and mini splits.",
    group: "maintain",
    style: "checklist",
    kind: "Checklist",
  },
  {
    slug: "water-heater-maintenance-checklist",
    title: "Water Heater Maintenance Checklist: Tank, Tankless & Heat Pump",
    description: "How to maintain a tank, tankless or heat pump water heater: monthly checks, yearly service, earthquake straps and warning signs.",
    name: "Water heater checklist",
    summary: "Tank, tankless and heat pump models.",
    group: "maintain",
    style: "checklist",
    kind: "Checklist",
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined => guides.find((g) => g.slug === slug);
