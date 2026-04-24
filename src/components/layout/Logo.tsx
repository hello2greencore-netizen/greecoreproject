import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: Props) {
  const colorText = tone === "light" ? "text-white" : "text-foreground";
  const colorSub = tone === "light" ? "text-white/80" : "text-muted";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <Image
        src="/images/header/greencorelogobg.png"
        alt=""
        width={44}
        height={44}
        className="rounded-xl"
        priority
      />
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
