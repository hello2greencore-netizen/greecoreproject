import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work — Heat Pump & HVAC Projects in Sonoma & Marin",
  description:
    "Photos and details from real Green Core Heating & Air jobs: heat pumps, Harvest Thermal, mini splits, water heaters, and ductwork across Sonoma and Marin.",
  path: "/our-work",
});

export default function OurWorkPage() {
  const townsWithProjects = serviceAreas.filter((a) => a.projects && a.projects.length > 0);

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Our Work" }]} />

      <Hero
        eyebrow="Our work"
        title="Real projects from real North Bay homes."
        description="Heat pumps, Harvest Thermal systems, mini splits, water heaters, and ductwork, straight from our job sites."
        image="/images/hero/services.jpg"
        imageAlt="Green Core technician working on a home heating system"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Project gallery"
              title="Browse our recent jobs."
              description="Filter by project type or town. Every project includes photos from the job and what we did."
            />
          </Reveal>
          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <iframe
              src={siteConfig.projectGalleryUrl}
              title="Green Core Heating & Air project gallery"
              loading="lazy"
              allow="fullscreen"
              className="block h-[1100px] w-full border-0 sm:h-[900px]"
            />
          </Reveal>

          {townsWithProjects.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Projects by town</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {townsWithProjects.map((a) => (
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
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
