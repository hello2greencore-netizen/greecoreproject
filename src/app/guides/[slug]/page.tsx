import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { GuideScript } from "@/components/guides/GuideScript";
import { guides, getGuideBySlug } from "@/data/guides";
import { getGuideContent } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuideBySlug(slug);
  if (!guide) return buildMetadata({ title: "Homeowner Guides", description: "" });
  return buildMetadata({ title: guide.title, description: guide.description, path: `/guides/${guide.slug}`, absolute: true });
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const { html, css, js } = getGuideContent(guide.slug, guide.style);

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Homeowner Guides", path: "/guides" }, { name: guide.name }]} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="gc-guide" dangerouslySetInnerHTML={{ __html: html }} />
      <GuideScript code={js} />
    </>
  );
}
