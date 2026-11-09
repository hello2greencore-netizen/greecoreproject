import type { FAQ } from "@/types";

export type CountyHub = {
  slug: string;
  county: "Napa County" | "Solano County";
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string[];
  /** Towns we serve that don't have their own page yet (named in the copy only). */
  alsoServing?: string;
  rebates: string[];
  faqs: FAQ[];
};

export const countyHubs: CountyHub[] = [
  {
    slug: "napa-county",
    county: "Napa County",
    metaTitle: "HVAC & Water Heaters in Napa County, CA",
    metaDescription:
      "Green Core Heating & Air serves Napa County: AC, furnaces, heat pumps, mini splits & water heaters in Napa, American Canyon & up-valley. No trip charge.",
    heroTitle: "Heating, cooling & water heaters for Napa County homes.",
    heroDescription:
      "Family-owned, based in Petaluma, and now serving homeowners across Napa County with the same careful installs and straight answers.",
    intro: [
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, ductwork, and water heaters for homes throughout Napa County. From historic houses in Napa to 2000s-era homes in American Canyon, we design every system around the house it's going into.",
      "Every job starts with a straight look at what you have and what's bothering you, whether that's a room that never cools down, a furnace on its last legs, or a water heater that's starting to leak. Then we give you clear options and upfront pricing, with no pressure.",
    ],
    alsoServing:
      "We also take projects in Yountville, St. Helena, Calistoga, and across unincorporated Napa County. Call (707) 988-5858 to get on the schedule.",
    rebates: [
      "All of Napa County is served by MCE, with PG&E handling delivery. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through MCE, TECH Clean California, or BayREN.",
      "We check what you qualify for, file the paperwork, and pull the permit with the City of Napa, the City of American Canyon, or Napa County.",
    ],
    faqs: [
      {
        question: "Do you charge a trip fee for Napa County?",
        answer:
          "No. There's no trip charge anywhere in our Napa County service area. You get the same pricing and free estimates as our Sonoma and Marin customers.",
      },
      {
        question: "Which Napa County towns do you serve?",
        answer:
          "Napa and American Canyon, plus Yountville, St. Helena, Calistoga, and unincorporated Napa County. Not sure? Call (707) 988-5858.",
      },
      {
        question: "Are there HVAC rebates in Napa County?",
        answer:
          "Napa County homes are MCE customers. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through MCE, TECH Clean California, or BayREN. We check and handle the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025.",
      },
      {
        question: "Do you replace water heaters in Napa County?",
        answer:
          "Yes. We install heat pump, tankless, gas, and electric water heaters. Gas and electric tank installs start at $2,850, with same-day replacement when our schedule allows.",
      },
    ],
  },
  {
    slug: "solano-county",
    county: "Solano County",
    metaTitle: "AC & HVAC in Fairfield, Vacaville & Solano County, CA",
    metaDescription:
      "AC, furnaces, heat pumps & water heaters in Fairfield, Green Valley, Vacaville, Benicia & north Vallejo. No trip charge. Military discounts available.",
    heroTitle: "AC, heating & water heaters for Solano County homes.",
    heroDescription:
      "Fairfield, Green Valley, Cordelia, Vacaville, Benicia, and north Vallejo. Family-owned, upfront pricing, and no trip charge.",
    intro: [
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, ductwork, and water heaters for homes in Solano County. Summers here get hot, so we put extra care into sizing cooling systems that keep up without running nonstop.",
      "Every job starts with a load calculation and a duct check, then clear options and upfront pricing. Military discounts are available for families at Travis and beyond. Just let us know when you book.",
    ],
    alsoServing:
      "We also serve Suisun City and parts of Dixon. Call (707) 988-5858 to check your address.",
    rebates: [
      "Fairfield, Benicia, Vallejo, and unincorporated Solano County (including most of Green Valley) are served by MCE. Vacaville, Suisun City, and Dixon are PG&E. Either way, depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through TECH Clean California or BayREN, plus MCE programs in MCE towns.",
      "We check what you qualify for, file the paperwork, and pull the permit with your city or Solano County.",
    ],
    faqs: [
      {
        question: "Do you charge a trip fee for Solano County?",
        answer:
          "No. There's no trip charge anywhere in our Solano County service area. You get the same pricing and free estimates as our Sonoma and Marin customers.",
      },
      {
        question: "Do you offer a military discount?",
        answer:
          "Yes. Military discounts are available. Just let us know when you book, and we'll take care of it on your estimate.",
      },
      {
        question: "Which Solano County towns do you serve?",
        answer:
          "Fairfield, Green Valley, Cordelia, Suisun City, Vacaville, Benicia, north Vallejo, and parts of Dixon. Not sure if you're in our area? Call (707) 988-5858.",
      },
      {
        question: "Will a new AC keep up with Solano County summers?",
        answer:
          "Yes, when it's sized correctly. We run a load calculation and check the ductwork so your system can handle 100-degree afternoons without running nonstop.",
      },
    ],
  },
];

export const getCountyHub = (slug: string) => countyHubs.find((h) => h.slug === slug);
