import Link from "next/link";
import type { ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { guides, type Guide } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Homeowner HVAC Guides for Sonoma & Marin",
  description:
    "Free homeowner guides from Green Core: what a new system should cost, what size your home needs, how to choose, and how to keep it running.",
  path: "/guides",
});

const get = (slug: string) => guides.find((g) => g.slug === slug) as Guide;

/* Small line icons, drawn inline so the page needs no icon library. */
function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    tag: <><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
    ruler: <><path d="m3 17 14-14 4 4L7 21l-4-4Z" /><path d="m7 13 2 2M10 10l2 2M13 7l2 2" /></>,
    split: <><path d="M12 3v6M12 9l-6 6v6M12 9l6 6v6" /></>,
    flame: <path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5Z" />,
    snow: <><path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2" /></>,
    cycle: <><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16" /><path d="M20 20v-4h-4" /></>,
    drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const Arrow = () => <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>;

/* Approved public price ranges (as of October 2026), shown as a tiny preview of the cost guide. */
const pricePreview = [
  { label: "Tank water heater", range: "$2,850–$4,800", lo: 2850, hi: 4800 },
  { label: "Furnace (80%)", range: "$5,400–$14,500", lo: 5400, hi: 14500 },
  { label: "Furnace + AC", range: "$11,000–$27,300", lo: 11000, hi: 27300 },
];

const choose = [
  {
    slug: "furnace-heat-pump-or-ductless",
    options: [
      { name: "Furnace", fg: "#1f7c40", bg: "#e8f6ec" },
      { name: "Heat pump", fg: "#1d6a85", bg: "#e6f2f6" },
      { name: "Ductless", fg: "#a24f1a", bg: "#f8ece4" },
    ],
  },
  {
    slug: "tank-tankless-or-heat-pump-water-heater",
    options: [
      { name: "Tank", fg: "#1f7c40", bg: "#e8f6ec" },
      { name: "Tankless", fg: "#1d6a85", bg: "#e6f2f6" },
      { name: "Heat pump", fg: "#a24f1a", bg: "#f8ece4" },
    ],
  },
];

const checks = [
  { slug: "furnace-maintenance-checklist", icon: "flame", when: "Every fall · Sep–Oct", fg: "#a24f1a", bg: "#f8ece4" },
  { slug: "ac-maintenance-checklist", icon: "snow", when: "Every spring · Apr–May", fg: "#1d6a85", bg: "#e6f2f6" },
  { slug: "heat-pump-maintenance-checklist", icon: "cycle", when: "Spring and fall", fg: "#1f7c40", bg: "#e8f6ec" },
  { slug: "water-heater-maintenance-checklist", icon: "drop", when: "Monthly look, yearly service", fg: "#0f6b6b", bg: "#e3f4f3" },
];

