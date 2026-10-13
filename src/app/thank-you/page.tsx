import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

/**
 * Where Housecall Pro sends visitors after an online booking (set under the
 * online booking app's "Redirect page" setting). Exists so a page-based
 * trigger can fire the booking conversion, so it stays out of search results
 * and the sitemap.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Thank You",
    description: "Thank you for choosing Green Core Heating & Air.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="md" className="text-center">
        <RevealGroup mode="enter" stagger={0.08}>
          <RevealItem>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
              Your appointment has been confirmed!
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="heading-display mt-3 text-4xl sm:text-5xl">
              Thank you for choosing Green Core.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              Have questions before our visit? We&apos;re just a phone call
              away.
            </p>
          </RevealItem>
          <RevealItem className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Link
              href={siteConfig.phoneHref}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              Call {siteConfig.phone}
            </Link>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
