"use client";

// Meta Pixel for our Meta ads partner (Knauer AI, set up Nov 28, 2026). Renders nothing.
// - Loads only when the visitor allows marketing cookies in the Cookiebot banner.
// - PageView on every page, Lead when the estimator shows prices, Schedule when a call or visit is booked.
// - The estimate number is the event ID, so Meta never counts the same lead or booking twice.
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PIXEL_ID = "983701097769356";

type FbqFn = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: FbqFn;
  loaded: boolean;
  version: string;
};
type PixelWindow = Window & {
  fbq?: FbqFn;
  _fbq?: FbqFn;
  Cookiebot?: { consent?: { marketing?: boolean } };
};
type EstimatorMessage = { type?: string; value?: number; currency?: string; estimate?: string };

// Meta's standard base code, written out so it only runs after consent.
function loadPixel(w: PixelWindow) {
  if (w.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
    else fbq.queue.push(args);
  } as FbqFn;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  w.fbq = fbq;
  if (!w._fbq) w._fbq = fbq;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init", PIXEL_ID);
}

function track(w: PixelWindow, event: string, params: Record<string, unknown>, eventID?: string) {
  if (!w.fbq) return;
  if (eventID) w.fbq("track", event, params, { eventID });
  else w.fbq("track", event, params);
}

export function MetaPixel() {
  const pathname = usePathname();
  const ready = useRef(false);
  const firstPath = useRef(true);
  const lastEstimate = useRef("");

  useEffect(() => {
    const w = window as PixelWindow;
    const start = () => {
      if (ready.current || !w.Cookiebot?.consent?.marketing) return;
      ready.current = true;
      loadPixel(w);
      w.fbq?.("track", "PageView");
    };
    // The estimator (an iframe on our own site) posts these when prices show and when a call or visit is booked.
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const d = (e.data || {}) as EstimatorMessage;
      if (d.type === "gc-estimator-lead") {
        lastEstimate.current = d.estimate || "";
        if (ready.current) track(w, "Lead", { value: d.value || 0, currency: d.currency || "USD" }, d.estimate);
      }
      if (d.type === "gc-estimator-booked" && ready.current) {
        track(w, "Schedule", {}, lastEstimate.current || undefined);
      }
    };
    start();
    const consentEvents = ["CookiebotOnLoad", "CookiebotOnConsentReady", "CookiebotOnAccept"];
    consentEvents.forEach((name) => window.addEventListener(name, start));
    window.addEventListener("message", onMessage);
    return () => {
      consentEvents.forEach((name) => window.removeEventListener(name, start));
      window.removeEventListener("message", onMessage);
    };
  }, []);

  // PageView when moving between pages without a full reload (the first page is counted above).
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (ready.current) (window as PixelWindow).fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
