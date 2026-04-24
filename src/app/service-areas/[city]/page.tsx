import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
    title: `${area.city} Heating & Air Conditioning Services`,
    description: `Trusted HVAC experts in ${area.city}, CA — heat pump installation, air conditioning, furnace service, mini splits, and ductwork from Green Core Heating & Air.`,
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
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            {area.intro}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {area.lifestyleLine}
          </p>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
              Landmarks &amp; neighborhoods we serve
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {area.landmarks.map((lm) => (
                <li
                  key={lm}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-foreground"
                >
                  {lm}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {area.sections.map((section, i) => (
        <section
          key={section.heading}
          className={i % 2 === 0 ? "bg-subtle py-16 sm:py-20 lg:py-24" : "py-16 sm:py-20 lg:py-24"}
        >
          <Container size="md">
            <SectionHeading
              eyebrow={`Serving ${area.city}`}
              title={section.heading}
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {section.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <SectionHeading
            eyebrow="Services"
            title={`Our HVAC services in ${area.city}`}
            description="We proudly offer:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card as="li" key={s.slug}>
                <h3 className="font-display text-lg font-bold">
                  {s.shortName ?? s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.summary}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline"
                >
                  Learn more →
                </Link>
              </Card>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted sm:text-base">
            If you&apos;re searching for <em>HVAC near me</em>, <em>AC repair {area.city}</em>, <em>heat pump installation</em>, or <em>furnace service</em>, Green Core Heating &amp; Air is your trusted local team.
          </p>
        </Container>
      </section>

      <CTASection
        title={`Schedule your HVAC service in ${area.city}.`}
        description="Local crews, quick response, honest pricing."
        primaryCta={{ label: `Schedule service in ${area.city}`, href: "/contact" }}
      />
    </>
  );
}
