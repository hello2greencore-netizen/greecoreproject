import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    // Tier 1 — highest commercial intent
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },

    // Tier 2 — service index + area index
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Tier 3 — individual service pages
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // Tier 4 — local city pages (high local SEO value)
    ...serviceAreas.map((a) => ({
      url: `${base}/service-areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Tier 5 — trust & brand pages
    { url: `${base}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
