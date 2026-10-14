import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Use "dark" on dark green backgrounds. */
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("text-sm font-semibold uppercase tracking-[0.14em]", dark ? "text-brand-300" : "text-brand-700")}>
          {eyebrow}
        </p>
      )}
      <Tag className={cn("heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-foreground")}>
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-white/75" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
