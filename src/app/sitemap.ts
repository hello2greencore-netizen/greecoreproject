import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/blog";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const posts = getAllPosts();
  // Only real dates go in lastModified. Static pages leave it off, so a weekly
  // deploy doesn't tell Google every page changed when only new posts were added.
  const postDate = (p: { date: string; updated?: string }) => new Date(`${p.updated ?? p.date}T12:00:00`);
  const newestPost = posts.length > 0 ? postDate(posts[0]) : undefined;

  return [
    // Tier 1 — highest commercial intent
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.95 },

    // Tier 2 — service index + area index
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`, changeFrequency: "monthly", priority: 0.85 },

    // Repair / installation / maintenance hubs
    ...["hvac-repair", "hvac-installation", "hvac-maintenance"].map((slug) => ({
      url: `${base}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // Tier 3 — individual service pages
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // Tier 4 — local city pages (high local SEO value)
    ...serviceAreas.map((a) => ({
      url: `${base}/service-areas/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Blog
    { url: `${base}/blog`, lastModified: newestPost, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: postDate(p),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Homeowner guides (tools, cost guide, decision guides, checklists)
    { url: `${base}/guides`, changeFrequency: "monthly", priority: 0.75 },
    ...guides.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    { url: `${base}/our-work`, changeFrequency: "weekly", priority: 0.7 },

    // Tier 5 — trust & brand pages
    { url: `${base}/testimonials`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
