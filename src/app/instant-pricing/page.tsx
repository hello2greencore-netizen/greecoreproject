import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { reviewTowns } from "@/data/reviewPlacements";
import EstimatorFrame from "../instant-estimate/EstimatorFrame";

// Ads landing page for paid social (Meta) campaigns. Same estimator as /instant-estimate, but with no
// site menu, and hidden from search engines so it doesn't compete with the organic page.
// Ad links carry utm_* tags (and Meta adds fbclid); the estimator reads them so leads are credited to the campaign.
export const metadata: Metadata = {
  ...buildMetadata({
    title: "See Real Prices for Your New Heating & Cooling System",
    description:
      "Answer a few quick questions and see real Green Core prices for your home in about two minutes. Furnaces, AC, heat pumps, ductless and heat pump water heaters.",
    path: "/instant-pricing",
  }),
  robots: { index: false, follow: false },
};

const trustPoints = [
  { title: "Best of the North Bay 2026", text: "From the North Bay Bohemian", icon: "trophy" },
  { title: "Family-owned", text: "Local team based in Petaluma", icon: "home" },
  { title: "0% financing", text: "For 21 months, on approved credit", icon: "percent" },
] as const;

const steps = [
  { title: "Pick your systems", text: "Furnace, AC, heat pump, ductless or a heat pump water heater. Choose everything you want priced." },
  { title: "Tell us about your home", text: "A few quick questions about your home and the equipment you have now." },
  { title: "See your prices", text: "Compare your options side by side. We confirm the final price in writing after a free visit or photo review." },
];

// Real Google reviews (quoted exactly from src/data/testimonials.ts).
const REVIEW_IDS = ["n20", "g16", "g11"];
const reviews = REVIEW_IDS.map((id) => testimonials.find((t) => t.id === id)).filter(
  (t): t is NonNullable<typeof t> => Boolean(t),
);

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...common}>
      {name === "trophy" && (
        <>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
          <path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
        </>
      )}
      {name === "home" && (
        <>
          <path d="M3 11 12 4l9 7" />
          <path d="M5 10v10h14V10M10 20v-5h4v5" />
        </>
      )}
      {name === "percent" && (
        <>
          <path d="M19 5 5 19" />
          <circle cx="7" cy="7" r="2.5" />
          <circle cx="17" cy="17" r="2.5" />
        </>
      )}
      {name === "phone" && (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      )}
      {name === "arrow" && <path d="M12 5v14M6 13l6 6 6-6" />}
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden className="h-5 w-5 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function InstantPricingPage() {
  return (
    <>
      {/* Simple header: logo and phone only, no site menu. */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <Container size="xl" className="flex items-center justify-between gap-4 py-3">
          <Logo />
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 sm:text-base"
          >
            <Icon name="phone" className="h-4 w-4" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/images/hero/home.jpg)" }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-800/90 to-brand-600/80" />
        <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />

        <Container size="xl" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Instant online pricing for North Bay homes
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              See <span className="text-amber-300">real prices</span> for your new heating and cooling system
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Answer a few quick questions and get Green Core prices for your home in about two minutes. Your final
              price is confirmed in writing after a free visit or photo review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-lg font-extrabold text-brand-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Start my free estimate
                <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-bold text-white ring-2 ring-white/40 transition hover:bg-white/10"
              >
                <Icon name="phone" className="h-5 w-5" />
                Or call {siteConfig.phone}
              </a>
            </div>
          </div>

          <ul className="mt-10 grid gap-3 sm:mt-12 md:grid-cols-3 md:gap-4">
            {trustPoints.map((t) => (
              <li key={t.title} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-amber-400 text-brand-900">
                  <Icon name={t.icon} />
                </span>
                <span>
                  <span className="block font-bold text-white">{t.title}</span>
                  <span className="block text-sm text-white/75">{t.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <Container size="xl" className="py-12 sm:py-14">
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Your price in <span className="text-brand-600">3 easy steps</span>
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-extrabold text-white shadow-md">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Estimator */}
      <section id="estimator" className="scroll-mt-16 bg-gradient-to-b from-brand-50 via-[#F3F6F2] to-[#F3F6F2] py-10 sm:py-14">
        <Container size="xl">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#F3F6F2] shadow-xl shadow-brand-900/10 ring-4 ring-brand-500/20">
            <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-4 text-center text-white">
              <p className="font-display text-lg font-bold sm:text-xl">Build your estimate</p>
              <p className="text-sm text-white/85">Takes about two minutes. Free, with no visit needed to see prices.</p>
            </div>
            <EstimatorFrame />
          </div>
        </Container>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="bg-white">
          <Container size="xl" className="py-12 sm:py-16">
            <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              North Bay homeowners <span className="text-brand-600">love their new systems</span>
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
              {reviews.map((r) => (
                <li key={r.id} className="flex flex-col rounded-3xl bg-subtle p-6 ring-1 ring-border">
                  <Stars />
                  <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {r.name}
                    <span className="font-normal text-muted">
                      {reviewTowns[r.id] ? ` · ${reviewTowns[r.id]}` : ""} · Google review
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Closing call to action */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div aria-hidden className="absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <Container size="xl" className="flex flex-col items-center gap-6 py-12 text-center sm:py-14">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Rather talk to a person?</h2>
          <p className="max-w-xl text-lg text-white/85">Our phones are answered 24/7. Call and we&apos;ll walk you through your options.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-lg font-extrabold text-brand-900 shadow-lg transition hover:bg-amber-300"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <a
              href="#estimator"
              className="inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-bold text-white ring-2 ring-white/40 transition hover:bg-white/10"
            >
              Back to my estimate
            </a>
          </div>
        </Container>
      </section>

      {/* Minimal footer: required links only. */}
      <footer className="bg-brand-900 text-white/70">
        <Container size="xl" className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-sm">
          <p>&copy; {new Date().getFullYear()} Green Core Heating &amp; Air Inc. {siteConfig.license}.</p>
          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </Container>
      </footer>
    </>
  );
}
