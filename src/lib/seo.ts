import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  /** Use true on the home page so the brand name isn't appended twice by the layout template. */
  absolute?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  absolute = false,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const ogImages = ogImage
    ? [{ url: ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`, width: 1200, height: 630 }]
    : undefined;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
