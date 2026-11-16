import Script from "next/script";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { PainPoints } from "@/components/sections/PainPoints";
import { AwardSection } from "@/components/sections/AwardSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MapSection } from "@/components/sections/MapSection";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

/**
 * /meta: a copy of the homepage for Meta (Facebook/Instagram) ad traffic.
 * No bottom call-to-action section, no Corey chat helper or sticky mobile bar
 * (hidden in layout.tsx), and the LeadConnector chat widget instead.
 * Kept out of Google (noindex) so it never competes with the real homepage,
 * and left out of the sitemap.
 */
export const metadata = {
  ...buildMetadata({
    title: "Petaluma HVAC & Heat Pump Experts | Green Core Heating & Air",
    description:
      "Family-owned HVAC and water heater company in Petaluma. Furnace, AC, heat pump, mini split, and water heater installation and repair across Sonoma, Marin, Napa & Solano.",
    path: "/",
    absolute: true,
  }),
  robots: { index: false, follow: true },
};

export default function MetaLandingPage() {
  return (
    <>
      <Hero
        eyebrow="Sonoma, Marin, Napa & Solano HVAC"
        title="HVAC & water heater experts for Sonoma, Marin, Napa, and Solano homes."
        description="Clean, efficient heating, cooling, and hot water for the North Bay. Expert heat pumps, water heaters, AC, furnaces, mini splits, and more."
        image="/images/hero/home.jpg"
        imageAlt="Modern home at sunset in Sonoma County"
        primaryCta={siteConfig.cta.primary}
        secondaryCta={{ label: "Get an Online Estimate", href: "/instant-estimate" }}
      />
      <AboutPreview />
      <PainPoints />
      <WhyDifferent />
      <AwardSection />
      <TestimonialsSection />
      <MapSection background="white" linkTowns />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6afb94e4513bdcee482f7b23"
        strategy="afterInteractive"
      />
    </>
  );
}
