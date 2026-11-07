"use client";

import { useEffect, useState } from "react";

/**
 * Thanksgiving decorations. Purely visual: everything is aria-hidden,
 * positioned over the page (no layout shift), and changes no text, headings,
 * links, or page data, so it has no effect on search rankings.
 *
 * Shows only in November (Pacific time) and switches itself off on Dec 1.
 * `?thanksgiving=1` in the URL forces it on for previews.
 */
export function useThanksgivingSeason() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).get("thanksgiving") === "1";
    const month = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", month: "numeric" }).format(new Date());
    setOn(forced || month === "11");
  }, []);
  return on;
}

const LEAF_PATHS = {
  maple:
    "M12 1l1.6 4.2 3-1.7-.8 4.4 4.2-.9-2.2 3.4 3.2 1.6-4 1.5.9 3.5-3.6-1.6L13 21h-2l-1.3-5.6-3.6 1.6.9-3.5-4-1.5 3.2-1.6L4 6l4.2.9-.8-4.4 3 1.7z",
  oak: "M12 2c1.4 1.2 1.6 2.6.9 3.8 1.6-.6 3 0 3.4 1.4-1.1.6-1.6 1.6-1.2 2.6 1.4-.4 2.6.4 2.6 1.8-1.4.4-2.2 1.4-2 2.6 1-.2 2 .6 1.8 1.8-2 .8-4.4.4-5.9-.8V22h-1.2v-6.8c-1.5 1.2-3.9 1.6-5.9.8-.2-1.2.8-2 1.8-1.8.2-1.2-.6-2.2-2-2.6 0-1.4 1.2-2.2 2.6-1.8.4-1-.1-2-1.2-2.6.4-1.4 1.8-2 3.4-1.4C10.4 4.6 10.6 3.2 12 2z",
};
const COLORS = ["#c2410c", "#d97706", "#b45309", "#a16207", "#9a3412", "#ca8a04"];

function Leaf({ kind, color, size, style, className }: { kind: keyof typeof LEAF_PATHS; color: string; size: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} className={className} focusable="false">
      <path d={LEAF_PATHS[kind]} fill={color} />
    </svg>
  );
}

/** A string of fall leaves hanging just under the header bar. */
export function LeafGarland() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  const leaves = Array.from({ length: 30 });
  return (
    <div aria-hidden className="gc-garland pointer-events-none absolute inset-x-0 top-full h-8 overflow-hidden">
      <svg className="absolute inset-x-0 top-0 h-3 w-full" preserveAspectRatio="none" viewBox="0 0 100 6" focusable="false">
        <path d="M0 1 Q 6.25 5 12.5 1 T 25 1 T 37.5 1 T 50 1 T 62.5 1 T 75 1 T 87.5 1 T 100 1" fill="none" stroke="#8a6a4a" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="flex h-full justify-between px-1">
        {leaves.map((_, i) => (
          <Leaf
            key={i}
            kind={i % 3 === 0 ? "oak" : "maple"}
            color={COLORS[i % COLORS.length]}
            size={i % 2 ? 22 : 19}
            className="gc-garland-leaf shrink-0"
            style={{ transform: `rotate(${(i * 47) % 70 - 35}deg)`, marginTop: i % 4 === 0 ? 4 : i % 2 ? 1 : 6 }}
          />
        ))}
      </div>
    </div>
  );
}

/** A few leaves that drift down once when the page loads, then disappear. */
export function FallingLeaves() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  const leaves = [
    { left: 6, delay: 0.2, dur: 8, size: 30, kind: "maple" as const },
    { left: 18, delay: 1.6, dur: 9.5, size: 24, kind: "oak" as const },
    { left: 31, delay: 0.8, dur: 10, size: 28, kind: "maple" as const },
    { left: 47, delay: 2.4, dur: 8.5, size: 22, kind: "oak" as const },
    { left: 59, delay: 0.4, dur: 9, size: 32, kind: "maple" as const },
    { left: 72, delay: 1.9, dur: 10.5, size: 25, kind: "maple" as const },
    { left: 84, delay: 1.1, dur: 8.8, size: 27, kind: "oak" as const },
    { left: 94, delay: 2.9, dur: 9.6, size: 23, kind: "maple" as const },
  ];
  return (
    <div aria-hidden className="gc-falling pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {leaves.map((l, i) => (
        <span
          key={i}
          className="gc-fall absolute -top-10"
          style={{ left: `${l.left}%`, animationDelay: `${l.delay}s`, animationDuration: `${l.dur}s` }}
        >
          <Leaf kind={l.kind} color={COLORS[i % COLORS.length]} size={l.size} className="gc-sway" />
        </span>
      ))}
    </div>
  );
}

