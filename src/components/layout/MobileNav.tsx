"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Logo } from "@/components/layout/Logo";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const drawerVariants: Variants = {
  closed: { x: "100%", transition: { duration: 0.28, ease: EASE } },
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 380, damping: 36, mass: 0.7 },
  },
};

const listVariants: Variants = {
  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.12, staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 18 },
  open: { opacity: 1, x: 0, transition: { duration: 0.32, ease: EASE } },
};

export function MobileNav({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [prevOpen, setPrevOpen] = useState(isOpen);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: delay portal until after hydration to avoid SSR mismatch with document.body
    setMounted(true);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Auto-expand section matching current route on each open (derived state)
  if (isOpen !== prevOpen) {
    setPrevOpen(isOpen);
    if (isOpen) {
      const match = primaryNav.find(
        (link) => link.children && pathname?.startsWith(link.href),
      );
      setExpanded(match?.href ?? null);
    }
  }

  // Move focus to close button when drawer opens
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 220);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const toggle = (href: string) =>
    setExpanded((curr) => (curr === href ? null : href));

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-hidden={!isOpen}>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-[360px] flex-col bg-white shadow-2xl will-change-transform"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5">
              <Logo />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-full text-foreground/50",
                  "transition-colors duration-200 hover:bg-black/[0.04] hover:text-foreground active:scale-[0.94]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mx-5 h-px bg-black/[0.06]" />

            {/* Nav */}
            <nav
              aria-label="Mobile menu"
              className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
            >
              <motion.ul
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="space-y-0.5"
              >
                {primaryNav.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);
                  const hasChildren = Boolean(link.children?.length);
                  const isExpanded = expanded === link.href;

                  if (!hasChildren) {
                    return (
                      <motion.li key={link.href} variants={itemVariants}>
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex min-h-12 items-center rounded-xl px-3 text-[15px] font-medium transition-colors duration-150",
                            isActive
                              ? "bg-brand-50 text-brand-700"
                              : "text-foreground/80 hover:bg-black/[0.03] hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li key={link.href} variants={itemVariants}>
                      <div className="flex items-stretch gap-1">
                        <Link
                          href={link.href}
                          className={cn(
                            "flex min-h-12 flex-1 items-center rounded-xl px-3 text-[15px] font-medium transition-colors duration-150",
                            isActive
                              ? "bg-brand-50 text-brand-700"
                              : "text-foreground/80 hover:bg-black/[0.03] hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggle(link.href)}
                          aria-expanded={isExpanded}
                          aria-controls={`submenu-${link.href}`}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label}`}
                          className={cn(
                            "grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl",
                            "text-foreground/45 transition-colors duration-150 hover:bg-black/[0.03] hover:text-foreground",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                          )}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isExpanded && "rotate-180",
                            )}
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        id={`submenu-${link.href}`}
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="ml-3 mt-1 space-y-0.5 border-l border-black/[0.06] pl-3 pb-1">
                            {link.children!.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors duration-150",
                                      isChildActive
                                        ? "font-semibold text-brand-700"
                                        : "text-foreground/60 hover:bg-black/[0.03] hover:text-foreground",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            <div className="mx-5 h-px bg-black/[0.06]" />

            {/* Footer actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.22, duration: 0.28, ease: EASE }}
              className="space-y-2.5 px-5 pb-5 pt-4"
            >
              <Link
                href={siteConfig.cta.primary.href}
                className={cn(
                  "flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm",
                  "transition-[background-color,transform] duration-150 hover:bg-brand-700 active:bg-brand-800 active:scale-[0.98]",
                )}
              >
                Get Estimate
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a
                href={siteConfig.phoneHref}
                className={cn(
                  "flex min-h-11 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium text-foreground/80",
                  "transition-[background-color,transform] duration-150 hover:bg-subtle hover:text-foreground active:scale-[0.98]",
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
                {siteConfig.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
