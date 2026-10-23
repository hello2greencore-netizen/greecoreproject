"use client";

import { useEffect } from "react";

/**
 * Runs a guide's interactive script (sliders, calculators) after the page renders,
 * and opens the Housecall Pro booking window from any "Book" link in the guide.
 */
export function GuideScript({ code }: { code: string }) {
  useEffect(() => {
    if (code) {
      // The guide scripts are our own files from src/content/guides.
      new Function(code)();
    }
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".gc-guide a[data-book]"));
    const onClick = (e: MouseEvent) => {
      if (window.HCPWidget?.openModal) {
        e.preventDefault();
        (window.dataLayer = window.dataLayer || []).push({ event: "booking_cta_click", cta_label: "guide_estimate" });
        window.HCPWidget.openModal();
      }
    };
    links.forEach((a) => a.addEventListener("click", onClick));
    return () => links.forEach((a) => a.removeEventListener("click", onClick));
  }, [code]);
  return null;
}
