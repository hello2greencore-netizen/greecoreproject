import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { HeroContent } from "@/components/sections/HeroContent";
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
  size?: "default" | "spacious" | "compact";
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
        size === "default" && "min-h-[72dvh] sm:min-h-[82vh] lg:min-h-[88vh]",
        size === "spacious" && "min-h-[58dvh] sm:min-h-[66vh] lg:min-h-[72vh]",
        size === "compact" && "min-h-[50dvh] sm:min-h-[56vh]",
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
          size === "default" && "pt-24 pb-14 sm:pt-36 sm:pb-20 lg:pt-52 lg:pb-28",
          size === "spacious" && "pt-24 pb-14 sm:pt-32 sm:pb-18 lg:pt-44 lg:pb-24",
          size === "compact" && "pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-20",
        )}
      >
        <HeroContent
          eyebrow={eyebrow}
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          size={size}
        />
      </Container>
    </section>
  );
}
