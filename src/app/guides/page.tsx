import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { guides, guideGroups } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Homeowner HVAC Guides for Sonoma & Marin",
  description:
    "Free homeowner guides from Green Core: what a new system should cost, what size your home needs, how to choose, and how to keep it running.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Homeowner Guides" }]} />

      <Hero
        eyebrow="Homeowner Guides"
        title="Straight answers before you buy, and after."
        description="Free tools and guides for Sonoma and Marin homeowners: what a new system should cost, what size you need, which option fits, and how to keep it running."
        image="/images/hero/services.jpg"
        imageAlt="Green Core technician working on a home heating system"
        size="compact"
      />

      <section className="py-16 sm:py-20">
        <Container size="xl">
          <div className="flex flex-col gap-14">
            {guideGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-6">
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{group.title}</h2>
                  <p className="mt-2 text-muted">{group.description}</p>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {guides
                    .filter((g) => g.group === group.id)
                    .map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/guides/${g.slug}`}
                          className="group flex h-full flex-col gap-2 rounded-2xl border border-border bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{g.kind}</span>
                          <span className="font-display text-lg font-bold leading-snug text-foreground">{g.name}</span>
                          <span className="text-sm leading-relaxed text-muted">{g.summary}</span>
                          <span className="mt-auto pt-2 text-sm font-semibold text-brand-700 group-hover:underline">Open →</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
