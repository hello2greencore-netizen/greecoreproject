import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalReviews } from "@/components/sections/LocalReviews";
import { AnswerBox, ContentSections, TownLinks } from "@/components/sections/ServiceDepth";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";
import type { RepairPage } from "@/data/repairPages";
import { buildMetadata } from "@/lib/seo";

export function repairPageMetadata(p: RepairPage): Metadata {
  return buildMetadata({
    title: p.seoTitle,
    description: p.seoDescription,
    path: `/services/${p.slug}`,
    image: p.heroImage,
  });
}

export function RepairServicePage({ page: p }: { page: RepairPage }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.name,
    serviceType: p.navLabel,
    description: p.answer,
    url: `${siteConfig.url}/services/${p.slug}`,
    provider: { "@type": "HVACBusiness", "@id": `${siteConfig.url}/#business`, name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phoneE164 },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sonoma County" },
      { "@type": "AdministrativeArea", name: "Marin County" },
      { "@type": "AdministrativeArea", name: "Napa County" },
      { "@type": "AdministrativeArea", name: "Solano County" },
      ...serviceAreas.map((a) => ({ "@type": "City", name: a.city })),
    ],
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: p.navLabel }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero
        eyebrow={p.eyebrow}
        title={p.name}
        description={p.tagline}
        image={p.heroImage}
        imageAlt={p.name}
        size="compact"
      />

      <AnswerBox answer={p.answer} />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <RevealGroup className="space-y-5 text-base leading-relaxed text-muted sm:text-lg" stagger={0.06}>
            {p.intro.map((t, i) => (
              <RevealItem key={i}>
                <p>{t}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading eyebrow="What we fix" title={p.problemsHeading} />
          </Reveal>
          <RevealGroup as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.problems.map((item) => (
              <RevealItem as="li" key={item.title}>
                <Card>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ContentSections sections={p.sections} className="py-16 sm:py-20 lg:py-24" />

      <LocalReviews ids={p.reviewIds} title={p.reviewsTitle} />

      <TownLinks heading={`${p.navLabel} across Sonoma, Marin, Napa, and Solano`} className="bg-subtle py-14 sm:py-16" />

      <section className="py-12 sm:py-14">
        <Container size="xl">
          <p className="text-sm text-muted">
            Related:{" "}
            {p.related.map(([label, href], i) => (
              <span key={href}>
                <Link href={href} className="font-semibold text-brand-700 hover:underline">
                  {label}
                </Link>
                {i < p.related.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Container>
      </section>

      <FAQSection faqs={p.faqs} title={`${p.navLabel} questions, answered`} />
      <CTASection />
    </>
  );
}
