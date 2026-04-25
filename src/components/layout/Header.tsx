"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { useMobileNav } from "@/hooks/useMobileNav";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { isOpen, open, close } = useMobileNav();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 80) {
        setHidden(false);
      } else if (y > lastScrollY.current + 6) {
        setHidden(true);
      } else if (y < lastScrollY.current - 6) {
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/[0.06]",
        "transition-[opacity,transform] duration-300 ease-in-out",
        hidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0",
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-3 sm:gap-6 lg:h-[72px] lg:gap-8">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-7">
              {primaryNav.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                if (link.children) {
                  return (
                    <li key={link.href} className="group relative">
                      {/* Trigger */}
                      <button
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                          isActive
                            ? "text-brand-700"
                            : "text-foreground/55 group-hover:text-foreground",
                        )}
                      >
                        {link.label}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Invisible bridge so mouse can travel from trigger to panel */}
                      <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

                      {/* Dropdown panel */}
                      <div
                        className={cn(
                          "pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 -translate-x-1/2 -translate-y-1 opacity-0 transition-all duration-200",
                          "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                        )}
                      >
                        <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/[0.08] ring-1 ring-black/[0.06]">
                          <div
                            className={cn(
                              "grid gap-x-1 gap-y-0.5 p-2",
                              link.children.length >= 6 ? "grid-cols-2 min-w-[320px]" : "min-w-[200px]",
                            )}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "flex items-center rounded-xl px-4 py-2.5 text-sm transition-colors duration-150",
                                  pathname === child.href
                                    ? "bg-brand-50/70 font-medium text-brand-700"
                                    : "text-foreground/65 hover:bg-black/[0.03] hover:text-foreground",
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-200",
                        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-brand-600 after:transition-transform after:duration-200",
                        isActive
                          ? "text-brand-700 after:scale-x-100"
                          : "text-foreground/55 hover:text-foreground after:scale-x-0 hover:after:scale-x-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <a
              href={siteConfig.phoneHref}
              className="hidden text-sm font-medium text-foreground/50 transition-colors duration-200 hover:text-foreground md:inline"
            >
              {siteConfig.phone}
            </a>
            <Button
              href={siteConfig.cta.primary.href}
              size="sm"
              className="hidden md:inline-flex"
            >
              {siteConfig.cta.primary.label}
            </Button>
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call ${siteConfig.phone}`}
              className="grid h-11 w-11 place-items-center rounded-full text-foreground/60 transition-colors duration-200 hover:bg-black/[0.04] hover:text-foreground sm:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px]">
                <path
                  d="M4.5 5.5a2 2 0 0 1 2-2h1.6a1 1 0 0 1 .98.79l.72 3.38a1 1 0 0 1-.27.94l-1.4 1.4a14 14 0 0 0 6.18 6.18l1.4-1.4a1 1 0 0 1 .94-.27l3.38.72a1 1 0 0 1 .79.98v1.6a2 2 0 0 1-2 2h-.5C9.8 19.82 4.18 14.2 4.5 5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="grid h-11 w-11 place-items-center rounded-full text-foreground/60 transition-colors duration-200 hover:bg-black/[0.04] hover:text-foreground lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                <path
                  d="M4 7h16M4 12h10M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <MobileNav isOpen={isOpen} onClose={close} />
    </header>
  );
}
