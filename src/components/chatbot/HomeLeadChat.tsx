"use client";

import { useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * LeadConnector chat widget, shown on the homepage only (it replaces Corey there).
 * The script loads the first time someone lands on the homepage. Because the
 * site switches pages without a full reload, the widget would otherwise follow
 * visitors to other pages, so it's hidden everywhere except "/".
 */
export function HomeLeadChat() {
  const isHome = usePathname() === "/";
  const [load, setLoad] = useState(isHome);
  if (isHome && !load) setLoad(true);

  return (
    <>
      {load && (
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6afb98c5f31f8c02e6ac56bc"
          strategy="afterInteractive"
        />
      )}
      {!isHome && <style>{"chat-widget{display:none !important}"}</style>}
    </>
  );
}
