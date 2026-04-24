import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";

function Stars({ count }: { count: number }) {
  return (
    <div aria-label={`${count} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={i < count ? "h-4 w-4 text-amber-500" : "h-4 w-4 text-border"}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.25 2.77 1-5.86L1.5 7.66l5.9-.86L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card as="article">
      <Stars count={t.rating} />
      <blockquote className="mt-4 text-base leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <footer className="mt-5 text-sm">
        <p className="font-semibold text-foreground">{t.name}</p>
        <p className="text-muted">
          {t.location}
          {t.service ? ` · ${t.service}` : ""}
        </p>
      </footer>
    </Card>
  );
}

type Props = {
  limit?: number;
};

export function TestimonialsSection({ limit = 3 }: Props) {
  const items = testimonials.slice(0, limit);
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Customer reviews"
          title="Trusted by neighbors across the North Bay."
          align="center"
          className="mx-auto"
        />
        <ul className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <li key={t.id}>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
