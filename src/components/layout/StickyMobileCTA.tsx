"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { HCPBookingButton } from "@/components/ui/HCPBookingButton";

export function StickyMobileCTA() {
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;

      setNearBottom(y + window.innerHeight > doc.scrollHeight - 140);

      if (y > lastScrollY.current + 8 && y > 40) {
        setHiddenByScroll(true);
      } else if (y < lastScrollY.current - 8) {
        setHiddenByScroll(false);
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = hiddenByScroll || nearBottom;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 z-20 flex justify-center px-4 lg:hidden",
        "transition-all duration-300 ease-out",
        hidden ? "translate-y-32 opacity-0" : "translate-y-0 opacity-100",
      )}
      style={{
        bottom: "calc(16px + env(safe-area-inset-bottom))",
      }}
      aria-hidden={hidden}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-stretch gap-1 rounded-full p-1",
          "border border-black/[0.06] bg-white/90 backdrop-blur-xl",
          "shadow-[0_10px_28px_-8px_rgba(15,27,20,0.22),0_3px_10px_-4px_rgba(15,27,20,0.1)]",
        )}
      >
        <Link
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.phone}`}
          className={cn(
            "flex items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold",
            "text-foreground/75 transition-colors duration-150",
            "hover:bg-black/[0.04] hover:text-foreground active:bg-black/[0.06]",
          )}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
            <path
              d="M4.5 5.5a2 2 0 0 1 2-2h1.6a1 1 0 0 1 .98.79l.72 3.38a1 1 0 0 1-.27.94l-1.4 1.4a14 14 0 0 0 6.18 6.18l1.4-1.4a1 1 0 0 1 .94-.27l3.38.72a1 1 0 0 1 .79.98v1.6a2 2 0 0 1-2 2h-.5C9.8 19.82 4.18 14.2 4.5 5.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Call
        </Link>

        <HCPBookingButton
          className={cn(
            "flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold",
            "bg-brand-600 text-white transition-colors duration-150",
            "hover:bg-brand-700 active:bg-brand-800",
          )}
        >
          Get Estimate
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3 w-3">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HCPBookingButton>
      </div>
    </div>
  );
}
