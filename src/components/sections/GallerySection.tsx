import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";

export function GallerySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Our work"
          title="Recent jobs, installs & happy customers."
          description="A few snapshots from around Sonoma and Marin."
          align="center"
          className="mx-auto"
        />
      </Container>

      <div className="mt-10 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <ul className="flex gap-4 px-5 sm:gap-5 sm:px-6 lg:px-8">
          {galleryItems.map((item) => (
            <li
              key={item.src}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl bg-subtle"
              style={{ width: "min(78vw, 360px)", aspectRatio: "4 / 5" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 360px, 78vw"
                className="object-cover"
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-medium text-white">
                    {item.caption}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
