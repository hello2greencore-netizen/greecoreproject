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
};

export function HCPBookingButton({ className, children }: Props) {
  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => window.HCPWidget?.openModal()}
    >
      {children}
    </button>
  );
}
