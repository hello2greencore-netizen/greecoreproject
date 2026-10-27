import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects for old-site URLs that Google still has on record
  // (found in Search Console as 404s, Oct 26, 2026).
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/service-area", destination: "/service-areas", permanent: true },
      { source: "/cooling", destination: "/services/air-conditioning", permanent: true },
      { source: "/heating", destination: "/services/furnaces", permanent: true },
      { source: "/heating-1", destination: "/services/furnaces", permanent: true },
      { source: "/service-calls", destination: "/hvac-repair", permanent: true },
    ];
  },
};

export default nextConfig;
