import type { FAQ, ServiceArea } from "@/types";
import { utilityForCounty } from "@/data/serviceAreas";

/**
 * Local FAQs for a city page: the city's own questions plus a few standard
 * ones (heat pumps, rebates, water heaters) when the page doesn't already
 * cover them. Rendered with FAQ schema so Google and AI tools can quote them.
 */
export function cityFaqs(area: ServiceArea): FAQ[] {
  const own = area.faqs ?? [];
  const covers = (word: string) =>
    own.some((f) => `${f.question} ${f.answer}`.toLowerCase().includes(word));
  const utility = utilityForCounty(area.county);
  const extra: FAQ[] = [];

  if (!covers("heat pump")) {
    extra.push({
      question: `Do you install heat pumps in ${area.city}?`,
      answer: `Yes. Green Core designs and installs heat pumps for ${area.city} homes, including ducted heat pumps, ductless mini splits, and Harvest Thermal systems. Every install starts with a load calculation so the system is sized for your home.`,
    });
  }
  if (!covers("rebate")) {
    extra.push({
      question: `Are there heat pump rebates in ${area.city}?`,
      answer: `Most ${area.city} homes get their electricity through ${utility}, with PG&E handling delivery. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through ${utility}, TECH Clean California, or BayREN. We check what's available and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025.`,
    });
  }
  if (!covers("water heater")) {
    extra.push({
      question: `Do you replace water heaters in ${area.city}?`,
      answer: `Yes. We install heat pump, tankless, gas, and electric water heaters in ${area.city}. Gas and electric tank installs start at $2,850, and we offer same-day replacement when our schedule allows.`,
    });
  }
  return [...own, ...extra];
}
