"use client";

import { useEffect, useState } from "react";
import { nav, ctaLabels } from "@/lib/content";
import { site, telHref } from "@/lib/site";
import { IconClose, IconMenu } from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="on-dark fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out"
      style={{
        backgroundColor: scrolled || menuOpen ? "var(--color-ink)" : "transparent",
        borderBottom: `1px solid ${
          scrolled && !menuOpen ? "var(--hairline-strong)" : "transparent"
        }`,
      }}
    >
      <div className="container-hfm flex h-[72px] items-center justify-between gap-8 md:h-[88px]">
        <a href="#top" className="shrink-0 py-2 leading-none" aria-label={`${site.name}, home`}>
          <span
            className="block font-[family-name:var(--font-display)] text-[19px] tracking-[0.16em] text-ivory md:text-[22px]"
            style={{ fontWeight: 400 }}
          >
            HEAVEN
          </span>
          <span className="mt-1 block text-[8.5px] uppercase tracking-[0.34em] text-brass md:text-[9px]">
            Furniture Mart
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] uppercase tracking-[0.18em] text-ivory/78 transition-colors duration-300 hover:text-brass-lift"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href={telHref}
            className="tnum text-[13px] tracking-[0.06em] text-ivory/78 transition-colors duration-300 hover:text-brass-lift"
          >
            {site.phone.display}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center border border-brass px-6 text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-brass hover:text-ink"
          >
            {ctaLabels.bookShort}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
        >
          {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 bottom-0 top-[72px] bg-ink lg:hidden"
      >
        <div className="container-hfm flex h-full flex-col justify-between py-12">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b py-6 font-[family-name:var(--font-display)] text-[2rem] font-light tracking-[-0.02em] text-ivory"
                style={{ borderColor: "var(--hairline)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-h-[52px] items-center justify-center border border-brass px-6 text-[12px] uppercase tracking-[0.18em] text-ivory"
            >
              {ctaLabels.book}
            </a>
            <a href={telHref} className="tnum text-[15px] text-ivory/72">
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
