import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About Green Core"
              title="A better HVAC experience — start to finish."
              description="We were founded to change the way HVAC feels for homeowners. Clear communication, thoughtful design, and high-quality workmanship on every project."
            />
            <ul className="mt-8 space-y-4 text-base text-muted">
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-5 w-5 flex-shrink-0 rounded-full bg-brand-500"
                />
                Energy-efficient heating, cooling &amp; water heating
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-5 w-5 flex-shrink-0 rounded-full bg-brand-500"
                />
                Design-first approach — right-sized for your home
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-5 w-5 flex-shrink-0 rounded-full bg-brand-500"
                />
                Vetted, trained technicians who respect your home
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="secondary" size="lg">
                More about us
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-subtle sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero/about.jpg"
                alt="Green Core technician installing an HVAC system"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
