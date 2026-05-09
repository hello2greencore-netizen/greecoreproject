import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const bullets = [
  "Energy-efficient heating, cooling & water heating",
  "Design-first approach — sized right for your home",
  "Vetted and trained technicians who respect your home",
];

export function AboutPreview() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About Green Core"
                title="A better HVAC experience — start to finish."
                description="We were founded to change the way HVAC feels for homeowners. Clear communication, thoughtful design, and high-quality workmanship on every project."
              />
            </Reveal>
            <RevealGroup
              as="ul"
              className="mt-7 space-y-3.5 text-base text-foreground sm:mt-8 sm:space-y-4"
              stagger={0.06}
            >
              {bullets.map((b) => (
                <RevealItem as="li" key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal className="mt-7 sm:mt-8" delay={0.1}>
              <Button href="/about" variant="secondary" size="lg">
                More about us
              </Button>
            </Reveal>
          </div>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-subtle sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/about/zach-tony.png"
              alt="Zach and Tony, owners of Green Core Heating & Air"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
