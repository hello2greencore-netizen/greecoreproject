import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Blog", description: "" });
  const meta = buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, modifiedTime: post.updated ?? post.date },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = post.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const morePosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: post.author, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/header/greencorelogobg.png` },
    },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Hero
        eyebrow={post.category}
        title={post.title}
        description={`${formatPostDate(post.updated ?? post.date)} · ${post.readingMinutes} min read · ${post.author}`}
        image={post.image}
        imageAlt={post.imageAlt}
        size="compact"
      />

      <article className="py-14 sm:py-16 lg:py-20">
        <Container size="sm">
          <p className="text-lg leading-relaxed text-muted">{post.description}</p>
          <div className="post-body mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
          <p className="mt-12 border-t border-border pt-6 text-sm text-muted">
            Questions about your home? Call Green Core Heating &amp; Air at{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-brand-700 hover:underline">
              {siteConfig.phone}
            </a>{" "}
            or <Link href="/contact" className="font-semibold text-brand-700 hover:underline">request a free estimate</Link>.
            We serve homeowners across Sonoma and Marin counties.
          </p>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-subtle py-14 sm:py-16">
          <Container size="xl">
            <SectionHeading eyebrow="Related services" title="How we can help." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Card>
                    <h3 className="font-display text-lg font-bold">{s.shortName ?? s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline"
                    >
                      Learn more
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {morePosts.length > 0 && (
        <section className="py-14 sm:py-16">
          <Container size="xl">
            <SectionHeading eyebrow="Keep reading" title="More from the blog." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {morePosts.map((p) => (
                <li key={p.slug}>
                  <Card>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{p.category}</p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                      <Link href={`/blog/${p.slug}`} className="hover:underline">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
