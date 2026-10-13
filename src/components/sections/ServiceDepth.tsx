import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { serviceAreas } from "@/data/serviceAreas";
import type { ComparisonTable, ContentSection } from "@/types";

/** Answer-first summary box: a 40–60 word direct answer that search engines and AI tools can quote. */
export function AnswerBox({ label = "The short answer", answer }: { label?: string; answer: string }) {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <Container size="md">
        <Reveal className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">{label}</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">{answer}</p>
        </Reveal>
      </Container>
    </section>
  );
}

/** Long-form sections (h2 + paragraphs + optional bullets). */
export function ContentSections({ sections, className }: { sections: ContentSection[]; className?: string }) {
  if (sections.length === 0) return null;
  return (
    <section className={className ?? "py-16 sm:py-20 lg:py-24"}>
      <Container size="md">
        <div className="space-y-12">
          {sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{s.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-relaxed text-foreground">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Real HTML comparison table (easy for search engines and AI tools to parse). */
export function ComparisonTableSection({ table }: { table: ComparisonTable }) {
  return (
    <section className="bg-subtle py-16 sm:py-20 lg:py-24">
      <Container size="lg">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{table.caption}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">{table.caption}</caption>
              <thead>
                <tr className="bg-brand-50">
                  {table.columns.map((c, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-semibold text-foreground sm:px-5">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, r) => (
                  <tr key={r} className="border-t border-border align-top">
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-3 font-semibold text-foreground sm:px-5">
                          {cell}
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-3 text-muted sm:px-5">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Chips linking every service-area page. */
export function TownLinks({ heading, className }: { heading: string; className?: string }) {
  return (
    <section className={className ?? "py-14 sm:py-16"}>
      <Container size="xl">
        <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{heading}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/service-areas/${a.slug}`}
                className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground hover:border-brand-400 hover:text-brand-700"
              >
                {a.city}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
