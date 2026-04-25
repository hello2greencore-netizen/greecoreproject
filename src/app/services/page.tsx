import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/sections/FAQSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HVAC Services — Sonoma & Marin Counties",
  description:
    "Green Core installs and repairs heat pumps, AC systems, furnaces, mini splits, and ductwork across Sonoma & Marin. Design-first HVAC — done right.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our services"
        title="Comfort solutions designed for your home."
        description="From quick service calls to whole-home electrification, our team handles every job with the same craftsmanship."
        image="/images/hero/services.jpg"
        imageAlt="Technician installing a modern HVAC system"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="All the comfort services, under one trusted crew."
              description="Pick a service to learn more."
            />
          </Reveal>
          <RevealGroup
            as="ul"
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <RevealItem as="li" key={service.slug}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <FAQSection faqs={generalFaqs} />

      <CTASection />
    </>
  );
}
