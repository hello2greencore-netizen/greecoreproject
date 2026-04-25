"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.5;
const VIEWPORT = { once: true, amount: 0.18, margin: "0px 0px -8% 0px" } as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

type Tag = "div" | "section" | "li" | "ul" | "article" | "span" | "header";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  /** "scroll" triggers on viewport entry (default); "enter" triggers on mount. */
  mode?: "scroll" | "enter";
} & Pick<ComponentProps<"div">, "id" | "role" | "aria-label">;

export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  mode = "scroll",
  ...rest
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  const transition = { duration: DURATION, ease: EASE, delay };

  if (mode === "enter") {
    return (
      <Comp
        className={className}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        {...rest}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={itemVariants}
      transition={transition}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type GroupProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  delay?: number;
  mode?: "scroll" | "enter";
} & Pick<ComponentProps<"div">, "id" | "role" | "aria-label">;

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.07,
  delay = 0.04,
  mode = "scroll",
  ...rest
}: GroupProps) {
  const Comp = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  if (mode === "enter") {
    return (
      <Comp
        className={className}
        initial="hidden"
        animate="show"
        variants={variants}
        {...rest}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
};

export function RevealItem({ children, className, as = "div" }: ItemProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}
