import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const DEFAULT_HERO_IMAGE = "/images/hero/herosectionimage.jpeg";

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

function resolveHeroImage(image: string) {
  if (!image) {
    return DEFAULT_HERO_IMAGE;
  }

  if (!image.startsWith("/")) {
    return image;
  }

  const imagePath = join(process.cwd(), "public", image.replace(/^\//, ""));

  return existsSync(imagePath) ? image : DEFAULT_HERO_IMAGE;
}

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
  const resolvedImage = resolveHeroImage(image);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-brand-900 text-white",
        size === "default" ? "min-h-[82vh] lg:min-h-[88vh]" : "min-h-[60vh]",
      )}
    >
      <Image
        src={resolvedImage}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/70 via-brand-900/55 to-brand-900/80"
        aria-hidden
      />
      <Container
        size="xl"
        className={cn(
          "flex flex-col justify-end",
          size === "default"
            ? "pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
            : "pt-24 pb-12 sm:pt-32 lg:pt-36",
        )}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
              {eyebrow}
            </p>
          )}
          <h1 className="heading-display mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} size="lg" variant="white">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
