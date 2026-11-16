import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { serviceAreas } from "@/data/serviceAreas";

const MY_MAPS_SRC =
  "https://trusty.app/embed/project-map/b015f689-d324-4e2a-aba7-59ea92b3e6c8";

const TOWNS = [
  "Petaluma", "Santa Rosa", "Rohnert Park", "Cotati", "Sebastopol", "Windsor", "Healdsburg", "Sonoma",
  "Novato", "San Rafael", "Mill Valley", "San Anselmo", "Fairfax", "Tiburon",
  "Napa", "American Canyon", "Fairfield", "Vacaville", "Benicia", "Vallejo",
];

function townHref(town: string) {
  const area = serviceAreas.find((a) => a.city === town);
  return area ? `/service-areas/${area.slug}` : null;
}

export function MapSection({
  background = "subtle",
  linkTowns = false,
}: {
  background?: "subtle" | "white";
  linkTowns?: boolean;
}) {
  return (
    <section className={background === "white" ? "py-14 sm:py-20 lg:py-24" : "bg-subtle py-14 sm:py-20 lg:py-24"}>
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving the North Bay."
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
              allow="fullscreen"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
        {linkTowns ? (
          <>
            <p className="mt-4 text-center text-xs text-muted">
              Serving{" "}
              {TOWNS.map((town) => {
                const href = townHref(town);
                return (
                  <span key={town}>
                    {href ? (
                      <Link href={href} className="underline-offset-2 hover:text-primary hover:underline">
                        {town}
                      </Link>
                    ) : (
                      town
                    )}
                    {", "}
                  </span>
                );
              })}
              and surrounding areas.
            </p>
            <p className="mt-2 text-center text-xs text-muted">
              See all towns by county:{" "}
              <Link href="/service-areas" className="underline-offset-2 hover:text-primary hover:underline">Sonoma County</Link>
              {" · "}
              <Link href="/service-areas" className="underline-offset-2 hover:text-primary hover:underline">Marin County</Link>
              {" · "}
              <Link href="/service-areas/napa-county" className="underline-offset-2 hover:text-primary hover:underline">Napa County</Link>
              {" · "}
              <Link href="/service-areas/solano-county" className="underline-offset-2 hover:text-primary hover:underline">Solano County</Link>
            </p>
          </>
        ) : (
          <p className="mt-4 text-center text-xs text-muted">
            Serving Petaluma, Santa Rosa, Rohnert Park, Cotati, Sebastopol, Windsor, Healdsburg, Sonoma, Novato, San Rafael, Mill Valley, San Anselmo, Fairfax, Tiburon, Napa, American Canyon, Fairfield, Vacaville, Benicia, Vallejo, and surrounding areas.
          </p>
        )}
      </Container>
    </section>
  );
}
