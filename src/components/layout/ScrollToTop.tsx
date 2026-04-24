"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-4 z-20 grid h-11 w-11 place-items-center rounded-full",
        "border border-black/[0.06] bg-white/90 text-foreground/70 backdrop-blur-xl",
        "shadow-[0_10px_28px_-8px_rgba(15,27,20,0.22),0_3px_10px_-4px_rgba(15,27,20,0.1)]",
        "transition-all duration-300 ease-out",
        "hover:bg-white hover:text-foreground active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        "bottom-[calc(76px+env(safe-area-inset-bottom))] lg:right-6 lg:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
