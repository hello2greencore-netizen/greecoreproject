export const siteConfig = {
  name: "Green Core Heating & Air",
  shortName: "Green Core",
  url: "https://greencoreheatingair.com",
  description:
    "Green Core Heating & Air is a locally owned HVAC company serving Sonoma and Marin counties with expert heat pump, AC, furnace, and mini split installation and service.",
  phone: "(707) 988-5858",
  phoneHref: "tel:+17079885858",
  email: "hello@greencorehvac.com",
  emailHref: "mailto:hello@greencorehvac.com",
  address: {
    street: "1600 Corporate Circle",
    city: "Petaluma",
    state: "CA",
    zip: "94954",
  },
  hours: [
    { day: "Mon – Fri", hours: "7:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
    yelp: "#",
    google: "#",
  },
  cta: {
    primary: { label: "60 second form", href: "/contact" },
    secondary: { label: "Call Us", href: "tel:+17079885858" },
  },
  license: "CSLB #1131183",
  ogImage: "/images/og-default.jpg",
} as const;
