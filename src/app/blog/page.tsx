import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getAllPosts, formatPostDate } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HVAC & Water Heater Blog — Sonoma & Marin",
  description:
    "Straight answers on heat pumps, water heaters, rebates, and home comfort for Sonoma and Marin homeowners, from the Green Core Heating & Air team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Blog" }]} />

      <Hero
        eyebrow="Blog"
        title="Home comfort answers for the North Bay."
        description="Heat pumps, water heaters, rebates, and real costs, explained by the Green Core team."
        image="/images/hero/services.jpg"
        imageAlt="Green Core technician working on a home heating system"
        size="compact"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="xl">
          {posts.length === 0 ? (
            <p className="text-center text-muted">New articles are on the way. Check back soon.</p>
          ) : (
            <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <RevealItem as="li" key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                        {post.category}
                      </p>
                      <h2 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                      <p className="mt-4 text-xs text-muted">
                        {formatPostDate(post.date)} · {post.readingMinutes} min read
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
          <Reveal>
            <p className="mt-12 text-center text-sm text-muted">
              Have a question you&apos;d like answered? Call us at{" "}
              <a href="tel:+17079885858" className="font-semibold text-brand-700 hover:underline">
                (707) 988-5858
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
