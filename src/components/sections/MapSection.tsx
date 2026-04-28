"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const LeafletMap = dynamic(
  () => import("@/components/map/LeafletMap").then((m) => m.LeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-subtle">
        <span className="text-sm text-muted">Loading map…</span>
      </div>
    ),
  },
);

export function MapSection() {
  return (
    <section className="bg-subtle py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving Sonoma & Marin."
            description="Based in Petaluma and serving homeowners across the North Bay. Click any pin to open location details."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:mt-10 sm:rounded-3xl"
        >
          <div className="relative aspect-4/3 sm:aspect-video">
            <LeafletMap />
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-muted">
          Serving Petaluma, Santa Rosa, Rohnert Park, Sebastopol, Windsor, Healdsburg, Novato, San Rafael, Mill Valley, Fairfax, and surrounding areas.
        </p>
      </Container>
    </section>
  );
}
