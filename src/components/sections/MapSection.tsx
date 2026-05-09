import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const MY_MAPS_SRC =
  "https://www.google.com/maps/d/embed?mid=1yFA_MdCNcWA--VoFezweyWheamCFauI&ehbc=2E312F";

export function MapSection() {
  return (
    <section className="bg-subtle py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving Sonoma & Marin."
            description="Based in Petaluma and serving homeowners across the North Bay. Click any pin on the map to see details."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:mt-10 sm:rounded-3xl"
        >
          <div className="relative aspect-4/3 sm:aspect-video">
            <iframe
              src={MY_MAPS_SRC}
              title="Green Core Heating & Air service area map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-muted">
          Serving Petaluma, Santa Rosa, Rohnert Park, Cotati, Sebastopol, Windsor, Healdsburg, Novato, San Rafael, Mill Valley, Fairfax, and surrounding areas.
        </p>
      </Container>
    </section>
  );
}
