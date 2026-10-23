import Link from "next/link";
import { type Special, formatEnds } from "@/data/specials";

export function SpecialCard({ special }: { special: Special }) {
  return (
    <Link
      href={`/specials/${special.slug}`}
      className="group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3 bg-brand-900 px-6 py-5 text-white">
        <span className="font-display text-3xl font-extrabold leading-none text-brand-200">{special.offer}</span>
        {special.sample ? (
          <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-950">Sample</span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pb-6">
        <h3 className="font-display text-xl font-bold leading-snug text-foreground">{special.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{special.summary}</p>
        <span className="mt-auto pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Ends {formatEnds(special.ends)}</span>
        <span className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-700">
          See the details <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
