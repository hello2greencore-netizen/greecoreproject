"use client";

import { usePathname } from "next/navigation";

/**
 * Hides site-wide pieces (like the Corey chat helper or the sticky mobile
 * call-to-action bar) on specific pages, such as the /meta ad landing page.
 */
export function HideOnPaths({ paths, children }: { paths: string[]; children: React.ReactNode }) {
  const pathname = usePathname();
  if (paths.includes(pathname)) return null;
  return <>{children}</>;
}
