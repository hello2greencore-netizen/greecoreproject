import { ServiceTypePage, serviceTypeMetadata } from "@/components/sections/ServiceTypePage";
import { getServiceTypeBySlug } from "@/data/serviceTypes";

const type = getServiceTypeBySlug("hvac-installation")!;

export const metadata = serviceTypeMetadata(type);

export default function Page() {
  return <ServiceTypePage type={type} />;
}
