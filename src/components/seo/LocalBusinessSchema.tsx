import { siteConfig } from "@/data/site";
import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";

export function LocalBusinessSchema() {
  const validSocial = Object.values(siteConfig.social).filter((v: string) => v.startsWith("http"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "$$",
    image: `${siteConfig.url}/images/header/greencorelogobg.png`,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/header/greencorelogobg.png`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.social.google,
    founder: siteConfig.founders.map((name) => ({ "@type": "Person", name })),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sonoma County" },
      { "@type": "AdministrativeArea", name: "Marin County" },
      ...serviceAreas.map((a) => ({ "@type": "City", name: a.city })),
    ],
    // Open 24 hours, 7 days, matching the Google Business Profile.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: siteConfig.license,
      credentialCategory: "license",
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: `${siteConfig.url}/services/${s.slug}`,
      },
    })),
    ...(validSocial.length > 0 && { sameAs: validSocial }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
