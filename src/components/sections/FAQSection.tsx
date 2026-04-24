import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FAQ } from "@/types";

type Props = {
  title?: string;
  eyebrow?: string;
  faqs: FAQ[];
};

export function FAQSection({
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  faqs,
}: Props) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="md">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="center"
          className="mx-auto"
        />
        <ul className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <details className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-foreground sm:text-lg">
                  {faq.question}
                  <span
                    aria-hidden
                    className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
