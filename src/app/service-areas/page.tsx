import { Hero } from "@/components/sections/Hero";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaCard } from "@/components/sections/ServiceAreaCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { serviceAreas } from "@/data/serviceAreas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HVAC Service Areas — Sonoma & Marin Counties",
  description:
    "Green Core serves Petaluma, Santa Rosa, Novato, San Rafael, Mill Valley, Tiburon, Sebastopol & Cotati. Local HVAC experts in Sonoma & Marin counties.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Service areas"
        title="Proudly serving the North Bay."
        description="From Petaluma to Tiburon, we handle heating and cooling for homes across Sonoma and Marin."
        image="/images/hero/service-areas.jpg"
        imageAlt="Rolling Sonoma County hills at golden hour"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Cities we serve"
              title="Find your city."
            />
          </Reveal>
          <RevealGroup
            as="ul"
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {serviceAreas.map((area) => (
              <RevealItem as="li" key={area.slug}>
                <ServiceAreaCard area={area} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
