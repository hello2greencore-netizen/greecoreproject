import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/sections/FAQSection";
import { services } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HVAC Services — Heat Pumps, AC, Furnaces & More",
  description:
    "Explore Green Core's full HVAC services: heat pump installation, AC, furnaces, mini splits, duct design, and Harvest Thermal systems across Sonoma and Marin.",
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
          <SectionHeading
            eyebrow="What we do"
            title="All the comfort services, under one trusted crew."
            description="Pick a service to learn more."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FAQSection faqs={generalFaqs} />

      <CTASection />
    </>
  );
}
