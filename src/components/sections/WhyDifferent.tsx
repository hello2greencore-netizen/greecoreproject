import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const points = [
  {
    title: "Design-first approach",
    body: "We don't swap boxes. Every project starts with a proper load calculation, duct assessment, and design.",
  },
  {
    title: "Electrification experts",
    body: "Heat pumps, Harvest Thermal, and whole-home electric retrofits — it's what we do.",
  },
  {
    title: "Rebates handled for you",
    body: "We know the BayREN, TECH, and utility programs and handle the paperwork so you don't have to.",
  },
  {
    title: "Clean, respectful installs",
    body: "Shoe covers, drop cloths, tidy linesets, and daily cleanup. Your home deserves it.",
  },
  {
    title: "Straightforward pricing",
    body: "No surprise add-ons. Clear options, clear pricing, clear timelines.",
  },
  {
    title: "Long-term relationships",
    body: "Most of our business comes from referrals. We're in this for the long haul.",
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-subtle py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <SectionHeading
          eyebrow="Why we're different"
          title="HVAC done the way it should be done."
          description="The details other contractors skip are the details that make your system quieter, more efficient, and longer-lasting."
          align="center"
          className="mx-auto"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <Card as="li" key={p.title}>
              <h3 className="font-display text-lg font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
