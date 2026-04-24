import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function MapSection() {
  const query = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  );
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="bg-subtle py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Service area"
          title="Proudly serving Sonoma & Marin."
          description="Based in Petaluma and serving homeowners across the North Bay."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <div className="relative aspect-[4/3] sm:aspect-[16/9]">
            <iframe
              title="Green Core service area map"
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
