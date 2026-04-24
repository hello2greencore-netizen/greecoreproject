import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: Props) {
  const colorText = tone === "light" ? "text-white" : "text-foreground";
  const colorSub = tone === "light" ? "text-white/75" : "text-muted";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src="/images/header/greencorelogobg.png"
        alt=""
        width={44}
        height={44}
        priority
        className="h-10 w-10 flex-shrink-0 rounded-xl transition-transform duration-200 group-hover:scale-[1.04] sm:h-11 sm:w-11"
      />
      <span className="flex flex-col leading-[1.05]">
        <span
          className={cn(
            "font-display text-[13px] font-bold tracking-tight sm:text-[15px]",
            colorText,
          )}
        >
          Green Core
        </span>
        <span
          className={cn(
            "text-[9px] font-medium uppercase tracking-[0.18em] sm:text-[10px]",
            colorSub,
          )}
        >
          Heating &amp; Air
        </span>
      </span>
    </Link>
  );
}
