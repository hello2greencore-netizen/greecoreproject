export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type Service = {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  summary: string;
  heroImage: string;
  overview: string[];
  benefits?: { title: string; description: string }[];
  faqs: FAQ[];
  /** Groups services in menus and lists. */
  category: ServiceCategory;
  /** Slugs of related services to cross-link at the bottom of the page. */
  related?: string[];
};

export type ServiceCategory = "heating-cooling" | "water-heating";

export type ServiceAreaSection = {
  heading: string;
  body: string[];
};

/** A titled block of page copy with optional bullet points. */
export type ContentSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

/** A simple comparison table; the first column is the row label. */
export type ComparisonTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type ShowcaseProject = {
  title: string;
  date: string;
  summary: string;
  /** Public CompanyCam (Trusty) showcase page with the job photos. */
  url: string;
};

export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  heroImage: string;
  intro: string;
  lifestyleLine: string;
  landmarks: string[];
  sections: ServiceAreaSection[];
  scheduleLabel?: string;
  /** Electric provider when it differs from the county default (e.g. Healdsburg's city-run utility). */
  utility?: string;
  /** One town-specific line for the "Water heaters in {city}" section. */
  waterHeaterNote?: string;
  /** Local FAQs, rendered with FAQ schema. */
  faqs?: FAQ[];
  /** City name exactly as it appears in the CompanyCam gallery's City & State filter, e.g. "Sonoma, CA". */
  showcaseCity?: string;
  /** Written summaries of CompanyCam showcase jobs in this town (indexable text). */
  projects?: ShowcaseProject[];
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  service?: string;
  /** Approximate review date (YYYY-MM-DD), shown as "2 weeks ago" like Google. */
  date?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CoreValue = {
  letter: "C" | "O" | "R" | "E";
  title: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};
