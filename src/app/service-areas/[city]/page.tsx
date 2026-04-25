import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { services } from "@/data/services";
import {
  serviceAreas,
  getServiceAreaBySlug,
} from "@/data/serviceAreas";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/service-areas/[city]">,
): Promise<Metadata> {
  const { city } = await props.params;
  const area = getServiceAreaBySlug(city);
  if (!area) return buildMetadata({ title: "Service Area", description: "" });
  return buildMetadata({
    title: `HVAC Contractor in ${area.city}, CA`,
    description: `Green Core Heating & Air provides heat pump, AC, furnace & mini split services in ${area.city}, CA. Local HVAC contractor — free estimates available.`,
    path: `/service-areas/${area.slug}`,
    image: area.heroImage,
  });
}

export default async function ServiceAreaPage(
  props: PageProps<"/service-areas/[city]">,
) {
  const { city } = await props.params;
  const area = getServiceAreaBySlug(city);
  if (!area) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: area.city },
        ]}
      />

      <Hero
        eyebrow={area.county}
        title={`${area.city} Heating & Air Conditioning Services`}
        description={`Trusted HVAC experts in ${area.city}, CA.`}
        image={area.heroImage}
        imageAlt={`${area.city}, California`}
        size="compact"
        primaryCta={{ label: `Schedule service in ${area.city}`, href: "/contact" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <Reveal>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              {area.intro}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {area.lifestyleLine}
            </p>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
                Landmarks &amp; neighborhoods we serve
              </h3>
            </Reveal>
            <RevealGroup
              as="ul"
              className="mt-4 flex flex-wrap gap-2"
              stagger={0.03}
            >
              {area.landmarks.map((lm) => (
                <RevealItem
                  as="li"
                  key={lm}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-foreground"
                >
                  {lm}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {area.sections.map((section, i) => (
        <section
          key={section.heading}
          className={i % 2 === 0 ? "bg-subtle py-16 sm:py-20 lg:py-24" : "py-16 sm:py-20 lg:py-24"}
        >
          <Container size="md">
            <Reveal>
              <SectionHeading
                eyebrow={`Serving ${area.city}`}
                title={section.heading}
              />
            </Reveal>
            <RevealGroup
              className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg"
              stagger={0.05}
            >
              {section.body.map((p, idx) => (
                <RevealItem key={idx}>
                  <p>{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ))}

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title={`HVAC services in ${area.city}`}
              description={`Green Core provides the following services throughout ${area.city} and surrounding ${area.county} areas:`}
            />
          </Reveal>
          <RevealGroup
            as="ul"
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <RevealItem as="li" key={s.slug}>
                <Card>
                  <h3 className="font-display text-lg font-bold">
                    {s.shortName ?? s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.summary}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    Learn more
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden>
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <p className="mt-10 text-sm text-muted sm:text-base">
              Searching for <em>HVAC near me in {area.city}</em>, <em>AC repair {area.city} CA</em>, or <em>heat pump installation {area.county}</em>? Green Core Heating &amp; Air is your trusted local team.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title={`Schedule HVAC service in ${area.city}.`}
        description="Local crews, fast response, honest pricing. Usually same-day callbacks."
        primaryCta={{ label: `Get a free estimate in ${area.city}`, href: "/contact" }}
      />
    </>
  );
}
