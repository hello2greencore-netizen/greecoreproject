import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title = "Ready for comfort that just works?",
  description = "Tell us a little about your home and we'll get back quickly with clear options — no hard sell.",
  primaryCta = siteConfig.cta.primary,
  secondaryCta = { label: `Call ${siteConfig.phone}`, href: siteConfig.phoneHref },
}: Props) {
  return (
    <section className="py-14 sm:py-20">
      <Container size="lg">
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-6 py-10 text-white shadow-lg sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="heading-display text-2xl sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50 sm:px-6 sm:py-3.5 sm:text-base"
              >
                <span className="sm:hidden">Get Estimate</span>
                <span className="hidden sm:inline">{primaryCta.label}</span>
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/20 sm:px-6 sm:py-3.5 sm:text-base"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
