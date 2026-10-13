import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";
import type { ShowcaseProject } from "@/types";

type Props = {
  city: string;
  /** Written job summaries, shown as page text so Google and AI tools can read them. */
  projects?: ShowcaseProject[];
  /** CompanyCam gallery filter value, e.g. "Sonoma, CA". */
  showcaseCity?: string;
};

export function ProjectShowcase({ city, projects = [], showcaseCity }: Props) {
  if (projects.length === 0 && !showcaseCity) return null;
  const gallerySrc = showcaseCity
    ? `${siteConfig.projectGalleryUrl}?city_states=${encodeURIComponent(showcaseCity)}`
    : null;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title={`Recent projects in ${city}`}
            description={`Real Green Core jobs for homeowners in ${city}, with photos from the job site.`}
          />
        </Reveal>

        {projects.length > 0 && (
          <RevealGroup as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <RevealItem as="li" key={p.url}>
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{p.date}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline"
                  >
                    See the job photos
                  </a>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {gallerySrc && (
          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <iframe
              src={gallerySrc}
              title={`Green Core Heating & Air projects in ${city}`}
              loading="lazy"
              allow="fullscreen"
              className="block h-[560px] w-full border-0"
            />
          </Reveal>
        )}

        <p className="mt-6 text-sm text-muted">
          <Link href="/our-work" className="font-semibold text-brand-700 hover:underline">
            See all our work across Sonoma and Marin
          </Link>
        </p>
      </Container>
    </section>
  );
}
