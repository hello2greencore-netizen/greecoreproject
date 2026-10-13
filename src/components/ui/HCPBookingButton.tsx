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
};

export function HCPBookingButton({ className, children, onClick }: Props) {
  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => {
        onClick?.();
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
