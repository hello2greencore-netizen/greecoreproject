import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description:
    "Read reviews from Sonoma and Marin homeowners who've trusted Green Core Heating & Air with their heating, cooling, and electrification projects.",
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
          <SectionHeading
            eyebrow="What customers say"
            title="A few kind words from neighbors."
            align="center"
            className="mx-auto"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.id}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-subtle py-16 sm:py-20 lg:py-24">
        <Container size="md" className="text-center">
          <SectionHeading
            eyebrow="Trust & certifications"
            title="Licensed, insured, and certified."
            description="We hold the certifications, training, and insurance to back every install — and we're proud of our spotless track record."
            align="center"
            className="mx-auto"
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 text-sm font-semibold text-foreground sm:grid-cols-4">
            {[
              "CSLB Licensed",
              "Factory Certified",
              "Harvest Thermal Certified",
              "BBB A+ Rated",
            ].map((badge) => (
              <li
                key={badge}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
