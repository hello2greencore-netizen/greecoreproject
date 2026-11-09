import { notFound } from "next/navigation";
import { CountyHubPage } from "@/components/sections/CountyHubPage";
import { getCountyHub } from "@/data/countyHubs";
import { buildMetadata } from "@/lib/seo";

const hub = getCountyHub("solano-county");

export const metadata = buildMetadata({
  title: hub?.metaTitle ?? "Service Area",
  description: hub?.metaDescription ?? "",
  path: "/service-areas/solano-county",
});

export default function Page() {
  if (!hub) notFound();
  return <CountyHubPage hub={hub} />;
}
