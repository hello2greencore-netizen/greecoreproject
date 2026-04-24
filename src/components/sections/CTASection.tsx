import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
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
    <section className="px-5 py-16 sm:py-20">
      <Container size="lg">
        <div className="overflow-hidden rounded-3xl bg-brand-700 px-6 py-12 text-white shadow-lg sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="heading-display text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" variant="white">
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
