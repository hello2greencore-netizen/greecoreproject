"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size: "default" | "compact";
};

export function HeroContent({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  size,
}: Props) {
  return (
    <motion.div
      className="max-w-2xl"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {eyebrow && (
        <motion.p
          variants={item}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        variants={item}
        className={cn(
          "font-display font-bold leading-[1.08] tracking-tight text-white",
          size === "default"
            ? "text-4xl sm:text-5xl lg:text-[3.75rem]"
            : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base text-white/70 sm:text-lg sm:leading-relaxed"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={item}
        className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3"
      >
        <Link
          href={primaryCta.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-brand-800 shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:bg-brand-50 active:scale-[0.97] sm:px-6 sm:py-3.5 sm:text-base"
        >
          <span className="sm:hidden">Get Estimate</span>
          <span className="hidden sm:inline">{primaryCta.label}</span>
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:scale-[0.97] sm:px-6 sm:py-3.5 sm:text-base"
          >
            {secondaryCta.label}
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}
