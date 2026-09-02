"use client";

import { useEffect, useState } from "react";
import { site, telHref, whatsappHref } from "@/lib/site";
import { whatsappMessages } from "@/lib/content";
import { IconPhone, IconWhatsApp } from "./Icons";

export function StickyMobileCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{
        transform: shown ? "translateY(0)" : "translateY(110%)",
        transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "var(--color-ink)",
        borderTop: "1px solid var(--hairline-strong)",
      }}
      aria-hidden={!shown}
    >
      <div className="grid grid-cols-2">
        <a
          href={telHref}
          tabIndex={shown ? 0 : -1}
          className="flex min-h-[56px] items-center justify-center gap-2.5 text-[12px] uppercase tracking-[0.18em] text-ivory"
        >
          <IconPhone size={17} className="text-brass" />
          Call
        </a>
        <a
          href={whatsappHref(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          className="flex min-h-[56px] items-center justify-center gap-2.5 border-l text-[12px] uppercase tracking-[0.18em] text-ivory"
          style={{ borderColor: "var(--hairline-strong)" }}
        >
          <IconWhatsApp size={17} className="text-brass" />
          WhatsApp
        </a>
      </div>
      <span className="sr-only">{site.phone.display}</span>
    </div>
  );
}
