import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const pains = [
  {
    title: "Equipment on borrowed time",
    body: "An aging furnace, AC or water heater that could quit on the coldest night — or the hottest week — of the year.",
  },
  {
    title: "Rebates that feel impossible",
    body: "BayREN, TECH, utility programs — real money is on the table, but the rules and paperwork are a maze.",
  },
  {
    title: "Box-swappers and no-shows",
    body: "Contractors who guess at sizing, push the wrong system and stop returning calls once the check clears.",
  },
];

/** The problems homeowners bring to us. Answered by the WhyDifferent section right below it. */
export function PainPoints() {
  return (
    <section className="border-t border-border py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Sound familiar?</p>
          <h2 className="heading-display mt-3 text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Upgrading your home&apos;s comfort shouldn&apos;t feel like a second job.
          </h2>
        </Reveal>
        <RevealGroup as="ul" className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-6">
          {pains.map((p) => (
            <RevealItem as="li" key={p.title}>
              <div className="h-full rounded-2xl border border-border bg-subtle p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
