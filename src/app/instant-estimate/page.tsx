import { Container } from "@/components/ui/Container";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { buildMetadata } from "@/lib/seo";
import EstimatorFrame from "./EstimatorFrame";

export const metadata = buildMetadata({
  title: "Instant HVAC Estimate",
  description:
    "Answer a few questions and see real prices for a new heat pump or furnace in about two minutes. Serving Sonoma, Marin, Napa and San Francisco.",
  path: "/instant-estimate",
});

export default function InstantEstimatePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Instant Estimate" }]} />

      {/* Short, crawlable intro: the estimator itself lives in an iframe (public/estimator.html, noindex). */}
      <section className="border-b border-border bg-subtle">
        <Container size="lg" className="py-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Instant estimate · Sonoma &amp; Marin</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See heat pump and furnace prices for your home
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
    </>
  );
}
