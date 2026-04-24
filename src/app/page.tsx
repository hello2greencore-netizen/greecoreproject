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
  title: "HVAC in Sonoma & Marin — Heat Pumps, AC, Furnaces",
  description:
    "Green Core Heating & Air is a locally owned HVAC company serving Sonoma and Marin counties with heat pump, AC, furnace, and mini split installation and service.",
  path: "/",
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
