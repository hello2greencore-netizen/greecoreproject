"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

declare global {
  interface Window {
    HCPWidget?: { openModal(): void };
  }
}

type Props = {
  className?: string;
  children: ReactNode;
  /** Runs before the booking window opens (e.g. to close a panel). */
  onClick?: () => void;
  /** Which button was clicked (e.g. "book_now", "free_estimate"), sent to Tag Manager. */
  ctaLabel?: string;
};

export function HCPBookingButton({ className, children, onClick, ctaLabel }: Props) {
  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => {
        onClick?.();
        if (ctaLabel) (window.dataLayer = window.dataLayer || []).push({ event: "booking_cta_click", cta_label: ctaLabel });
        // The Housecall Pro script loads lazily; if someone clicks before it's
        // ready, send them to the contact page instead of doing nothing.
        if (window.HCPWidget?.openModal) window.HCPWidget.openModal();
        else window.location.href = "/contact";
      }}
    >
      {children}
    </button>
  );
}
