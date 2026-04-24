import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/testimonials",
    "/contact",
  ];
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const areaRoutes = serviceAreas.map((a) => `/service-areas/${a.slug}`);
  const all = [...staticRoutes, ...serviceRoutes, ...areaRoutes];
  const now = new Date();
  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
