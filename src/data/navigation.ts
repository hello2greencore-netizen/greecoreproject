import type { NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
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
    ],
  },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Heat Pumps", href: "/services/heat-pumps" },
    { label: "Air Conditioning", href: "/services/air-conditioning" },
    { label: "Furnaces", href: "/services/furnaces" },
    { label: "Mini Splits", href: "/services/mini-splits" },
    { label: "Duct Work", href: "/services/duct-work" },
    { label: "Harvest Thermal", href: "/services/harvest-thermal" },
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
  ],
};
