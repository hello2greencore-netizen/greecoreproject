"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);

    const items = Array.from(el.querySelectorAll<HTMLElement>("li"));
    if (items.length === 0) return;
    const containerCenter = el.getBoundingClientRect().left + el.clientWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - containerCenter);
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

  const scrollByDirection = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector("li");
    if (!first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    const step = first.getBoundingClientRect().width + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = el.querySelectorAll<HTMLElement>("li")[idx];
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - el.offsetLeft,
      behavior: "smooth",
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByDirection(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByDirection(-1);
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our work"
            title="Recent jobs, installs & happy customers."
            description="A few snapshots from around Sonoma and Marin."
          />

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <ArrowButton
              direction="left"
              onClick={() => scrollByDirection(-1)}
              disabled={!canScrollLeft}
            />
            <ArrowButton
              direction="right"
              onClick={() => scrollByDirection(1)}
              disabled={!canScrollRight}
            />
          </div>
        </div>
      </Container>

      <div className="relative mt-8 sm:mt-10">
        <ul
          ref={scrollerRef}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Project gallery"
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 sm:gap-5 sm:px-6 lg:px-8",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {galleryItems.map((item, i) => (
            <li
              key={item.src}
              className="group relative flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-subtle"
              style={{ width: "min(85vw, 380px)", aspectRatio: "4 / 5" }}
              aria-label={`Photo ${i + 1} of ${galleryItems.length}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 380px, 85vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4">
                  <p className="text-sm font-medium text-white drop-shadow-sm">
                    {item.caption}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Container size="xl" className="mt-5 sm:mt-6">
        <div
          role="tablist"
          aria-label="Gallery pagination"
          className="flex items-center justify-center gap-1.5"
        >
          {galleryItems.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                i === activeIndex
                  ? "w-6 bg-brand-600"
                  : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous photo" : "Next photo"}
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-foreground/70",
        "transition-all duration-200 hover:bg-subtle hover:text-foreground active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white",
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
        <path
          d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
