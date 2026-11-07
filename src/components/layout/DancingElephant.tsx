/**
 * A purple elephant dancing with a pink balloon, shown in the mobile header.
 * Decorative only: hidden from screen readers, and it holds still for
 * visitors who have "reduce motion" turned on.
 */
export function DancingElephant({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`gc-ele inline-flex h-[52px] shrink-0 items-end pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 60 60" width="52" height="52" focusable="false">
        {/* Balloon and its string */}
        <g className="gc-ele-balloon">
          <path d="M45 23 C43 26 48 28 47 31" fill="none" stroke="#9d7bb0" strokeWidth="1" strokeLinecap="round" />
          <ellipse cx="45" cy="12" rx="8" ry="10" fill="#f472b6" />
          <ellipse cx="42" cy="8" rx="2" ry="3" fill="#fbcfe8" opacity="0.8" />
          <path d="M43.5 22 L46.5 22 L45 24.5 Z" fill="#ec4899" />
        </g>

        {/* Elephant */}
        <g className="gc-ele-body">
          {/* tail */}
          <path d="M11 40 Q7 42 8 46" fill="none" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" />
          {/* back legs */}
          <rect className="gc-ele-leg-a" x="13" y="45" width="5" height="10" rx="2" fill="#7c3aed" />
          <rect className="gc-ele-leg-b" x="19.5" y="45" width="5" height="10" rx="2" fill="#7c3aed" />
          {/* front legs */}
          <rect className="gc-ele-leg-b" x="27" y="45" width="5" height="10" rx="2" fill="#7c3aed" />
          <rect className="gc-ele-leg-a" x="33" y="45" width="5" height="10" rx="2" fill="#7c3aed" />
          {/* body */}
          <ellipse cx="25" cy="41" rx="15" ry="10" fill="#8b5cf6" />
          {/* head */}
          <circle cx="37" cy="35" r="8" fill="#8b5cf6" />
          {/* trunk curled up, holding the string */}
          <path d="M43.5 36 Q50 40 50 34 Q50 30.5 47.5 31" fill="none" stroke="#8b5cf6" strokeWidth="3.4" strokeLinecap="round" />
          {/* tusk */}
          <path d="M42.5 39 Q44.5 41.5 46.5 40.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          {/* ear */}
          <path d="M34 28 C26 26 24 36 27 41 C29 44 33 43 34.5 40 Z" fill="#a78bfa" stroke="#7c3aed" strokeWidth="0.8" strokeLinejoin="round" />
          {/* eye and cheek */}
          <circle cx="39.5" cy="33" r="1.3" fill="#1f1235" />
          <circle cx="40" cy="37.5" r="1.4" fill="#f9a8d4" opacity="0.8" />
        </g>
      </svg>
      <style>{`
        .gc-ele svg { overflow: visible; }
        .gc-ele .gc-ele-body { transform-box: fill-box; transform-origin: 50% 100%; animation: gc-ele-dance 1.2s ease-in-out infinite; }
        .gc-ele .gc-ele-balloon { transform-box: fill-box; transform-origin: 50% 100%; animation: gc-ele-float 2.4s ease-in-out infinite; }
        .gc-ele .gc-ele-leg-a, .gc-ele .gc-ele-leg-b { transform-box: fill-box; transform-origin: 50% 0%; }
        .gc-ele .gc-ele-leg-a { animation: gc-ele-step 0.6s ease-in-out infinite; }
        .gc-ele .gc-ele-leg-b { animation: gc-ele-step 0.6s ease-in-out infinite; animation-delay: -0.3s; }
        @keyframes gc-ele-dance {
          0%, 100% { transform: rotate(-7deg) translateY(0); }
          25% { transform: rotate(0deg) translateY(-3px); }
          50% { transform: rotate(7deg) translateY(0); }
          75% { transform: rotate(0deg) translateY(-3px); }
        }
        @keyframes gc-ele-float {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-3px) rotate(5deg); }
        }
        @keyframes gc-ele-step {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gc-ele .gc-ele-body, .gc-ele .gc-ele-balloon, .gc-ele .gc-ele-leg-a, .gc-ele .gc-ele-leg-b { animation: none; }
        }
      `}</style>
    </span>
  );
}
