import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { HCPBookingButton } from "@/components/ui/HCPBookingButton";
import { getSpecials, getSpecialBySlug, isRunning, formatEnds, relatedGuide } from "@/data/specials";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;
/** Re-check dates hourly so an offer switches to "ended" on time without a new deploy. */
export const revalidate = 3600;

export function generateStaticParams() {
  return getSpecials().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/specials/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = getSpecialBySlug(slug);
  if (!s) return {};
  return {
    ...buildMetadata({ title: `${s.title} | Green Core Specials`, description: s.summary, path: `/specials/${s.slug}`, absolute: true }),
    // Ad landing pages come and go, so they stay out of Google's index.
    robots: { index: false, follow: true },
  };
}

const trust = [
  "Best of the North Bay 2026 (Bohemian)",
  "Family-owned in Petaluma",
  `Licensed: ${siteConfig.license}`,
  "Serving Sonoma and Marin",
];

export default async function SpecialPage(props: PageProps<"/specials/[slug]">) {
  const { slug } = await props.params;
  const s = getSpecialBySlug(slug);
  if (!s) notFound();
  const running = isRunning(s);
  const guide = relatedGuide[s.category];
  const callFirst = s.cta === "call";

  const bookBtn = (
    <HCPBookingButton ctaLabel={`special_${s.slug}`} className="inline-flex items-center rounded-full bg-brand-200 px-6 py-3.5 font-display text-base font-bold text-brand-900 shadow-sm transition-colors hover:bg-white">
      Book online
    </HCPBookingButton>
  );
  const callBtn = (
    <a href={siteConfig.phoneHref} className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 font-display text-base font-bold text-white transition-colors hover:bg-white/10">
      Call {siteConfig.phone}
    </a>
  );

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Specials", path: "/specials" }, { name: s.title }]} />

      {s.sample ? (
        <div className="bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-amber-950">
          Layout sample only. This page shows on preview links, never on the live site.
        </div>
      ) : null}

      <section className="bg-brand-900 pt-12 pb-14 text-white sm:pt-16 sm:pb-20">
        <Container size="lg">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <span className="mb-5 inline-flex rounded-full bg-brand-200 px-5 py-2 font-display text-2xl font-extrabold text-brand-900 lg:hidden">{s.offer}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-200">Green Core special</span>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{s.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">{s.summary}</p>
              {running ? (
                <>
                  <p className="mt-4 text-sm font-semibold text-brand-200">Offer ends {formatEnds(s.ends)}</p>
                  <div className="mt-7 flex flex-wrap gap-3">{callFirst ? <>{callBtn}{bookBtn}</> : <>{bookBtn}{callBtn}</>}</div>
                </>
              ) : (
                <div className="mt-6 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                  <p className="font-display text-lg font-bold">This offer ended {formatEnds(s.ends)}.</p>
                  <p className="mt-1 text-white/80">We&apos;d still love to help. Estimates on new systems and water heaters are always free.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/specials" className="inline-flex items-center rounded-full bg-brand-200 px-5 py-3 font-display text-sm font-bold text-brand-900 hover:bg-white">See current specials</Link>
                    {callBtn}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden aspect-square max-w-xs flex-col items-center justify-center rounded-full lg:flex bg-brand-200 p-8 text-center text-brand-900 shadow-xl ring-8 ring-white/10 justify-self-center lg:justify-self-end">
              <span className="font-display text-5xl font-extrabold leading-none sm:text-6xl">{s.offer}</span>
              <span className="mt-3 text-sm font-bold uppercase tracking-[0.14em]">{running ? "Limited time" : "Offer ended"}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">What&apos;s included</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <span aria-hidden="true" className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">✓</span>
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-border bg-subtle p-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-muted">Offer terms</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.terms} Offer valid through {formatEnds(s.ends)}.</p>
              </div>
            </div>
            <aside className="flex flex-col gap-5">
              <div className="rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-200">
                <h3 className="font-display text-lg font-bold text-foreground">Why homeowners pick Green Core</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground">
                  {trust.map((t) => (
                    <li key={t} className="flex items-start gap-2"><span aria-hidden="true" className="text-brand-600">●</span>{t}</li>
                  ))}
                </ul>
              </div>
              <Link href={guide.href} className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Free homeowner guide</span>
                <span className="mt-2 block font-display text-lg font-bold text-foreground">{guide.label}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Read the guide <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {running ? (
        <section className="pb-16 sm:pb-20">
          <Container size="lg">
            <div className="flex flex-col gap-4 rounded-3xl bg-brand-700 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to claim it?</h2>
                <p className="mt-2 text-white/85">Mention this special when you book. Our phones are answered 24/7.</p>
              </div>
              <div className="flex flex-wrap gap-3">{bookBtn}{callBtn}</div>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
