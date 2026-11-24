import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
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
  { title: "Best of the North Bay 2026", text: "From the North Bay Bohemian" },
  { title: "Family-owned", text: "Local team based in Petaluma" },
  { title: "0% financing", text: "For 21 months, on approved credit" },
];

export default function InstantPricingPage() {
  return (
    <>
      {/* Simple header: logo and phone only, no site menu. */}
      <header className="border-b border-border bg-white">
        <Container size="lg" className="flex items-center justify-between gap-4 py-3">
          <Logo />
          <a href={siteConfig.phoneHref} className="text-sm font-semibold text-brand-700 sm:text-base">
            Call {siteConfig.phone}
          </a>
        </Container>
      </header>

      <section className="border-b border-border bg-subtle">
        <Container size="lg" className="py-8 sm:py-10">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See real prices for your new heating and cooling system
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Answer a few quick questions and get Green Core prices for your home in about two minutes. Your final price is
            confirmed in writing after a free visit or photo review.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((t) => (
              <li key={t.title} className="rounded-2xl border border-border bg-white p-4">
                <p className="text-sm font-semibold text-foreground">{t.title}</p>
                <p className="mt-1 text-sm text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#F3F6F2]">
        <EstimatorFrame />
      </section>

      {/* Minimal footer: required links only. */}
      <footer className="border-t border-border bg-white">
        <Container size="lg" className="flex flex-wrap items-center justify-between gap-3 py-6 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Green Core Heating &amp; Air Inc.</p>
          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </Container>
      </footer>
    </>
  );
}
