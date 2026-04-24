import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size?: "default" | "compact";
  priority?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta = siteConfig.cta.primary,
  secondaryCta,
  size = "default",
  priority = true,
}: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-neutral-950 text-white",
        size === "default"
          ? "min-h-[72dvh] sm:min-h-[82vh] lg:min-h-[88vh]"
          : "min-h-[50dvh] sm:min-h-[56vh]",
      )}
    >
      {/* Photography */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />

      {/* Bottom-up dark gradient — photo is vivid at top, readable at bottom */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/5"
        aria-hidden
      />

      {/* Subtle left vignette for extra text legibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/40 via-neutral-950/10 to-transparent"
        aria-hidden
      />

      <Container
        size="xl"
        className={cn(
          "flex flex-col justify-end",
          size === "default"
            ? "pt-24 pb-14 sm:pt-36 sm:pb-20 lg:pt-52 lg:pb-28"
            : "pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-20",
        )}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "font-display font-bold leading-[1.08] tracking-tight text-white",
              size === "default"
                ? "text-4xl sm:text-5xl lg:text-[3.75rem]"
                : "text-3xl sm:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg sm:leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <span className="sm:hidden">Get Estimate</span>
              <span className="hidden sm:inline">{primaryCta.label}</span>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-6 sm:py-3.5 sm:text-base"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
