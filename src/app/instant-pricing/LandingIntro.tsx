"use client";

// The ad landing page intro (headline and trust points). Once the customer sees their prices,
// it hides so the screen is only the estimator. It comes back if they start over.
import { useEffect, useState } from "react";

export default function LandingIntro({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onStep = (e: Event) => {
      const step = (e as CustomEvent<string>).detail;
      setHidden((was) => {
        const now = step === "result";
        if (now && !was) requestAnimationFrame(() => window.scrollTo({ top: 0 }));
        return now;
      });
    };
    window.addEventListener("gc-estimator-step", onStep);
    return () => window.removeEventListener("gc-estimator-step", onStep);
  }, []);

  if (hidden) return null;
  return <>{children}</>;
}
