import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "li";
};

export function Card({ className, children, as: Tag = "div" }: Props) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-white p-5 shadow-[0_1px_2px_rgba(15,27,20,0.04)] transition hover:shadow-md sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
