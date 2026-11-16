import type { ContentSection, FAQ } from "@/types";

/** Dedicated repair pages (/services/ac-repair, /services/furnace-repair). SEO Board cards r-2026-11-08-ac-repair and r-2026-11-08-furnace-repair. */
export type RepairPage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  heroImage: string;
  answer: string;
  intro: string[];
  problemsHeading: string;
  problems: { title: string; description: string }[];
  sections: ContentSection[];
  /** Related service pages: [label, href]. */
  related: [string, string][];
  /** Real Google reviews from testimonials.ts. */
  reviewIds: string[];
  reviewsTitle: string;
  faqs: FAQ[];
};

export const repairPages: RepairPage[] = [
  {
    slug: "ac-repair",
    navLabel: "AC Repair",
    eyebrow: "Repair service",
    name: "AC repair in Petaluma, Sonoma and Marin",
    seoTitle: "AC Repair in Petaluma & Sonoma County",
    seoDescription:
      "AC repair for central air conditioners and ductless systems in Petaluma, Santa Rosa and across Sonoma, Marin, Napa & Solano. Phones answered 24/7. Call (707) 988-5858.",
    tagline: "Warm air, no cooling, or a unit that won't start? We find the real problem and fix it right.",
    heroImage: "/images/hero/services.jpg",
    answer:
      "Green Core repairs central air conditioners and ductless systems across Sonoma and Marin, plus Napa and Solano. Call (707) 988-5858 any time, or book online. For urgent calls we aim to get out same-day or next-day depending on the season, and you get a written price before any work starts.",
    intro: [
      "When your AC quits on a hot afternoon in Petaluma, Santa Rosa, Novato or Fairfield, you want a technician who finds the actual cause instead of guessing. Our team tests the whole system: the outdoor unit, the indoor coil, airflow, the thermostat and the electrical parts that fail most often.",
      "We repair most major brands of central air conditioners, heat pumps running in cooling mode, and ductless mini splits. If a repair doesn't make sense for an older system, we'll tell you plainly and lay out your options.",
    ],
    problemsHeading: "Common AC problems we fix",
    problems: [
      { title: "AC won't turn on", description: "Often a tripped breaker, a failed capacitor or contactor, a thermostat problem, or a safety switch from a clogged drain. We test each one." },
      { title: "Blowing warm air", description: "Usually low refrigerant from a leak, a failed outdoor fan or compressor part, or a dirty coil. We find the cause before adding anything." },
      { title: "Frozen coil or iced lines", description: "Ice means restricted airflow or low refrigerant. We check filters, blower and ducts, then the refrigerant side." },
      { title: "Short cycling", description: "An AC that turns on and off every few minutes can be oversized, low on charge or have a thermostat or sensor issue." },
      { title: "Water leaking inside", description: "A clogged condensate drain or cracked pan. We clear it and make sure it drains the way it should." },
      { title: "Noisy outdoor unit", description: "Buzzing, rattling or grinding often points to a failing fan motor, capacitor or loose parts. Catching it early can prevent a bigger failure." },
    ],
    sections: [
      {
        heading: "Repair or replace: how we help you decide",
        body: [
          "We look at the age of the system, the condition of the coil and compressor, how often it has needed repairs, and what the repair costs compared with the value left in the equipment. If your AC is past about 12 to 15 years old and needs a major part like a compressor, replacement is often the better long-term choice.",
          "You get both options in writing so you can decide. If you do replace, we size the new system to your home and give you clear choices, from a standard central air conditioner to a heat pump that also heats.",
        ],
      },
      {
        heading: "AC repair across the North Bay",
        body: [
          "Summer heat hits differently across our area. Inland towns like Santa Rosa, Windsor, Healdsburg, Napa, Fairfield and Vacaville see long hot stretches, while Petaluma and southern Marin get cooler marine air with heat spikes. Older North Bay homes often have undersized or leaky ducts that make an AC work harder, so we check airflow as part of every AC repair.",
        ],
      },
    ],
    related: [
      ["Air conditioning installation", "/services/air-conditioning"],
      ["Furnace & heating repair", "/services/furnace-repair"],
      ["All HVAC & water heater repair", "/hvac-repair"],
      ["Ductless mini splits", "/services/mini-splits"],
      ["AC maintenance checklist", "/guides/ac-maintenance-checklist"],
    ],
    reviewIds: ["n40", "n3", "n13", "n7"],
    reviewsTitle: "AC repair: what North Bay homeowners say",
    faqs: [
      { question: "How fast can you come out for an AC repair?", answer: "For urgent calls we aim to get out same-day or next-day, depending on the season. Our phones are answered 24/7, so call (707) 988-5858 and we'll give you an honest timeline." },
      { question: "Do you repair ductless mini splits too?", answer: "Yes. We repair ductless mini split systems as well as central air conditioners and heat pumps." },
      { question: "Why is my AC blowing warm air?", answer: "The most common causes are low refrigerant from a leak, a failed capacitor or fan motor in the outdoor unit, a dirty coil, or a thermostat setting. We test the system to find the real cause before recommending a fix." },
      { question: "Should I repair or replace my AC?", answer: "If the system is under about 10 years old and the repair is modest, repair usually makes sense. If it's past 12 to 15 years and needs a major part like a compressor, replacement is often the better investment. We'll lay out both options in writing." },
      { question: "Do you give a price before starting the repair?", answer: "Yes. After we diagnose the problem, you get a written price before any repair work starts." },
      { question: "What areas do you cover for AC repair?", answer: "We repair air conditioners across Sonoma, Marin, Napa and Solano counties, including Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, Napa, Fairfield and Vacaville." },
    ],
  },
  {
    slug: "furnace-repair",
    navLabel: "Furnace & Heating Repair",
    eyebrow: "Repair service",
    name: "Furnace and heating repair in Petaluma, Sonoma and Marin",
    seoTitle: "Furnace & Heating Repair in Petaluma & Sonoma County",
    seoDescription:
      "Furnace, heat pump and ductless heating repair in Petaluma, Santa Rosa and across Sonoma, Marin, Napa & Solano. Phones answered 24/7. Call (707) 988-5858.",
    tagline: "No heat, a furnace that won't stay lit, or strange noises? We'll get your heat back on.",
    heroImage: "/images/hero/services.jpg",
    answer:
      "No heat? Green Core repairs gas furnaces, heat pumps and ductless heating across Sonoma and Marin, plus Napa and Solano. Call (707) 988-5858 any time, or book online. For urgent calls we aim to get out same-day or next-day depending on the season, and you get a written price before any work starts.",
    intro: [
      "When the heat goes out on a cold North Bay night, you want it fixed safely and fixed right. Our technicians test the whole system, from the thermostat and ignition to the blower, venting and ducts, so the repair lasts.",
      "We repair most major brands of gas furnaces, heat pumps and ductless mini splits. If your furnace is near the end of its life, we'll tell you honestly and show you your options.",
    ],
    problemsHeading: "Common heating problems we fix",
    problems: [
      { title: "No heat at all", description: "Often an ignition or flame sensor problem, a tripped safety switch, a thermostat issue, or a failed control board. We test each part." },
      { title: "Pilot or ignition trouble", description: "Furnaces that click but won't light, or light and shut off, usually have a dirty flame sensor, a failing igniter or a venting problem." },
      { title: "Blower runs but no heat", description: "The fan moves air but it's cold: ignition, gas valve or limit switch problems are common causes." },
      { title: "Short cycling", description: "A furnace that turns on and off quickly may be overheating from a clogged filter or blocked airflow, or have a sensor issue." },
      { title: "Burning or odd smells", description: "A dusty smell on the first cold day is normal. A strong burning or electrical smell is not: turn the system off and call us." },
      { title: "High heating bills", description: "Rising bills often mean dirty burners, leaky ducts or a system working too hard. We find where the heat is going." },
    ],
    sections: [
      {
        heading: "Repair or replace: how we help you decide",
        body: [
          "We look at the furnace's age, the condition of the heat exchanger and blower, how often it has needed repairs, and the cost of the repair compared with the value left in the equipment. Furnaces past about 15 to 20 years old that need a major repair are often better replaced.",
          "You get both options in writing. If you replace, we size the new system to your home and walk you through gas furnace, heat pump and dual fuel options so you can choose what fits.",
        ],
      },
      {
        heading: "Heating repair for older North Bay homes",
        body: [
          "Many homes in Petaluma, Santa Rosa, Sonoma, San Rafael and Napa have furnaces in tight closets, attics or crawlspaces, with older ductwork. We check venting, gas connections and ducts as part of every heating repair, because those are where safety and comfort problems hide.",
        ],
        bullets: [
          "Safety check on venting and combustion on every gas furnace repair",
          "Filters, flame sensors and igniters checked and cleaned",
          "Clear explanation of what failed and why",
        ],
      },
    ],
    related: [
      ["Furnace installation", "/services/furnaces"],
      ["AC repair", "/services/ac-repair"],
      ["All HVAC & water heater repair", "/hvac-repair"],
      ["Ductwork repair", "/services/duct-work"],
      ["Furnace maintenance checklist", "/guides/furnace-maintenance-checklist"],
    ],
    reviewIds: ["g22", "g4", "g18", "n33"],
    reviewsTitle: "Heating repair: what North Bay homeowners say",
    faqs: [
      { question: "How fast can you come out for a furnace repair?", answer: "For urgent no-heat calls we aim to get out same-day or next-day, depending on the season. Our phones are answered 24/7, so call (707) 988-5858." },
      { question: "Why won't my furnace turn on?", answer: "Common causes are a thermostat problem, a dirty flame sensor, a failed igniter, a tripped limit switch from a clogged filter, or a control board issue. We test the system to find the real cause." },
      { question: "Do you repair heat pumps and ductless heating too?", answer: "Yes. We repair gas furnaces, heat pumps and ductless mini splits that heat your home." },
      { question: "Should I repair or replace my furnace?", answer: "If the furnace is under about 15 years old and the repair is modest, repair usually makes sense. If it's older and needs a major part, or has a cracked heat exchanger, replacement is the safer choice. We'll lay out both options in writing." },
      { question: "Is a burning smell from my furnace dangerous?", answer: "A light dusty smell the first time the heat runs each fall is normal and fades quickly. A strong burning, electrical or gas smell is not. Turn the system off, leave the house if you smell gas, and call your gas utility and us." },
      { question: "What areas do you cover for heating repair?", answer: "We repair furnaces and heating systems across Sonoma, Marin, Napa and Solano counties, including Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, Napa, Fairfield and Vacaville." },
    ],
  },
];

export function getRepairPage(slug: string) {
  return repairPages.find((p) => p.slug === slug);
}
