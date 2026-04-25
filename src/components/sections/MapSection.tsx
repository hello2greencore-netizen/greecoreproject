import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export function MapSection() {
  const query = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  );
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="bg-subtle py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving Sonoma & Marin."
            description="Based in Petaluma and serving homeowners across the North Bay."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:mt-10 sm:rounded-3xl"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/9]">
            <iframe
              title="Green Core service area map"
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
