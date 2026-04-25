import { siteConfig } from "@/data/site";
import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export function LocalBusinessSchema() {
  const totalReviews = testimonials.length;
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews;

  const validSocial = Object.values(siteConfig.social).filter(
    (v) => v && v !== "#",
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sonoma County" },
      { "@type": "AdministrativeArea", name: "Marin County" },
      ...serviceAreas.map((a) => ({ "@type": "City", name: a.city })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: String(totalReviews),
      bestRating: "5",
      worstRating: "1",
    },
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
