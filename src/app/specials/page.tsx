import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { HCPBookingButton } from "@/components/ui/HCPBookingButton";
import { SpecialCard } from "@/components/specials/SpecialCard";
import { getRunningSpecials } from "@/data/specials";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

/** Re-check dates hourly so specials appear and expire without a new deploy. */
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const live = getRunningSpecials().filter((s) => !s.sample);
  return {
    ...buildMetadata({
      title: "HVAC & Water Heater Specials | Sonoma & Marin",
      description:
        "Current specials from Green Core Heating & Air on heating, cooling and water heater service in Sonoma and Marin. Free estimates on new systems and water heaters.",
      path: "/specials",
    }),
    // Keep the page out of Google until there's a real offer on it.
    robots: live.length ? undefined : { index: false, follow: true },
  };
}

const always = [
  { title: "Free estimates", text: "Free in-home estimates on new systems and water heater replacements, with written pricing." },
  { title: "Same-day water heaters", text: "Standard gas or electric tank replacement starts at $2,850, often same-day when our schedule allows." },
  { title: "Rebate help", text: "Rebates may be available for some systems. We check what you qualify for and handle the paperwork." },
  { title: "Answered 24/7", text: `Call ${siteConfig.phone} any time. Our phones are answered around the clock.` },
];

export default function SpecialsPage() {
  const running = getRunningSpecials();
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Specials" }]} />

      <section className="bg-brand-900 pt-12 pb-14 text-white sm:pt-16 sm:pb-20">
        <Container size="xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-200">Green Core specials</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">Current specials on heating, cooling and water heaters</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">Limited-time offers for homeowners in Sonoma and Marin. Every job still comes with clear options, upfront pricing and a clean install.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <HCPBookingButton ctaLabel="specials_book" className="inline-flex items-center rounded-full bg-brand-200 px-6 py-3 font-display text-sm font-bold text-brand-900 transition-colors hover:bg-white">
              Book online
            </HCPBookingButton>
            <a href={siteConfig.phoneHref} className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-white/10">
              Call {siteConfig.phone}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container size="xl">
          {running.length ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {running.map((s) => (
                <li key={s.slug}>
                  <SpecialCard special={s} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-start gap-3 rounded-3xl border border-border bg-subtle p-8">
              <h2 className="font-display text-2xl font-bold text-foreground">No limited-time specials right now</h2>
              <p className="max-w-2xl text-muted">Check back soon. In the meantime, estimates on new systems and water heaters are always free.</p>
              <Link href="/guides" className="font-display text-sm font-bold text-brand-700 hover:underline">Browse our free homeowner guides →</Link>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20">
        <Container size="xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Every day at Green Core</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">Always included</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {always.map((a) => (
              <li key={a.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm" style={{ borderTop: "5px solid #1f7c40" }}>
                <h3 className="font-display text-lg font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
