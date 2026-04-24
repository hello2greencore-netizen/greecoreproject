import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { coreValues } from "@/data/coreValues";

export function CoreValuesSection() {
  return (
    <section className="bg-subtle py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Our CORE values"
          title="Everything we do comes back to our CORE."
          description="These aren't just words — they guide how we show up, how we work, and how we take care of our customers every day."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center">
          <span className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">
            C – Craftsmanship
          </span>
          <span className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">
            O – Ownership
          </span>
          <span className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">
            R – Respect
          </span>
          <span className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">
            E – Efficiency
          </span>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {coreValues.map((v) => (
            <Card as="li" key={v.letter}>
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-brand-50 font-display text-2xl font-bold text-brand-700"
                >
                  {v.letter}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {v.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
