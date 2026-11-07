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


/**
 * A turkey that walks across the bottom of the screen once per visit,
 * stops in the middle to say hi, then waddles off. On phones it walks just
 * above the Call / Free Estimate / Book Now bar.
 */
export function WalkingTurkey() {
  const on = useThanksgivingSeason();
  const [walk, setWalk] = useState(false);
  useEffect(() => {
    if (!on) return;
    const forced = new URLSearchParams(window.location.search).get("thanksgiving") === "1";
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("gc-turkey-walked") === "1";
      window.sessionStorage.setItem("gc-turkey-walked", "1");
    } catch {
      // Storage blocked: just walk.
    }
    if (forced || !seen) setWalk(true);
  }, [on]);
  if (!on || !walk) return null;
  return (
    <div aria-hidden className="gc-walk pointer-events-none fixed left-0 z-40">
      <div className="gc-walk-bubble">Happy Thanksgiving!</div>
      <svg className="gc-walk-bird" viewBox="0 0 120 110" focusable="false">
        {/* tail fan */}
        {[
          ["#b91c1c", -62], ["#ea580c", -42], ["#f59e0b", -22], ["#b45309", -2], ["#ea580c", 18],
        ].map(([c, r], i) => (
          <ellipse key={i} cx="40" cy="34" rx="9" ry="30" fill={c as string} transform={`rotate(${r} 42 64)`} />
        ))}
        {/* legs */}
        <g className="gc-leg-1">
          <path d="M52 84 L50 103 M50 103 L44 106 M50 103 L55 106" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
        <g className="gc-leg-2">
          <path d="M64 84 L66 103 M66 103 L60 106 M66 103 L71 106" stroke="#d97706" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
        {/* body and wing */}
        <ellipse cx="58" cy="68" rx="26" ry="20" fill="#7c4a24" />
        <ellipse cx="52" cy="66" rx="15" ry="10" fill="#5f3618" transform="rotate(-12 52 66)" />
        {/* neck and head */}
        <g className="gc-walk-head">
          <path d="M74 62 Q80 52 84 42" stroke="#8b5a2b" strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="86" cy="36" r="8.5" fill="#8b5a2b" />
          <circle cx="89" cy="34" r="2.4" fill="#ffffff" />
          <circle cx="89.6" cy="34.2" r="1.3" fill="#1c1917" />
          <path d="M93.5 35 L101 38 L93.5 41 Z" fill="#f59e0b" />
          <path d="M92 40 Q95 46 91 51 Q88 46 92 40 Z" fill="#dc2626" />
        </g>
      </svg>
    </div>
  );
}

/**
 * An autumn North Bay scene (golden hills, vineyard rows, a farmhouse with
 * chimney smoke, pumpkins and hay bales) sitting right on top of the footer.
 */
