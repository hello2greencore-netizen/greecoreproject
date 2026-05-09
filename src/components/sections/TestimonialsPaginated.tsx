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
