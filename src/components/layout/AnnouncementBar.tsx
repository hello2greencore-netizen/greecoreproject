import Link from "next/link";
import { getRunningSpecials } from "@/data/specials";

/** Thin strip above the header while a real special is running. Hidden when there are none. */
export function AnnouncementBar() {
  const live = getRunningSpecials().filter((s) => !s.sample);
  if (!live.length) return null;
  const lead = live[0];
  const more = live.length - 1;
  return (
    <div className="bg-brand-900 text-white">
      <Link
        href="/specials"
        className="group mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-[13px] font-medium sm:text-sm"
      >
        <span className="shrink-0 rounded-full bg-brand-200 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-900">Limited time</span>
        <span className="truncate sm:hidden">{more ? `${live.length} specials running now` : lead.title}</span>
        <span className="hidden truncate sm:inline">
          {lead.title}
          {more ? ` + ${more} more special${more > 1 ? "s" : ""}` : ""}
        </span>
        <span className="shrink-0 font-bold text-brand-200 group-hover:underline">
          <span className="sm:hidden">See them →</span>
          <span className="hidden sm:inline">See specials →</span>
        </span>
      </Link>
    </div>
  );
}
