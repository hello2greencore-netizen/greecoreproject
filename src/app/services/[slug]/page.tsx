import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

/** Concise, keyword-focused meta titles per service (≤36 chars so template keeps total ≤54). */
const seoTitles: Record<string, string> = {
  "heat-pumps": "Heat Pump Installation & Service",
  "air-conditioning": "AC Installation & Repair",
  furnaces: "Furnace Installation & Repair",
  "mini-splits": "Mini Split Installation",
  "duct-work": "Ductwork Design & Installation",
  "harvest-thermal": "Harvest Thermal Water Heating",
};

/** Location-rich meta descriptions per service (≤155 chars). */
const seoDescriptions: Record<string, string> = {
  "heat-pumps":
    "Expert heat pump installation & repair in Sonoma & Marin counties. Energy-efficient, all-electric heating and cooling — properly sized for your home.",
  "air-conditioning":
    "Professional AC installation, repair & replacement in Sonoma & Marin. Properly sized systems for consistent cooling and lower energy bills.",
  furnaces:
    "Expert furnace installation, repair & replacement in Sonoma & Marin. Dependable heating, proper sizing, and honest recommendations.",
  "mini-splits":
    "Ductless mini split installation & repair in Sonoma & Marin. Flexible zoned comfort for additions, garages, and older homes — no ductwork needed.",
  "duct-work":
    "Ductwork installation, repair & replacement in Sonoma & Marin. Improve airflow, reduce energy bills, and fix uneven temperatures in your home.",
  "harvest-thermal":
    "Harvest Thermal installation in Sonoma & Marin. Smart heat pump water heating with energy management — lower operating costs and better efficiency.",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: "Service", description: "" });
  return buildMetadata({
    title: seoTitles[slug] ?? service.shortName ?? service.name,
    description: seoDescriptions[slug] ?? service.summary,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortName ?? service.name },
        ]}
      />

      <Hero
        eyebrow={service.shortName ?? "Service"}
        title={service.name}
        description={service.tagline}
        image={service.heroImage}
        imageAlt={service.name}
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="What to expect." />
          </Reveal>
          <RevealGroup
            className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg"
            stagger={0.06}
          >
            {service.overview.map((p, i) => (
              <RevealItem key={i}>
                <p>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-subtle py-16 sm:py-20 lg:py-24">
          <Container size="xl">
            <Reveal>
              <SectionHeading
                eyebrow="Benefits"
                title="Why homeowners choose this."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <RevealGroup
              as="ul"
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {service.benefits.map((b) => (
                <RevealItem as="li" key={b.title}>
                  <Card>
                    <h3 className="font-display text-lg font-bold">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {b.description}
                    </p>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <FAQSection faqs={service.faqs} />

      <CTASection
        title={`Ready to talk ${service.shortName?.toLowerCase() ?? "comfort"}?`}
        description="Share a few details about your home and we'll reach out with clear, honest options."
      />
    </>
  );
}
