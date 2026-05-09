"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import type { Testimonial } from "@/types";

const PAGE_SIZE = 6;

export function TestimonialsPaginated({ items }: { items: Testimonial[] }) {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, safePage]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [safePage]);

  return (
    <div ref={gridRef}>
      <ul className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((t) => (
          <li key={t.id} className="h-full">
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          page={safePage}
          totalPages={totalPages}
          onChange={setPage}
        />
      )}

      <GoogleReviewsLink />
    </div>
  );
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=827c5b7b45126b9a&sxsrf=ANbL-n5f8-_8TkP87an98izeSwjh-QA6rQ:1778336030666&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUBUgBhVIEpknicrp7h87jSTR7MFDQufTQ6hZq7QNX6Xe3PL3CPzW_v2akHUH84Y9x-b3I9xpgdzqeAJpUmw_7bHoaLZi7XS2FW_k3dmt77uStVNww%3D%3D&q=Green+Core+Heating+%26+Air+Reviews&sa=X&ved=2ahUKEwiRsZj7sayUAxWQ3TgGHTKjI1QQ0bkNegQIMxAH";

function GoogleReviewsLink() {
  return (
    <div className="mt-10 flex justify-center">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-md sm:text-base"
      >
        <svg
          aria-hidden
          viewBox="0 0 48 48"
          className="h-5 w-5 flex-shrink-0"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#EA4335"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
        </svg>
        <span>Read more reviews on Google</span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (n: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Reviews pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="inline-flex min-h-10 items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        Previous
      </button>
      <ul className="flex flex-wrap items-center gap-1.5">
        {pages.map((p) => {
          const active = p === page;
          return (
            <li key={p}>
              <button
                type="button"
                onClick={() => onChange(p)}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                    : "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-50"
                }
              >
                {p}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="inline-flex min-h-10 items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        Next
      </button>
    </nav>
  );
}
