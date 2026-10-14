import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

// The first three answer the three problems in the PainPoints section above, in the same order.
const points = [
  {
    title: "Upgrade before it fails",
    body: "We'll give you an honest read on how much life your equipment has left and plan the upgrade before it quits. Same-day water heater replacement when our schedule allows.",
  },
  {
    title: "Rebates handled for you",
    body: "We know the BayREN, TECH, and utility programs and handle the paperwork so you don't have to.",
  },
  {
    title: "Design-first, not box-swapping",
    body: "Every project starts with a load calculation, duct assessment, and real design. And we still pick up the phone long after the install.",
  },
  {
    title: "Electrification experts",
    body: "Heat pumps, Harvest Thermal, and whole-home electric retrofits — it's what we do.",
  },
  {
    title: "Clean, respectful installs",
    body: "Shoe covers, drop cloths, and daily cleanup. Your home deserves it.",
  },
  {
    title: "Straightforward pricing",
    body: "No surprises. Clear options, clear pricing, clear timelines.",
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-brand-900 py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Why we're different"
            title="Here's how Green Core does it differently."
            description="The details other contractors skip are the details that make your system quieter, more efficient, and longer-lasting."
            align="center"
            className="mx-auto"
            tone="dark"
          />
        </Reveal>
        <RevealGroup
          as="ul"
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((p, i) => (
            <RevealItem as="li" key={p.title} className="h-full">
              <Card className="h-full border-transparent">
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
