import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { PainPoints } from "@/components/sections/PainPoints";
import { AwardSection } from "@/components/sections/AwardSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Petaluma HVAC & Heat Pump Experts | Green Core Heating & Air",
  description:
    "Family-owned HVAC and water heater company in Petaluma. Furnace, AC, heat pump, mini split, and water heater installation and repair across Sonoma & Marin.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Sonoma & Marin HVAC"
        title="Heat pump & HVAC experts for Sonoma and Marin homes."
        description="Clean, efficient heating, cooling, and hot water for the North Bay. Expert heat pumps, water heaters, AC, furnaces, mini splits, and more."
        image="/images/hero/home.jpg"
        imageAlt="Modern home at sunset in Sonoma County"
        primaryCta={siteConfig.cta.primary}
        secondaryCta={{ label: "Get an Instant Estimate", href: "/instant-estimate" }}
      />
      <AboutPreview />
      <PainPoints />
      <WhyDifferent />
      <AwardSection />
      <TestimonialsSection />
      <MapSection background="white" />
      <CTASection />
    </>
  );
}
