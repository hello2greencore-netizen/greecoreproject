import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="md" className="text-center">
        <RevealGroup mode="enter" stagger={0.08}>
          <RevealItem>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
              404
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="heading-display mt-3 text-4xl sm:text-5xl">
              We couldn&apos;t find that page.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-base text-muted sm:text-lg">
              It may have moved, or the link might be out of date.
            </p>
          </RevealItem>
          <RevealItem className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              Contact us →
            </Link>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
