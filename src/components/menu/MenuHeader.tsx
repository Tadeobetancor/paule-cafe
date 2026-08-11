"use client";

import Link from "next/link";
import Image from "next/image";
import { useCssVarHeight } from "@/lib/useCssVarHeight";

/**
 * Header mínimo de /menu: solo "volver" + marca. Sin links de navegación
 * ni toggle transparente — la carta es una experiencia aparte, enfocada.
 * Usa el mismo --navbar-h que la home para que scroll-margin-top y el
 * sticky de CategoryTabs sigan funcionando sin tocar globals.css.
 */
export default function MenuHeader() {
  const headerRef = useCssVarHeight<HTMLElement>("--navbar-h");

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm [transform:translateZ(0)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-charcoal-soft transition-colors hover:text-terracotta"
        >
          <span aria-hidden="true">←</span> Volver a Paulé Café
        </Link>
        <Image
          src="/paule-logo-green.png"
          alt="Paulé Café"
          width={110}
          height={34}
          priority
          className="h-7 w-auto shrink-0"
        />
      </div>
    </header>
  );
}
