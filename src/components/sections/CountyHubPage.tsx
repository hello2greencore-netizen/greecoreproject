import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceAreaCard } from "@/components/sections/ServiceAreaCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { serviceAreas } from "@/data/serviceAreas";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import type { CountyHub } from "@/data/countyHubs";

export function CountyHubPage({ hub }: { hub: CountyHub }) {
  const towns = serviceAreas.filter((a) => a.county === hub.county);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: hub.county },
        ]}
      />

      <Hero
        eyebrow={hub.county}
        title={hub.heroTitle}
        description={hub.heroDescription}
        image="/images/hero/service-areas.jpg"
        imageAlt={`${hub.county}, California`}
        size="spacious"
        primaryCta={{ label: "Book Now", href: "#book" }}
        secondaryCta={{ label: "Get an Online Estimate", href: "/instant-estimate" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <RevealGroup className="space-y-5 text-base leading-relaxed text-foreground sm:text-lg" stagger={0.05}>
            {hub.intro.map((p, i) => (
              <RevealItem key={i}>
                <p>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading eyebrow="Towns we serve" title={`Find your town in ${hub.county}.`} />
          </Reveal>
          <RevealGroup as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {towns.map((area) => (
              <RevealItem as="li" key={area.slug}>
                <ServiceAreaCard area={area} />
              </RevealItem>
            ))}
          </RevealGroup>
          {hub.alsoServing && (
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">{hub.alsoServing}</p>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title={`HVAC and water heater services in ${hub.county}`}
            />
          </Reveal>
          {serviceCategories.map((cat) => (
            <div key={cat.id} className="mt-10">
              <h3 className="font-display text-xl font-bold text-foreground">{cat.label}</h3>
              <RevealGroup as="ul" className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getServicesByCategory(cat.id).map((s) => (
                  <RevealItem as="li" key={s.slug}>
                    <Card>
                      <h4 className="font-display text-lg font-bold">{s.shortName ?? s.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                      <Link
                        href={`/services/${s.slug}`}
                        className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline"
                      >
                        Learn more
                      </Link>
                    </Card>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="md">
          <Reveal>
            <SectionHeading eyebrow="Rebates & permits" title={`Rebates and permits in ${hub.county}`} />
          </Reveal>
          <RevealGroup className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg" stagger={0.05}>
            {hub.rebates.map((p, i) => (
              <RevealItem key={i}>
                <p>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <FAQSection eyebrow={`${hub.county} FAQ`} title={`Questions from ${hub.county} homeowners`} faqs={hub.faqs} />

      <CTASection
        title={`Schedule service in ${hub.county}.`}
        description="Upfront pricing, clean installs, and no trip charge."
        primaryCta={{ label: "Book Now", href: "#book" }}
      />
    </>
  );
}
