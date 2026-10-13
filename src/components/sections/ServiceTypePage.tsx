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
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { serviceTypes, type ServiceType } from "@/data/serviceTypes";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export function serviceTypeMetadata(t: ServiceType): Metadata {
  return buildMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: `/${t.slug}`,
    image: t.heroImage,
  });
}

export function ServiceTypePage({ type: t }: { type: ServiceType }) {
  const others = serviceTypes.filter((o) => o.slug !== t.slug);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.name,
    serviceType: t.navLabel,
    description: t.intro[0],
    url: `${siteConfig.url}/${t.slug}`,
    provider: { "@type": "HVACBusiness", name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phone },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sonoma County" },
      { "@type": "AdministrativeArea", name: "Marin County" },
      ...serviceAreas.map((a) => ({ "@type": "City", name: a.city })),
    ],
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: t.navLabel }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero
        eyebrow={t.eyebrow}
        title={t.name}
        description={t.tagline}
        image={t.heroImage}
        imageAlt={t.name}
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <RevealGroup className="space-y-5 text-base leading-relaxed text-muted sm:text-lg" stagger={0.06}>
            {t.intro.map((p, i) => (
              <RevealItem key={i}>
                <p className={i === 0 ? "text-foreground" : undefined}>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading eyebrow="Every system we work on" title={t.itemsHeading} />
          </Reveal>
          {serviceCategories.map((cat) => (
            <div key={cat.id} className="mt-10">
              <h3 className="font-display text-xl font-bold text-foreground">{cat.label}</h3>
              <RevealGroup as="ul" className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getServicesByCategory(cat.id)
                  .filter((s) => t.items[s.slug])
                  .map((s) => (
                    <RevealItem as="li" key={s.slug}>
                      <Card>
                        <h4 className="font-display text-lg font-bold">{s.shortName ?? s.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{t.items[s.slug]}</p>
                        <Link
                          href={`/services/${s.slug}`}
                          className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline"
                        >
                          More about {(s.shortName ?? s.name).toLowerCase()}
                        </Link>
                      </Card>
                    </RevealItem>
                  ))}
              </RevealGroup>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="What to expect." />
          </Reveal>
          <RevealGroup as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <RevealItem as="li" key={step.title}>
                <Card>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700 ring-1 ring-brand-100">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-subtle py-14 sm:py-16">
        <Container size="xl">
          <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
            {t.navLabel} across Sonoma and Marin
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:border-brand-400 hover:text-brand-700"
                >
                  {a.city}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Also see:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                <Link href={`/${o.slug}`} className="font-semibold text-brand-700 hover:underline">
                  {o.navLabel}
                </Link>
                {i < others.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Container>
      </section>

      <FAQSection faqs={t.faqs} />
      <CTASection />
    </>
  );
}
