import Link from "next/link";
import { siteConfig } from "@/data/site";

export function StickyMobileCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 lg:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-2xl items-stretch gap-2 border-t border-border bg-white/95 px-3 py-2 shadow-[0_-4px_16px_rgba(15,27,20,0.06)] backdrop-blur">
        <Link
          href={siteConfig.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800 active:bg-brand-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="h-4 w-4"
          >
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
        <Link
          href={siteConfig.cta.primary.href}
          className="flex flex-[1.4] items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white active:bg-brand-700"
        >
          {siteConfig.cta.primary.label}
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white/95" />
    </div>
  );
}
