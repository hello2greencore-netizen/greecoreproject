"use client";

// Embeds the Green Core instant estimator (public/estimator.html) and keeps the
// iframe as tall as its content, so the page scrolls normally with no inner scrollbar.
import { useEffect, useRef, useState } from "react";

export default function EstimatorFrame() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    const frame = ref.current;

    // Height of the estimator's content (same origin, so we can read it directly).
    // Measuring the body, not the document, lets the frame shrink again when a
    // shorter step follows a long one (for example "Start over" after the prices).
    const measure = (reported?: number) => {
      const doc = frame?.contentDocument;
      const body = doc?.body;
      if (body && doc.defaultView) {
        const cs = doc.defaultView.getComputedStyle(body);
        const h = body.getBoundingClientRect().height + parseFloat(cs.marginTop) + parseFloat(cs.marginBottom);
        setHeight(Math.max(600, Math.ceil(h)));
      } else if (typeof reported === "number") {
        setHeight(Math.max(600, reported));
      }
    };

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      if (e.source !== frame?.contentWindow) return;
      const d = e.data as { type?: string; height?: number };
      if (d?.type === "gc-estimator-height") measure(d.height);
      if (d?.type === "gc-estimator-top" && frame) {
        // New step: bring the top of the estimator back into view.
        const top = frame.getBoundingClientRect().top + window.scrollY - 96; // clear the sticky header
        if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
      }
    };
    window.addEventListener("message", onMessage);

    // The estimator posts its first height as soon as it loads, which can be before this
    // listener exists (the iframe often finishes loading before the page hydrates).
    // Measure once it has loaded so the first step is never cut off.
    const onLoad = () => measure();
    if (frame?.contentDocument?.readyState === "complete") measure();
    frame?.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("message", onMessage);
      frame?.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src="/estimator.html"
      title="Green Core instant estimate"
      scrolling="no"
      style={{ width: "100%", height, border: 0, display: "block" }}
    />
  );
}
