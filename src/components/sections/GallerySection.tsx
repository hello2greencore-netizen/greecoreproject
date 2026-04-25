"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 400, damping: 28 } as const;
const DOT_SPRING = { type: "spring", stiffness: 500, damping: 40 } as const;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
};

export function GallerySection() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: delay portal until after hydration to avoid SSR mismatch with document.body
    setMounted(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: sync items-per-page to viewport immediately after mount
    setItemsPerPage(mq.matches ? 3 : 1);
    const handler = (e: MediaQueryListEvent) => {
      setItemsPerPage(e.matches ? 3 : 1);
      setPage(0);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const goTo = useCallback(
    (next: number) => {
      setDir(next > page ? 1 : -1);
      setPage(next);
    },
    [page],
  );

  const pageItems = galleryItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  // ── Lightbox ────────────────────────────────────────────────────────────────
  const isOpen = lightbox !== null;
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevPhoto = useCallback(
    () => setLightbox((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null)),
    [],
  );
  const nextPhoto = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % galleryItems.length : null)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevPhoto();
      else if (e.key === "ArrowRight") nextPhoto();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeLightbox, prevPhoto, nextPhoto]);

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title="Recent jobs & happy customers."
            description="A few snapshots from around Sonoma and Marin."
          />
        </Reveal>

        <div className="mt-8 sm:mt-10">
          {/* Slide */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: EASE }}
                className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4"
              >
                {pageItems.map((item, i) => {
                  const globalIdx = page * itemsPerPage + i;
                  return (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setLightbox(globalIdx)}
                      aria-label={`View full size: ${item.alt}`}
                      className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
                      {item.caption && (
                        <p className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 text-left text-sm font-medium text-white drop-shadow-sm">
                          {item.caption}
                        </p>
                      )}
                      <div
                        className={cn(
                          "pointer-events-none absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full",
                          "bg-black/25 text-white/80 backdrop-blur-sm",
                          "opacity-0 transition-opacity duration-200 [@media(hover:hover)]:group-hover:opacity-100",
                        )}
                      >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
                          <path
                            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <motion.button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-label="Previous page"
                whileHover={page > 0 ? { scale: 1.08 } : undefined}
                whileTap={page > 0 ? { scale: 0.92 } : undefined}
                transition={SPRING}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground/60",
                  "transition-colors duration-150 hover:bg-subtle hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>

              <div role="tablist" aria-label="Gallery pages" className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === page}
                    aria-label={`Page ${i + 1}`}
                    onClick={() => goTo(i)}
                    initial={false}
                    animate={{ width: i === page ? 24 : 6, opacity: i === page ? 1 : 0.3 }}
                    transition={DOT_SPRING}
                    className="h-1.5 rounded-full bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  />
                ))}
              </div>

              <motion.button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages - 1}
                aria-label="Next page"
                whileHover={page < totalPages - 1 ? { scale: 1.08 } : undefined}
                whileTap={page < totalPages - 1 ? { scale: 0.92 } : undefined}
                transition={SPRING}
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground/60",
                  "transition-colors duration-150 hover:bg-subtle hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
      </Container>

      {/* ── Lightbox ──────────────────────────────────────────────────────────── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4 sm:p-10"
                role="dialog"
                aria-modal="true"
                aria-label="Photo lightbox"
              >
                <button type="button" onClick={closeLightbox} aria-label="Close lightbox" className="absolute inset-0" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="relative z-10 h-[70vh] w-full max-w-5xl"
                  >
                    {lightbox !== null && (
                      <>
                        <Image
                          src={galleryItems[lightbox].src}
                          alt={galleryItems[lightbox].alt}
                          fill
                          sizes="(min-width: 1280px) 1024px, 95vw"
                          className="rounded-xl object-contain"
                          priority
                        />
                        {galleryItems[lightbox].caption && (
                          <p className="absolute -bottom-8 inset-x-0 text-center text-sm text-white/60">
                            {galleryItems[lightbox].caption}
                          </p>
                        )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                  className={cn(
                    "absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full",
                    "bg-white/10 text-white transition-colors duration-150 hover:bg-white/20",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  )}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                  aria-label="Previous photo"
                  className={cn(
                    "absolute left-3 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full sm:left-5",
                    "bg-white/10 text-white transition-colors duration-150 hover:bg-white/20",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  )}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                  aria-label="Next photo"
                  className={cn(
                    "absolute right-3 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full sm:right-5",
                    "bg-white/10 text-white transition-colors duration-150 hover:bg-white/20",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                  )}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium tabular-nums text-white/70">
                  {lightbox !== null ? lightbox + 1 : 0}&thinsp;/&thinsp;{galleryItems.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
