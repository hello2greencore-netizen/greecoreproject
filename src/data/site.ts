export const siteConfig = {
  name: "Green Core Heating & Air",
  shortName: "Green Core",
  url: "https://www.greencorehvac.com",
  description:
    "Green Core Heating & Air is a family-owned heating, cooling, and water heating company in Petaluma, CA. We install, repair, and maintain furnaces, air conditioners, heat pumps, ductless mini splits, ductwork, and gas, electric, tankless, and heat pump water heaters for homes across Sonoma and Marin counties.",
  /** Short version (under 155 characters) for page meta descriptions and the footer. */
  metaDescription:
    "Family-owned heating, cooling, and water heating company in Petaluma serving Sonoma and Marin. Furnaces, AC, heat pumps, mini splits, and water heaters.",
  phone: "(707) 988-5858",
  /** International format for structured data. */
  phoneE164: "+1-707-988-5858",
  phoneHref: "tel:+17079885858",
  email: "hello@greencorehvac.com",
  emailHref: "mailto:hello@greencorehvac.com",
  address: {
    street: "1600 Corporate Circle",
    city: "Petaluma",
    state: "CA",
    zip: "94954",
  },
  /** Matches the Google Business Profile (open 24 hours, 7 days). Keep the two in sync. */
  hours: [{ day: "Every day", hours: "Open 24 hours" }],
  founders: ["Tony Milano", "Zach Milano"],
  /** Map pin from the Google Business Profile. */
  geo: { latitude: 38.2320137, longitude: -122.5999221 },
  /** Official profiles. Used for the schema sameAs list, which tells Google and AI tools these are all the same business. */
  social: {
    google: "https://www.google.com/maps?cid=9743517891115478455",
    yelp: "https://www.yelp.com/biz/green-core-heating-and-air-petaluma-4",
    angi: "https://www.angi.com/companylist/us/ca/petaluma/green-core-heating-air-reviews-1.htm",
    facebook: "https://www.facebook.com/p/Green-Core-Heating-Air-61591652228106/",
    instagram: "https://www.instagram.com/greencorehvac/",
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
