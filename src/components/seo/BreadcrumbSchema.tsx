import { siteConfig } from "@/data/site";

type CrumbItem = {
  name: string;
  /** Omit for the last (current) item. */
  path?: string;
};

type Props = {
  items: CrumbItem[];
};

export function BreadcrumbSchema({ items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path
        ? { item: `${siteConfig.url}${item.path}` }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