export function FallScene() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  const pumpkins: [number, number, number][] = [
    [452, 178, 1], [478, 182, 0.75], [712, 180, 1.1], [742, 184, 0.7], [968, 179, 0.95],
    [196, 180, 1], [1262, 179, 1], [1290, 183, 0.75],
  ];
  const bales: [number, number][] = [[612, 166], [1006, 168], [140, 166], [1320, 167]];
  const trees: [number, number, string][] = [
    [396, 120, "#c2410c"], [858, 112, "#d97706"], [1092, 118, "#b45309"], [244, 124, "#ca8a04"], [1384, 122, "#c2410c"],
  ];
  return (
    <div aria-hidden className="pointer-events-none -mb-px h-[110px] w-full select-none sm:h-[140px] lg:h-[170px]">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" width="100%" height="100%" focusable="false" style={{ display: "block" }}>
        <defs>
          <linearGradient id="gc-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="#fff4e6" />
            <stop offset="1" stopColor="#fde2c4" />
          </linearGradient>
        </defs>
        <rect width="1440" height="200" fill="url(#gc-sky)" />
        <circle cx="1040" cy="132" r="46" fill="#fdba74" opacity="0.55" />
        {/* far hills */}
        <path d="M0 140 C 160 96 300 104 460 126 S 760 92 940 118 S 1240 96 1440 124 V200 H0 Z" fill="#e3b16f" />
        {/* near hills with vineyard rows */}
        <path d="M0 158 C 200 130 380 136 560 150 S 900 128 1100 146 S 1320 136 1440 150 V200 H0 Z" fill="#c98c4a" />
        <g stroke="#9a5b2a" strokeWidth="2.2" strokeDasharray="2 7" strokeLinecap="round" opacity="0.8" fill="none">
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M${600 + i * 38} ${170 - i * 2} Q ${780 + i * 30} ${148 - i * 1.2} ${980 + i * 26} ${160 - i * 1.6}`} />
          ))}
        </g>
        {/* trees */}
        {trees.map(([x, y, c], i) => (
          <g key={i}>
            <rect x={x - 2.5} y={y + 14} width="5" height="22" fill="#5b3a1e" />
            <circle cx={x} cy={y + 6} r="16" fill={c} />
            <circle cx={x - 11} cy={y + 13} r="11" fill={c} opacity="0.9" />
            <circle cx={x + 11} cy={y + 13} r="11" fill={c} opacity="0.85" />
          </g>
        ))}
        {/* farmhouse */}
        <g>
          <rect x="530" y="128" width="58" height="42" fill="#9a3412" />
          <path d="M522 130 L559 104 L596 130 Z" fill="#5b3a1e" />
          <rect x="572" y="102" width="9" height="20" fill="#5b3a1e" />
          <rect x="552" y="148" width="14" height="22" fill="#fde68a" />
          <rect x="538" y="136" width="10" height="9" fill="#fde68a" />
          <rect x="570" y="136" width="10" height="9" fill="#fde68a" />
          <g className="gc-smoke" fill="#ffffff">
            <circle cx="576" cy="94" r="5" />
            <circle cx="580" cy="84" r="6.5" />
            <circle cx="586" cy="72" r="8" />
          </g>
        </g>
        {/* foreground ground, same green as the footer */}
        <path d="M0 176 C 240 166 480 172 720 170 S 1200 166 1440 174 V200 H0 Z" fill="#123f25" />
        {/* hay bales */}
        {bales.map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width="42" height="20" rx="3" fill="#e2b45a" />
            <path d={`M${x + 4} ${y + 7} H${x + 38} M${x + 4} ${y + 13} H${x + 38}`} stroke="#b8862f" strokeWidth="1.5" />
          </g>
        ))}
        {/* pumpkins */}
        {pumpkins.map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <ellipse cx="-7" cy="0" rx="9" ry="10" fill="#ea580c" />
            <ellipse cx="7" cy="0" rx="9" ry="10" fill="#ea580c" />
            <ellipse cx="0" cy="0" rx="9" ry="11" fill="#f97316" />
            <path d="M0 -10 Q1 -15 4 -16" stroke="#3f6212" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** A pilgrim hat that sits on Corey's head (the chat helper) in November. */
export function PilgrimHat() {
  const on = useThanksgivingSeason();
  if (!on) return null;
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 44"
      focusable="false"
      className="pointer-events-none absolute z-10"
      style={{ width: "40%", left: "47%", top: "-10%", transform: "translateX(-50%) rotate(-8deg)" }}
    >
      <path d="M15 5 H45 L49 33 H11 Z" fill="#262626" />
      <path d="M12 26 H48 L49 33 H11 Z" fill="#3f3f3f" />
      <rect x="25" y="25" width="10" height="9" rx="1" fill="none" stroke="#eab308" strokeWidth="2.4" />
      <ellipse cx="30" cy="35" rx="29" ry="6" fill="#171717" />
    </svg>
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

      .gc-walk { bottom: calc(84px + env(safe-area-inset-bottom)); animation: gc-walk 16s linear 1.5s both; }
      @media (min-width: 1024px) { .gc-walk { bottom: 0; } }
      .gc-walk-bird { display: block; width: 84px; height: 77px; animation: gc-bob 0.36s ease-in-out infinite alternate; }
      @media (min-width: 1024px) { .gc-walk-bird { width: 112px; height: 103px; } }
      @keyframes gc-walk {
        0% { transform: translateX(-140px); }
        42% { transform: translateX(calc(50vw - 56px)); }
        62% { transform: translateX(calc(50vw - 56px)); }
        100% { transform: translateX(calc(100vw + 20px)); }
      }
      @keyframes gc-bob { from { transform: translateY(0); } to { transform: translateY(-2px); } }
      .gc-leg-1, .gc-leg-2 { transform-box: fill-box; transform-origin: 50% 0%; }
      .gc-leg-1 { animation: gc-step 0.36s ease-in-out infinite alternate; }
      .gc-leg-2 { animation: gc-step 0.36s ease-in-out infinite alternate-reverse; }
      @keyframes gc-step { from { transform: rotate(-16deg); } to { transform: rotate(16deg); } }
      .gc-walk-head { transform-box: fill-box; transform-origin: 20% 100%; animation: gc-peck 16s linear 1.5s both; }
      @keyframes gc-peck { 0%, 46% { transform: rotate(0); } 49% { transform: rotate(10deg); } 52% { transform: rotate(-6deg); } 55% { transform: rotate(10deg); } 58%, 100% { transform: rotate(0); } }
      .gc-walk-bubble {
        position: absolute; bottom: 92%; left: 38%; white-space: nowrap; margin-bottom: 2px;
        background: #fff; color: #7c2d12; font: 700 13px/1 var(--font-display), system-ui, sans-serif;
        padding: 8px 12px; border-radius: 999px; box-shadow: 0 4px 14px rgba(0,0,0,.12); border: 1px solid #fed7aa;
        animation: gc-walk-bubble 16s linear 1.5s both; display: none;
      }
      @media (min-width: 1024px) { .gc-walk-bubble { display: block; } }
      @keyframes gc-walk-bubble { 0%, 43% { opacity: 0; transform: translateY(6px); } 46%, 60% { opacity: 1; transform: none; } 63%, 100% { opacity: 0; } }

      .gc-smoke circle { animation: gc-smoke 3.6s ease-out infinite; transform-box: fill-box; transform-origin: center; }
      .gc-smoke circle:nth-child(2) { animation-delay: 1.2s; }
      .gc-smoke circle:nth-child(3) { animation-delay: 2.4s; }
      @keyframes gc-smoke { 0% { opacity: 0; transform: translateY(8px) scale(.6); } 30% { opacity: .75; } 100% { opacity: 0; transform: translateY(-14px) scale(1.3); } }

      @media (prefers-reduced-motion: reduce) {
        .gc-falling, .gc-walk { display: none; }
        .gc-sway, .gc-smoke circle { animation: none; }
      }
    `}</style>
  );
}
