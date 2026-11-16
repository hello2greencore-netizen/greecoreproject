import { RepairServicePage, repairPageMetadata } from "@/components/sections/RepairServicePage";
import { getRepairPage } from "@/data/repairPages";

const page = getRepairPage("furnace-repair")!;

export const metadata = repairPageMetadata(page);

export default function Page() {
  return <RepairServicePage page={page} />;
}
