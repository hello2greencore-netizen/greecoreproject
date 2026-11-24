"use client";

// Saves ad tracking tags (utm_* and Meta's fbclid) from whatever page a visitor lands on,
// so the online estimator can credit the right campaign later. Renders nothing.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

export function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
