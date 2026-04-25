"use client";

import { Children, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { CSSProperties, KeyboardEvent, PointerEvent, ReactNode } from "react";

// ─── CarouselItem ─────────────────────────────────────────────────────────────

type CarouselItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
};

export function CarouselItem({ children, className, style, "aria-label": ariaLabel }: CarouselItemProps) {
  return (
    <li
      aria-roledescription="slide"
      aria-label={ariaLabel}
      className={cn("snap-start flex-shrink-0", className)}
      style={style}
    >
      {children}
    </li>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

type CarouselProps = {
  children: ReactNode;
  "aria-label": string;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  trackClassName?: string;
};

const SPRING = { type: "spring", stiffness: 400, damping: 28 } as const;
const DOT_SPRING = { type: "spring", stiffness: 500, damping: 40 } as const;

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      "aria-label": ariaLabel,
      showArrows = true,
      showDots = true,
      className,
      trackClassName,
    },
    ref,
  ) => {
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const shouldReduceMotion = useReducedMotion();
    const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

    const count = Children.count(children);
    const scrollBehavior: ScrollBehavior = shouldReduceMotion ? "instant" : "smooth";

    const updateState = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return;

      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);

      const items = Array.from(el.querySelectorAll<HTMLElement>(":scope > li"));
      if (!items.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      items.forEach((item, i) => {
        const dist = Math.abs(item.offsetLeft + item.offsetWidth / 2 - mid);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      setActiveIndex(closestIdx);
    }, []);

    useEffect(() => {
      const el = scrollerRef.current;
      if (!el) return;
      updateState();
      el.addEventListener("scroll", updateState, { passive: true });
      const ro = new ResizeObserver(updateState);
      ro.observe(el);
      return () => {
        el.removeEventListener("scroll", updateState);
        ro.disconnect();
      };
    }, [updateState]);

    const scrollToIndex = useCallback(
      (idx: number) => {
        const el = scrollerRef.current;
        if (!el) return;
        const target = el.querySelectorAll<HTMLElement>(":scope > li")[idx];
        if (!target) return;
        el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: scrollBehavior });
      },
      [scrollBehavior],
    );

    const scrollByDirection = useCallback(
      (dir: -1 | 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const first = el.querySelector<HTMLElement>(":scope > li");
        if (!first) return;
        const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
        const step = first.getBoundingClientRect().width + gap;
        el.scrollBy({ left: dir * step, behavior: scrollBehavior });
      },
      [scrollBehavior],
    );

    const snapToNearest = useCallback(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const items = Array.from(el.querySelectorAll<HTMLElement>(":scope > li"));
      if (!items.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      items.forEach((item, i) => {
        const dist = Math.abs(item.offsetLeft + item.offsetWidth / 2 - mid);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      scrollToIndex(closestIdx);
    }, [scrollToIndex]);

    const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
      const el = scrollerRef.current;
      if (!el || e.pointerType === "touch") return;
      drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      el.style.scrollSnapType = "none";
    };

    const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
      const el = scrollerRef.current;
      if (!drag.current.active || !el) return;
      const delta = e.clientX - drag.current.startX;
      if (Math.abs(delta) > 5) drag.current.moved = true;
      el.scrollLeft = drag.current.startScroll - delta;
    };

    const onPointerUp = () => {
      const el = scrollerRef.current;
      if (!drag.current.active || !el) return;
      drag.current.active = false;
      el.style.cursor = "";
      el.style.scrollSnapType = "";
      requestAnimationFrame(snapToNearest);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByDirection(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByDirection(-1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToIndex(count - 1);
      }
    };

    const onClickCapture = (e: React.MouseEvent) => {
      if (drag.current.moved) {
        e.stopPropagation();
        drag.current.moved = false;
      }
    };

    return (
      <div ref={ref} role="region" aria-label={ariaLabel} className={className}>
        {/* Track + floating arrows */}
        <div className="relative">
          <ul
            ref={scrollerRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={onClickCapture}
            className={cn(
              "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:gap-5",
              "cursor-grab active:cursor-grabbing",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              trackClassName,
            )}
          >
            {children}
          </ul>

          {showArrows && (
            <>
              <motion.button
                type="button"
                onClick={() => scrollByDirection(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous slide"
                whileHover={canScrollLeft ? { scale: 1.08 } : undefined}
                whileTap={canScrollLeft ? { scale: 0.92 } : undefined}
                transition={SPRING}
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2 hidden sm:grid",
                  "h-11 w-11 place-items-center rounded-full",
                  "bg-white/90 shadow-md ring-1 ring-black/[0.06] backdrop-blur-sm",
                  "text-foreground/70 transition-[background-color,color] duration-200",
                  "hover:bg-white hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollByDirection(1)}
                disabled={!canScrollRight}
                aria-label="Next slide"
                whileHover={canScrollRight ? { scale: 1.08 } : undefined}
                whileTap={canScrollRight ? { scale: 0.92 } : undefined}
                transition={SPRING}
                className={cn(
                  "absolute right-3 top-1/2 -translate-y-1/2 hidden sm:grid",
                  "h-11 w-11 place-items-center rounded-full",
                  "bg-white/90 shadow-md ring-1 ring-black/[0.06] backdrop-blur-sm",
                  "text-foreground/70 transition-[background-color,color] duration-200",
                  "hover:bg-white hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </>
          )}
        </div>

        {/* Pagination dots */}
        {showDots && count > 1 && (
          <div
            role="tablist"
            aria-label={`${ariaLabel} pagination`}
            className="mt-5 flex items-center justify-center gap-1.5"
          >
            {Array.from({ length: count }).map((_, i) => (
              <motion.button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                initial={false}
                animate={{
                  width: i === activeIndex ? 24 : 6,
                  opacity: i === activeIndex ? 1 : 0.3,
                }}
                transition={DOT_SPRING}
                className="h-1.5 rounded-full bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);
Carousel.displayName = "Carousel";
