import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Reviews — Sonoma & Marin HVAC",
  description:
    "5-star reviews from homeowners in Petaluma, Santa Rosa, Novato, San Rafael & across Sonoma and Marin who trust Green Core Heating & Air.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="Trust, earned one home at a time."
        description="Real feedback from real customers across the North Bay."
        image="/images/hero/testimonials.jpg"
        imageAlt="Happy homeowners outside their Sonoma home"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="What customers say"
              title="A few kind words from neighbors."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <RevealGroup
            as="ul"
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <RevealItem as="li" key={t.id}>
                <TestimonialCard t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="md" className="text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Trust & certifications"
              title="Licensed, insured, and certified."
              description="We hold the certifications, training, and insurance to back every install — and we're proud of our spotless track record."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <RevealGroup
            as="ul"
            className="mt-10 grid grid-cols-2 gap-4 text-sm font-semibold text-foreground sm:grid-cols-4"
            stagger={0.05}
          >
            {[
              "CSLB Licensed",
              "Factory Certified",
              "Harvest Thermal Certified",
              "BBB A+ Rated",
            ].map((badge) => (
              <RevealItem
                as="li"
                key={badge}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                {badge}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
