import type { FAQ } from "@/types";

export type ServiceType = {
  slug: string;
  kind: "repair" | "installation" | "maintenance";
  navLabel: string;
  eyebrow: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  itemsHeading: string;
  /** One line per service slug, describing this kind of work for that service. */
  items: Record<string, string>;
  steps: { title: string; description: string }[];
  faqs: FAQ[];
};

export const serviceTypes: ServiceType[] = [
  {
    slug: "hvac-repair",
    kind: "repair",
    navLabel: "HVAC & Water Heater Repair",
    eyebrow: "Repair service",
    name: "HVAC & Water Heater Repair in Sonoma & Marin",
    seoTitle: "HVAC, Heat Pump & Water Heater Repair in Sonoma & Marin",
    seoDescription: "Heat pump, AC, furnace, mini split, and water heater repair in Petaluma, Santa Rosa, and across Sonoma & Marin. Fast scheduling and honest repair-or-replace advice.",
    tagline: "Fast, honest repairs for heating, cooling, and hot water.",
    heroImage: "/images/hero/services.jpg",
    intro: [
      "When your heat, AC, or hot water stops working, Green Core Heating & Air sends a trained technician to find the real problem and fix it right. We repair heat pumps, air conditioners, furnaces, ductless mini splits, ductwork, Harvest Thermal systems, and heat pump, tankless, gas, and electric water heaters for homes across Sonoma and Marin counties.",
      "For urgent calls, we aim to get out same-day or next-day depending on the season, and you'll always get a straight answer about whether a repair makes sense or replacement is the better investment. Our phones are answered 24/7, so call (707) 988-5858 any time and we'll book the earliest available visit."
    ],
    itemsHeading: "What we repair",
    items: {
      "heat-pumps": "Not heating or cooling, frozen outdoor coils, short cycling, error codes, and refrigerant leaks.",
      "air-conditioning": "Warm air from the vents, failed capacitors and contactors, refrigerant leaks, and frozen coils.",
      "furnaces": "No heat, ignition and flame sensor problems, failed blower or inducer motors, and short cycling.",
      "mini-splits": "Indoor units not heating or cooling, water dripping from the head, error codes, and sensor issues.",
      "duct-work": "Disconnected, crushed, or leaky ducts that leave rooms hot, cold, or dusty.",
      "harvest-thermal": "Diagnostics and repairs for Harvest Thermal heating, cooling, and hot water systems.",
      "heat-pump-water-heaters": "Lukewarm water, error codes, clogged condensate drains, and fan or compressor problems.",
      "tankless-water-heaters": "Error codes, fluctuating temperatures, scale buildup, and ignition or venting problems.",
      "gas-water-heaters": "No hot water, pilot and gas valve problems, leaking tanks or valves, and venting issues.",
      "electric-water-heaters": "Failed heating elements and thermostats, tripped breakers, and sediment buildup."
    },
    steps: [
      {
        "title": "Call or book online",
        "description": "Call (707) 988-5858 or tap Book Now. Our phones are answered 24/7."
      },
      {
        "title": "Find the real problem",
        "description": "We test the whole system, not just the part that failed, so the fix lasts."
      },
      {
        "title": "Clear options first",
        "description": "You get a written price before any work starts, plus an honest recommendation if replacing makes more sense."
      },
      {
        "title": "Fix it and verify",
        "description": "We make the repair, test the system, and make sure it's running the way it should."
      }
    ],
    faqs: [
      {
        "question": "How fast can you come out for a repair?",
        "answer": "For urgent calls we aim to respond same-day or next-day, depending on the season. Call (707) 988-5858 and we'll give you an honest timeline."
      },
      {
        "question": "Should I repair or replace my system?",
        "answer": "It depends on the system's age, condition, and the cost of the repair. If a heat pump, AC, or furnace is past about 12 to 15 years old and needs a major repair, replacement is often the better investment. We'll lay out both options so you can decide."
      },
      {
        "question": "Do you repair all brands?",
        "answer": "We work on most major brands of heat pumps, air conditioners, furnaces, ductless mini splits, and water heaters."
      },
      {
        "question": "Do you repair water heaters?",
        "answer": "Yes, including heat pump, tankless, gas, and electric water heaters. If replacement is the better call, gas and electric tank installs start at $2,850, with same-day replacement when our schedule allows."
      }
    ],
  },
  {
    slug: "hvac-installation",
    kind: "installation",
    navLabel: "Installation & Replacement",
    eyebrow: "Installation",
    name: "Heat Pump, HVAC & Water Heater Installation in Sonoma & Marin",
    seoTitle: "HVAC, Heat Pump & Water Heater Installation in Sonoma & Marin",
    seoDescription: "New heat pumps, AC, furnaces, mini splits, Harvest Thermal, and water heaters designed and installed in Sonoma & Marin. Free estimates; permits and rebates handled.",
    tagline: "Designed for your home, installed right the first time.",
    heroImage: "/images/services/heat-pumps.jpg",
    intro: [
      "Green Core Heating & Air designs and installs heat pumps, air conditioning, furnaces, ductless mini splits, ductwork, Harvest Thermal systems, and heat pump, tankless, gas, and electric water heaters for homes across Sonoma and Marin counties.",
      "Every install starts with a free in-home estimate and a design built around your home: a load calculation, a duct check, and an electrical panel review if you're going electric. We pull the permits, handle the inspection, and file the rebate paperwork for programs like TECH Clean California, BayREN, Sonoma Clean Power, and MCE when you qualify."
    ],
    itemsHeading: "What we install",
    items: {
      "heat-pumps": "Ducted heat pumps that heat and cool on one all-electric system, sized with a load calculation.",
      "air-conditioning": "New central air conditioning, or cooling added to an existing furnace.",
      "furnaces": "High-efficiency furnace replacements, or a heat pump if you're ready to go electric.",
      "mini-splits": "Ductless systems for homes without ducts, additions, ADUs, and garages.",
      "duct-work": "New and replacement duct systems, insulated and sealed for better airflow.",
      "harvest-thermal": "One integrated system for heating, cooling, and hot water.",
      "heat-pump-water-heaters": "SANCO2 and GE GeoSpring heat pump water heaters, often eligible for rebates.",
      "tankless-water-heaters": "Navien tankless water heaters, with gas line and venting sized correctly.",
      "gas-water-heaters": "Bradford White and American Standard tanks, installed to code. Installs start at $2,850.",
      "electric-water-heaters": "Bradford White and American Standard tanks from $2,850, or an upgrade to a heat pump model."
    },
    steps: [
      {
        "title": "Free in-home estimate",
        "description": "We look at your home, your current system, and what isn't working."
      },
      {
        "title": "Design and written options",
        "description": "Load calculation, duct and panel check, and clear written pricing for each option."
      },
      {
        "title": "Permits and rebates",
        "description": "We pull the permit and file rebate paperwork for the programs you qualify for."
      },
      {
        "title": "Clean, careful install",
        "description": "We protect your floors, install to code, and clean up at the end of every day."
      },
      {
        "title": "Test and walkthrough",
        "description": "We verify performance, then show you how to get the most from your new system."
      }
    ],
    faqs: [
      {
        "question": "Do you offer free estimates for installations?",
        "answer": "Yes. In-home estimates for installation and replacement projects are free, and you'll get clear written pricing before any work begins."
      },
      {
        "question": "How long does an installation take?",
        "answer": "A water heater replacement usually takes part of a day. Heat pump, furnace, and AC replacements typically take one to a few days, depending on ductwork and electrical work."
      },
      {
        "question": "Do you handle permits and rebates?",
        "answer": "Yes. We pull the permit, schedule the inspection, and file rebate paperwork for programs like TECH Clean California, BayREN, Sonoma Clean Power, and MCE when you qualify. The federal 25C tax credit ended for systems installed after December 31, 2025."
      },
      {
        "question": "What brands do you install?",
        "answer": "For heating and cooling, we install brands including Carrier and Mitsubishi. For water heaters, we install SANCO2, GE GeoSpring, Navien, Bradford White, and American Standard."
      }
    ],
  },
  {
    slug: "hvac-maintenance",
    kind: "maintenance",
    navLabel: "Maintenance & Tune-Ups",
    eyebrow: "Maintenance",
    name: "HVAC & Water Heater Maintenance in Sonoma & Marin",
    seoTitle: "HVAC, Heat Pump & Water Heater Maintenance in Sonoma & Marin",
    seoDescription: "Heat pump, AC, furnace, mini split, and water heater tune-ups in Sonoma & Marin. Catch problems early, keep efficiency up, and help protect your warranty.",
    tagline: "Tune-ups that keep your system efficient and reliable.",
    heroImage: "/images/services/mini-splits.jpg",
    intro: [
      "Green Core Heating & Air provides maintenance and tune-ups for heat pumps, air conditioners, furnaces, ductless mini splits, ductwork, Harvest Thermal systems, and heat pump, tankless, gas, and electric water heaters across Sonoma and Marin counties.",
      "Regular maintenance keeps your system running efficiently, catches small problems before they become breakdowns, and can help protect your manufacturer warranty. Most systems need a tune-up at least once a year, and heat pumps that heat and cool year-round do best with a check before summer and again before winter."
    ],
    itemsHeading: "What we maintain",
    items: {
      "heat-pumps": "Coil cleaning, refrigerant and electrical checks, and defrost and thermostat testing.",
      "air-conditioning": "Condenser coil cleaning, capacitor and contactor tests, refrigerant check, and drain line clearing.",
      "furnaces": "Burner, flame sensor, and ignition service, safety checks, and filter replacement.",
      "mini-splits": "Indoor coil and blower cleaning, filter cleaning, and condensate drain checks.",
      "duct-work": "Inspection for leaks, crushed runs, and disconnected joints.",
      "harvest-thermal": "System checks for heating, cooling, and hot water performance.",
      "heat-pump-water-heaters": "Air filter cleaning, condensate drain check, and anode rod inspection.",
      "tankless-water-heaters": "Yearly descaling flush, inlet filter cleaning, and venting check.",
      "gas-water-heaters": "Sediment flush, anode rod inspection, relief valve test, and venting and seismic strap check.",
      "electric-water-heaters": "Sediment flush, element and thermostat test, and relief valve check."
    },
    steps: [
      {
        "title": "Book a tune-up",
        "description": "Call (707) 988-5858 or tap Book Now. Spring and fall are the best times."
      },
      {
        "title": "Inspect and clean",
        "description": "We clean coils, filters, and drains and inspect every major component."
      },
      {
        "title": "Test and measure",
        "description": "We check refrigerant, electrical, airflow, and safety controls against spec."
      },
      {
        "title": "Clear report",
        "description": "You get a summary of what we found and anything to keep an eye on, with no pressure."
      }
    ],
    faqs: [
      {
        "question": "How often should my HVAC system be serviced?",
        "answer": "At least once a year. Heat pumps and mini splits that heat and cool year-round do best with two visits: one before summer and one before winter. Furnaces are best checked in the fall."
      },
      {
        "question": "What's included in a tune-up?",
        "answer": "We clean the coils, filters, and condensate drains, test electrical parts like capacitors and contactors, check refrigerant and airflow, and verify safety controls. For furnaces, we also service the burners, ignition, and flame sensor."
      },
      {
        "question": "Do water heaters need maintenance?",
        "answer": "Yes. Tank water heaters benefit from a sediment flush and anode rod check, tankless units need a yearly descaling flush, and heat pump water heaters need their air filter cleaned and drain checked."
      },
      {
        "question": "Is maintenance worth it?",
        "answer": "Clean coils, clear drains, and healthy electrical parts help a system run more efficiently and last longer, and a tune-up often catches a weak part before it fails on the hottest or coldest day of the year."
      }
    ],
  },
];

export const getServiceTypeBySlug = (slug: string): ServiceType | undefined =>
  serviceTypes.find((t) => t.slug === slug);
