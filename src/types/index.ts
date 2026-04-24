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
};

export type ServiceAreaSection = {
  heading: string;
  body: string[];
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
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  service?: string;
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
