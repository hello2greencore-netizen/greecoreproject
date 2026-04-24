import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

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
    title: service.name,
    description: service.summary,
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
          <SectionHeading
            eyebrow="Overview"
            title="What to expect."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {service.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-subtle py-16 sm:py-20 lg:py-24">
          <Container size="xl">
            <SectionHeading
              eyebrow="Benefits"
              title="Why homeowners choose this."
              align="center"
              className="mx-auto"
            />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((b) => (
                <Card as="li" key={b.title}>
                  <h3 className="font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {b.description}
                  </p>
                </Card>
              ))}
            </ul>
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
