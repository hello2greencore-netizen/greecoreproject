import { Hero } from "@/components/sections/Hero";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaCard } from "@/components/sections/ServiceAreaCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { serviceAreas, serviceCounties } from "@/data/serviceAreas";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HVAC Service Areas — Sonoma, Marin, Napa & Solano",
  description:
    "Green Core serves Petaluma, Santa Rosa, Novato, San Rafael, Napa, American Canyon, Fairfield, Vacaville, Benicia & more across Sonoma, Marin, Napa & Solano.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Service areas"
        title="Proudly serving the North Bay."
        description="From Petaluma to Tiburon, Napa to Vacaville, we handle heating, cooling, and water heaters for homes across the North Bay."
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
          {serviceCounties.map((county) => (
            <div key={county} className="mt-12">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {county === "Napa County" || county === "Solano County" ? (
                  <Link href={`/service-areas/${county.toLowerCase().replace(" ", "-")}`} className="hover:underline">
                    {county}
                  </Link>
                ) : (
                  county
                )}
              </h3>
              <RevealGroup
                as="ul"
                className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {serviceAreas
                  .filter((area) => area.county === county)
                  .map((area) => (
                    <RevealItem as="li" key={area.slug}>
                      <ServiceAreaCard area={area} />
                    </RevealItem>
                  ))}
              </RevealGroup>
            </div>
          ))}
        </Container>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
