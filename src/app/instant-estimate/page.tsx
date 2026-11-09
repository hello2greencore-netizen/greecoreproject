import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSection } from "@/components/sections/FAQSection";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import EstimatorFrame from "./EstimatorFrame";

export const metadata = buildMetadata({
  title: "Online HVAC Estimate: Instant Furnace & Heat Pump Prices",
  description:
    "Get a free online estimate in about two minutes. See real Green Core prices for a new gas furnace or heat pump system. Serving Sonoma, Marin, Napa and San Francisco.",
  path: "/instant-estimate",
});

const estimateFaqs = [
  {
    question: "Can I get an HVAC estimate online?",
    answer:
      "Yes. Green Core's free online estimate shows real prices for a new gas furnace or heat pump system for your home in about two minutes. Answer a few questions about your home, then see your options and prices.",
  },
  {
    question: "What does the online estimate cover?",
    answer:
      "It prices new gas furnaces and heat pump systems. Gas furnace with central AC and dual fuel (a heat pump with a gas furnace backup) are priced at a free visit. Standard gas and electric tank water heater replacement starts at $2,850, and tankless, heat pump water heaters, mini splits and ductwork get a free estimate.",
  },
  {
    question: "Is the online price my final price?",
    answer:
      "It's a real Green Core price based on your answers. Your final price is confirmed in writing after a free visit or photo review, before any work starts, so there are no surprises.",
  },
  {
    question: "How long does the online estimate take?",
    answer: "About two minutes. You'll answer questions like what heats your home now, its size, and where your furnace or indoor unit is.",
  },
  {
    question: "Does the online estimate cost anything?",
    answer: "No. The online estimate is free, and so is the follow-up visit to confirm your price.",
  },
  {
    question: "Where do you offer online estimates?",
    answer:
      "Anywhere we work: Sonoma and Marin counties, including Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael and Mill Valley, plus Napa and San Francisco.",
  },
];

export default function InstantEstimatePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Online Estimate" }]} />

      {/* Short, crawlable intro: the estimator itself lives in an iframe (public/estimator.html, noindex). */}
      <section className="border-b border-border bg-subtle">
        <Container size="lg" className="py-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Free online estimate · Sonoma &amp; Marin</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get an online estimate for a new furnace or heat pump
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Answer a few quick questions about your home and get real Green Core prices in about two minutes. Your final
            price is confirmed in writing after a free visit or photo review.
          </p>
        </Container>
      </section>

      <section className="bg-[#F3F6F2]">
        <EstimatorFrame />
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <Container size="md">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">How the online estimate works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            <li className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-brand-700">1. Tell us about your home</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">What heats it now, how big it is, and where your furnace or indoor unit sits.</p>
            </li>
            <li className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-brand-700">2. See your options and prices</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">Real Green Core prices for the systems that fit your home, from budget-friendly to top of the line.</p>
            </li>
            <li className="rounded-2xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-brand-700">3. Confirm with a free visit</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We confirm your price in writing after a free visit or photo review. Questions? Call {siteConfig.phone}.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      <FAQSection eyebrow="Online estimate" title="Online estimate questions, answered" faqs={estimateFaqs} />
    </>
  );
}