/** A small turkey peeking up from the bottom-left corner on larger screens. */
export function PeekingTurkey() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  return (
    <div aria-hidden className="gc-turkey pointer-events-none fixed bottom-0 left-5 z-40 hidden lg:block">
      <div className="gc-turkey-bubble">Happy Thanksgiving!</div>
      <svg viewBox="0 0 120 100" width="132" height="110" focusable="false" style={{ display: "block" }}>
        {/* tail feathers */}
        <g className="gc-turkey-tail">
          {[
            ["#b91c1c", -60], ["#ea580c", -40], ["#f59e0b", -20], ["#b45309", 0],
            ["#f59e0b", 20], ["#ea580c", 40], ["#b91c1c", 60],
          ].map(([c, r], i) => (
            <ellipse key={i} cx="60" cy="38" rx="11" ry="34" fill={c as string} transform={`rotate(${r} 60 72)`} />
          ))}
        </g>
        {/* body */}
        <ellipse cx="60" cy="76" rx="26" ry="24" fill="#7c4a24" />
        {/* wing */}
        <ellipse className="gc-turkey-wing" cx="44" cy="78" rx="9" ry="14" fill="#5f3618" />
        <ellipse cx="76" cy="78" rx="9" ry="14" fill="#5f3618" />
        {/* head */}
        <circle cx="60" cy="50" r="13" fill="#8b5a2b" />
        <circle cx="55" cy="47" r="2.6" fill="#ffffff" />
        <circle cx="65" cy="47" r="2.6" fill="#ffffff" />
        <circle cx="55.5" cy="47.5" r="1.4" fill="#1c1917" />
        <circle cx="65.5" cy="47.5" r="1.4" fill="#1c1917" />
        <path d="M57 52 L63 52 L60 57 Z" fill="#f59e0b" />
        <path d="M60 56 Q57 62 59.5 65 Q62 62 60 56 Z" fill="#dc2626" />
      </svg>
    </div>
  );
}

/** Shared styles for all of the decorations above. */
export function ThanksgivingStyles() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  return (
    <style>{`
      .gc-fall { animation-name: gc-fall; animation-timing-function: linear; animation-iteration-count: 1; animation-fill-mode: both; }
      .gc-sway { animation: gc-sway 2.2s ease-in-out infinite alternate; }
      @keyframes gc-fall {
        0% { transform: translateY(0); opacity: 0; }
        8% { opacity: .9; }
        85% { opacity: .9; }
        100% { transform: translateY(105vh); opacity: 0; }
      }
      @keyframes gc-sway { from { transform: translateX(-14px) rotate(-25deg); } to { transform: translateX(14px) rotate(25deg); } }

      .gc-turkey { animation: gc-peek 1s ease-out 1.2s both; }
      @keyframes gc-peek { from { transform: translateY(100%); } to { transform: translateY(4px); } }
      .gc-turkey-wing { transform-box: fill-box; transform-origin: 70% 20%; animation: gc-wave 0.9s ease-in-out 2.2s 4 alternate; }
      @keyframes gc-wave { from { transform: rotate(0deg); } to { transform: rotate(-38deg); } }
      .gc-turkey-bubble {
        position: absolute; bottom: 70px; left: 92px; white-space: nowrap;
        background: #fff; color: #7c2d12; font: 700 13px/1 var(--font-display), system-ui, sans-serif;
        padding: 8px 12px; border-radius: 999px; box-shadow: 0 4px 14px rgba(0,0,0,.12); border: 1px solid #fed7aa;
        animation: gc-bubble 6s ease 2s both;
      }
      @keyframes gc-bubble { 0% { opacity: 0; transform: translateY(6px); } 10%, 85% { opacity: 1; transform: none; } 100% { opacity: 0; } }

      @media (prefers-reduced-motion: reduce) {
        .gc-falling { display: none; }
        .gc-turkey, .gc-turkey-wing, .gc-turkey-bubble, .gc-sway { animation: none; }
      }
    `}</style>
  );
}
