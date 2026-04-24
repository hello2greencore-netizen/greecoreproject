import { Hero } from "@/components/sections/Hero";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaCard } from "@/components/sections/ServiceAreaCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/data/serviceAreas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas — Sonoma & Marin Counties",
  description:
    "Green Core Heating & Air serves homeowners across Sonoma and Marin counties, including Petaluma, Rohnert Park, Santa Rosa, Novato, San Rafael, Mill Valley, Tiburon, and Sebastopol.",
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
          <SectionHeading
            eyebrow="Cities we serve"
            title="Find your city."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <ServiceAreaCard area={area} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
