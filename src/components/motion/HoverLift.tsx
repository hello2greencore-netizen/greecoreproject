"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & {
  children: ReactNode;
  /** Disable hover animation (e.g., for touch-only contexts). */
  disabled?: boolean;
};

/**
 * Hover-only lift wrapper. Uses transform/opacity for performance and
 * whileHover so it only fires on pointers (no jitter on touch devices).
 */
export function HoverLift({ children, disabled, ...rest }: Props) {
  return (
    <motion.div
      whileHover={disabled ? undefined : { y: -3 }}
      whileTap={disabled ? undefined : { y: 0, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.6 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
