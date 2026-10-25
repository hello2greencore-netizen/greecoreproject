import type { NavLink } from "@/types";
import { getRunningSpecials } from "@/data/specials";

/** "Specials" shows in the top menu only while a real offer is running. */
const hasSpecials = getRunningSpecials().some((s) => !s.sample);

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Repair", href: "/hvac-repair" },
      { label: "Installation", href: "/hvac-installation" },
      { label: "Maintenance", href: "/hvac-maintenance" },
    ],
  },
  {
    label: "HVAC",
    href: "/services",
    children: [
      { label: "Heat Pumps", href: "/services/heat-pumps" },
      { label: "Air Conditioning", href: "/services/air-conditioning" },
      { label: "Furnaces", href: "/services/furnaces" },
      { label: "Mini Splits", href: "/services/mini-splits" },
      { label: "Duct Work", href: "/services/duct-work" },
      { label: "Harvest Thermal", href: "/services/harvest-thermal" },
    ],
  },
  {
    label: "Water Heaters",
    href: "/services#water-heating",
    children: [
      { label: "All Water Heaters", href: "/services/water-heaters" },
      { label: "Heat Pump Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Tankless Water Heaters", href: "/services/tankless-water-heaters" },
      { label: "Gas Water Heaters", href: "/services/gas-water-heaters" },
      { label: "Electric Water Heaters", href: "/services/electric-water-heaters" },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [
      { label: "Petaluma", href: "/service-areas/petaluma" },
      { label: "Rohnert Park", href: "/service-areas/rohnert-park" },
      { label: "Santa Rosa", href: "/service-areas/santa-rosa" },
      { label: "Novato", href: "/service-areas/novato" },
      { label: "San Rafael", href: "/service-areas/san-rafael" },
      { label: "Mill Valley", href: "/service-areas/mill-valley" },
      { label: "Tiburon", href: "/service-areas/tiburon" },
      { label: "Sebastopol", href: "/service-areas/sebastopol" },
      { label: "Cotati", href: "/service-areas/cotati" },
      { label: "Windsor", href: "/service-areas/windsor" },
      { label: "Healdsburg", href: "/service-areas/healdsburg" },
      { label: "Sonoma", href: "/service-areas/sonoma" },
      { label: "San Anselmo", href: "/service-areas/san-anselmo" },
      { label: "Fairfax", href: "/service-areas/fairfax" },
    ],
  },
  { label: "Reviews", href: "/testimonials" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  ...(hasSpecials ? [{ label: "Specials", href: "/specials" }] : []),
  { label: "Instant Estimate", href: "/instant-estimate" },
  // Desktop shows the Instant Estimate button in this spot; Contact stays in the phone menu and footer.
  { label: "Contact", href: "/contact", mobileOnly: true },
];

/**
 * Whether a top-menu item should show as the current page. Several items can
 * point at /services (Services, HVAC, Water Heaters), so on /services itself
 * only the first of them ("Services") lights up; the others light up when one
 * of their own dropdown pages is open.
 */
export function isNavActive(link: NavLink, pathname: string | null): boolean {
  if (!pathname) return false;
  if (link.href === "/") return pathname === "/";
  const base = link.href.split("#")[0];
  if (link.children?.some((c) => pathname === c.href.split("#")[0])) return true;
  const first = primaryNav.find((l) => l.href.split("#")[0] === base);
  if (first !== link) return false;
  return link.children ? pathname === base : pathname.startsWith(base);
}

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Our Work", href: "/our-work" },
    { label: "Homeowner Guides", href: "/guides" },
    { label: "Specials", href: "/specials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Repair", href: "/hvac-repair" },
    { label: "Installation", href: "/hvac-installation" },
    { label: "Maintenance", href: "/hvac-maintenance" },
    { label: "Heat Pumps", href: "/services/heat-pumps" },
    { label: "Air Conditioning", href: "/services/air-conditioning" },
    { label: "Furnaces", href: "/services/furnaces" },
    { label: "Mini Splits", href: "/services/mini-splits" },
    { label: "Duct Work", href: "/services/duct-work" },
    { label: "Harvest Thermal", href: "/services/harvest-thermal" },
  ],
  waterHeaters: [
    { label: "Water Heaters", href: "/services/water-heaters" },
    { label: "Heat Pump Water Heaters", href: "/services/heat-pump-water-heaters" },
    { label: "Tankless Water Heaters", href: "/services/tankless-water-heaters" },
    { label: "Gas Water Heaters", href: "/services/gas-water-heaters" },
    { label: "Electric Water Heaters", href: "/services/electric-water-heaters" },
  ],
  areas: [
    { label: "Petaluma", href: "/service-areas/petaluma" },
    { label: "Rohnert Park", href: "/service-areas/rohnert-park" },
    { label: "Santa Rosa", href: "/service-areas/santa-rosa" },
    { label: "Novato", href: "/service-areas/novato" },
    { label: "San Rafael", href: "/service-areas/san-rafael" },
    { label: "Mill Valley", href: "/service-areas/mill-valley" },
    { label: "Tiburon", href: "/service-areas/tiburon" },
    { label: "Sebastopol", href: "/service-areas/sebastopol" },
    { label: "Cotati", href: "/service-areas/cotati" },
    { label: "Windsor", href: "/service-areas/windsor" },
    { label: "Healdsburg", href: "/service-areas/healdsburg" },
    { label: "Sonoma", href: "/service-areas/sonoma" },
    { label: "San Anselmo", href: "/service-areas/san-anselmo" },
    { label: "Fairfax", href: "/service-areas/fairfax" },
  ],
};
