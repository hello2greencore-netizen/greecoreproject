/**
 * Real Google reviews (from testimonials.ts) placed on city and service pages.
 *
 * Town = the city of the customer's job in Housecall Pro, or the town the
 * reviewer named in the review. Never guess a town: a review without a
 * confirmed town stays off city pages. Shown as first name + last initial + town.
 * Matching list: project doc claude/seo/review-town-map.md (Nov 9, 2026).
 */
export const reviewTowns: Record<string, string> = {
  n1: "Santa Rosa", // Sheri C.
  g1: "Santa Rosa", // Patricia A.
  n22: "Santa Rosa", // Timothy D.
  n37: "Santa Rosa", // Lauren P.
  n40: "Santa Rosa", // Shelly F. (named in review)
  n33: "Petaluma", // Jay M. (named in review)
  n32: "Petaluma", // Chris M.
  n38: "Petaluma", // Janet G.
  g11: "Petaluma", // Paul (named in review)
  n20: "Novato", // David F.
  g16: "Novato", // Barbara M.
  n31: "San Rafael", // Barbara O.
  n26: "San Anselmo", // David B.
  g28: "Forest Knolls", // Scott M.
  n21: "San Francisco", // Louis V.
  n28: "San Francisco", // Christine B.
  n30: "San Francisco", // Laurie M.
};

/** City page slug -> review ids, best first. */
export const cityReviews: Record<string, { title?: string; ids: string[] }> = {
  "santa-rosa": { ids: ["n40", "n1", "g1", "n37"] },
  petaluma: { ids: ["n33", "n32", "n38", "g11"] },
  novato: { ids: ["n20", "g16"] },
  "san-rafael": { title: "What San Rafael and nearby Marin customers say", ids: ["n31", "n26"] },
};

/** Service page path (no leading slash) -> review ids, best first. */
export const serviceReviews: Record<string, string[]> = {
  "services/air-conditioning": ["n40", "n32"],
  "services/furnaces": ["n1", "n30"],
  "services/duct-work": ["n30"],
  "services/water-heaters": ["g1", "n22"],
  "services/heat-pump-water-heaters": ["n22"],
  "services/mini-splits": ["n37", "n32"],
  "services/heat-pumps": ["n38", "n21"],
  "services/harvest-thermal": ["n31", "g28"],
  "hvac-repair": ["n33", "n40", "n32"],
  "hvac-maintenance": ["n1"],
  "hvac-installation": ["n20", "g16", "n28"],
};