export default function GuidesIndexPage() {
  const cost = get("hvac-cost");
  const size = get("hvac-size-calculator");
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Homeowner Guides" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${siteConfig.url}/guides#collection`,
            url: `${siteConfig.url}/guides`,
            name: "Homeowner HVAC Guides for Sonoma & Marin",
            description:
              "Free homeowner guides from Green Core: what a new system should cost, what size your home needs, how to choose, and how to keep it running.",
            inLanguage: "en-US",
            publisher: { "@id": `${siteConfig.url}/#business` },
            about: { "@id": `${siteConfig.url}/#business` },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: guides.length,
              itemListElement: guides.map((g, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${siteConfig.url}/guides/${g.slug}`,
                name: g.name,
              })),
            },
          }),
        }}
      />

      <Hero
        eyebrow="Homeowner Guides"
        title="Straight answers before you buy, and after."
        description="Free tools and guides for Sonoma and Marin homeowners: what a new system should cost, what size you need, which option fits, and how to keep it running."
        image="/images/hero/services.jpg"
        imageAlt="Green Core technician working on a home heating system"
        size="compact"
      />

      {/* Start here: the two tools */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container size="xl">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-200">Plan and price a new system</span>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Start with two free tools</h2>
            <p className="max-w-2xl text-white/80">See what a new system typically costs and what size your home needs. No email, no sign-up.</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-white/85">
              <li className="rounded-full border border-white/20 px-3 py-1">{guides.length} free guides</li>
              <li className="rounded-full border border-white/20 px-3 py-1">Real prices from our jobs</li>
              <li className="rounded-full border border-white/20 px-3 py-1">Built for Sonoma &amp; Marin homes</li>
            </ul>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link href={`/guides/${cost.slug}`} className="group flex flex-col gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-200 text-brand-900"><Icon name="tag" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">{cost.kind}</span>
              </div>
              <h3 className="font-display text-2xl font-bold">{cost.name}</h3>
              <p className="text-white/80">Typical installed prices for furnaces, AC, heat pumps, mini splits, ductwork and water heaters. Slide to your size to compare.</p>
              <div className="flex flex-col gap-3 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10">
                {pricePreview.map((p) => (
                  <div key={p.label} className="flex flex-col gap-1.5">
                    <div className="flex justify-between gap-3 text-sm"><span className="text-white/80">{p.label}</span><span className="font-semibold tabular-nums">{p.range}</span></div>
                    <div className="relative h-2 rounded-full bg-white/10">
                      <span className="absolute inset-y-0 rounded-full bg-brand-300" style={{ left: `${(p.lo / 30000) * 100}%`, width: `${((p.hi - p.lo) / 30000) * 100}%` }} />
                    </div>
                  </div>
                ))}
                <span className="text-xs text-white/60">Typical installed prices before rebates, as of October 2026.</span>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-brand-200 px-5 py-2.5 font-display text-sm font-bold text-brand-900 transition-colors group-hover:bg-white">See all prices <Arrow /></span>
            </Link>

            <Link href={`/guides/${size.slug}`} className="group flex flex-col gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-200 text-brand-900"><Icon name="ruler" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">{size.kind}</span>
              </div>
              <h3 className="font-display text-2xl font-bold">{size.name}</h3>
              <p className="text-white/80">Find the AC, heat pump or furnace size your home needs, check a quote you already have, and see where your house loses heat.</p>
              <ol className="grid gap-2 sm:grid-cols-3">
                {["Answer a few questions", "See your size", "Check your quote"].map((s, i) => (
                  <li key={s} className="flex items-center gap-2.5 rounded-2xl bg-white/[0.05] p-3 text-sm ring-1 ring-white/10">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-300 font-display text-sm font-bold text-brand-900">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-brand-200 px-5 py-2.5 font-display text-sm font-bold text-brand-900 transition-colors group-hover:bg-white">Find my size <Arrow /></span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Choose the right system */}
      <section className="bg-subtle py-16 sm:py-20">
        <Container size="xl">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Choose the right system</span>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">Not sure which one fits your home?</h2>
            <p className="text-muted">Side-by-side comparisons, with a simple &ldquo;if this sounds like you&rdquo; list to point you the right way.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {choose.map((c) => {
              const g = get(c.slug);
              return (
                <Link key={c.slug} href={`/guides/${g.slug}`} className="group flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                  <div className="flex h-2 overflow-hidden rounded-full">
                    {c.options.map((o) => <span key={o.name} className="flex-1" style={{ background: o.fg }} />)}
                  </div>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700"><Icon name="split" className="h-4 w-4" />{g.kind}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">{g.name}</h3>
                  <p className="text-muted">{g.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {c.options.map((o) => (
                      <li key={o.name} className="rounded-full px-3 py-1 font-display text-sm font-bold" style={{ background: o.bg, color: o.fg }}>{o.name}</li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display text-sm font-bold text-brand-700">Compare the options <Arrow /></span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Keep it running well */}
      <section className="py-16 sm:py-20">
        <Container size="xl">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Keep it running well</span>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">Quick checks for every season</h2>
            <p className="text-muted">What to do and when, plus what a professional tune-up covers.</p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((c) => {
              const g = get(c.slug);
              return (
                <li key={c.slug}>
                  <Link href={`/guides/${g.slug}`} className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ borderTop: `5px solid ${c.fg}` }}>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: c.bg, color: c.fg }}><Icon name={c.icon} /></span>
                    <span className="self-start rounded-full px-3 py-1 text-xs font-bold" style={{ background: c.bg, color: c.fg }}>{c.when}</span>
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground">{g.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{g.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-1 font-display text-sm font-bold text-brand-700">Open the checklist <Arrow /></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white"><Icon name="calendar" /></span>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Rather not keep track?</h3>
                <p className="mt-1 text-muted">Green Core maintenance plans put your tune-ups on our calendar, so they happen before the season, not after something breaks.</p>
              </div>
            </div>
            <Link href="/guides/furnace-maintenance-checklist#pl-h" className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-brand-700 px-5 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-brand-800 sm:self-center">
              See the plans <Arrow />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
