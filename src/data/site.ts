export const siteConfig = {
  name: "Green Core Heating & Air",
  shortName: "Green Core",
  url: "https://www.greencorehvac.com",
  description:
    "Green Core Heating & Air is a locally owned HVAC company serving Sonoma and Marin counties with expert heat pump, water heater, AC, furnace, and mini split installation and service.",
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
    /** href "#book" opens the Housecall Pro online booking window. */
    primary: { label: "Book Now", href: "#book" },
    secondary: { label: "Call Us", href: "tel:+17079885858" },
  },
  license: "CSLB #1131183",
  /** CompanyCam (Trusty) portfolio gallery embed. Add ?city_states=City%2C+CA to filter by town. */
  projectGalleryUrl:
    "https://trusty.app/embed/website-gallery/2f2e35f2-246a-417b-a2c1-77e260843f49",
  ogImage: "/images/hero/home.jpg",
} as const;
