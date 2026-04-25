import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { coreValues } from "@/data/coreValues";

const pillWords = [
  "C – Craftsmanship",
  "O – Ownership",
  "R – Respect",
  "E – Efficiency",
];

export function CoreValuesSection() {
  return (
    <section className="bg-subtle py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our CORE values"
            title="Everything we do comes back to our CORE."
            description="These aren't just words — they guide how we show up, how we work, and how we take care of our customers every day."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <RevealGroup
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center"
          stagger={0.05}
        >
          {pillWords.map((word) => (
            <RevealItem
              as="span"
              key={word}
              className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
            >
              {word}
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2">
          {coreValues.map((v) => (
            <RevealItem as="li" key={v.letter}>
              <Card>
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
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
