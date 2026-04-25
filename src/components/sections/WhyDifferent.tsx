import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

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
    <section className="bg-subtle py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Why we're different"
            title="HVAC done the way it should be done."
            description="The details other contractors skip are the details that make your system quieter, more efficient, and longer-lasting."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <RevealGroup
          as="ul"
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((p, i) => (
            <RevealItem as="li" key={p.title}>
              <Card>
                <span
                  aria-hidden
                  className="font-display text-xs font-semibold tracking-[0.2em] text-brand-600"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
