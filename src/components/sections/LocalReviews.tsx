import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { testimonials } from "@/data/testimonials";
import { reviewTowns } from "@/data/reviewPlacements";

type Props = {
  ids: string[] | undefined;
  title: string;
  description?: string;
  className?: string;
};

/** Real Google reviews for a city or service page, each labeled with the customer's town. */
export function LocalReviews({ ids, title, description, className }: Props) {
  const items = (ids ?? [])
    .map((id) => testimonials.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .map((t) => ({
      ...t,
      location: reviewTowns[t.id] ? `${reviewTowns[t.id]} · Google review` : "Google review",
    }));
  if (!items.length) return null;
  return (
    <section className={className ?? "bg-brand-50 py-16 sm:py-20"}>
      <Container size="xl">
        <Reveal>
          <SectionHeading eyebrow="Google reviews" title={title} description={description} />
        </Reveal>
        <RevealGroup
          as="ul"
          className={`mt-10 grid gap-5 ${items.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}
        >
          {items.map((t) => (
            <RevealItem as="li" key={t.id}>
              <TestimonialCard t={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
