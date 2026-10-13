import { ServiceTypePage, serviceTypeMetadata } from "@/components/sections/ServiceTypePage";
import { getServiceTypeBySlug } from "@/data/serviceTypes";

const type = getServiceTypeBySlug("hvac-repair")!;

export const metadata = serviceTypeMetadata(type);

export default function Page() {
  return <ServiceTypePage type={type} />;
}
