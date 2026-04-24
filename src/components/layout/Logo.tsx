import Link from "next/link";
import { siteConfig } from "@/data/site";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: Props) {
  const colorBadge = tone === "dark" ? "bg-brand-600 text-white" : "bg-white text-brand-700";
  const colorText = tone === "dark" ? "text-foreground" : "text-white";
  const colorSub = tone === "dark" ? "text-muted" : "text-white/80";
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <span
        aria-hidden
        className={`grid h-9 w-9 place-items-center rounded-xl ${colorBadge} font-bold`}
      >
        GC
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-base font-bold tracking-tight sm:text-lg ${colorText}`}>
          Green Core
        </span>
        <span className={`block text-[11px] font-medium uppercase tracking-[0.16em] ${colorSub}`}>
          Heating &amp; Air
        </span>
      </span>
    </Link>
  );
}
