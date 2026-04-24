"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-white/90 backdrop-blur">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition",
                        isActive
                          ? "bg-brand-50 text-brand-800"
                          : "text-foreground/80 hover:text-foreground hover:bg-subtle",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              className="hidden text-sm font-semibold text-brand-800 hover:underline md:inline"
            >
              {siteConfig.phone}
            </a>
            <Button
              href={siteConfig.cta.primary.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {siteConfig.cta.primary.label}
            </Button>
            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="h-5 w-5"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
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
