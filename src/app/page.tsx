import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Green Core Heating & Air | Trusted HVAC — Sonoma & Marin",
  description:
    "Locally owned HVAC contractor in Petaluma, CA. Expert heat pump, AC, furnace & mini split installation and repair across Sonoma & Marin counties. Get a free estimate.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Sonoma & Marin HVAC"
        title="Comfort that just works — and built to last."
        description="Clean, efficient heating and cooling for the North Bay. Expert heat pumps, AC, furnaces, mini splits, and more."
        image="/images/hero/home.jpg"
        imageAlt="Modern home at sunset in Sonoma County"
        primaryCta={siteConfig.cta.primary}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />
      <AboutPreview />
      <WhyDifferent />
      <GallerySection />
      <TestimonialsSection limit={3} />
      <MapSection />
      <CTASection />
    </>
  );
}
