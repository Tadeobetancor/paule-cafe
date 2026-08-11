"use client";

import { useCssVarHeight } from "@/lib/useCssVarHeight";
import { business } from "@/data/business";

export default function MobileMenuBar() {
  const barRef = useCssVarHeight<HTMLDivElement>("--mobilebar-h");

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream-soft/95 px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] [transform:translateZ(0)] backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        <a
          href={business.map.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-espresso/70 active:scale-95"
        >
          <span aria-hidden="true" className="text-lg">📍</span>
          <span className="text-[0.65rem] font-medium">Cómo llegar</span>
        </a>

        <a
          href="#menu"
          className="-mt-8 flex flex-col items-center gap-0.5 rounded-full bg-terracotta px-8 py-4 text-cream shadow-[0_12px_28px_-6px_rgba(20,67,59,0.65)] active:scale-95"
        >
          <span className="flex items-center gap-2 text-base font-semibold">
            <span aria-hidden="true">☕</span> Ver Menú
          </span>
        </a>

        <a
          href="#ubicacion"
          className="flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-espresso/70 active:scale-95"
        >
          <span aria-hidden="true" className="text-lg">🕗</span>
          <span className="text-[0.65rem] font-medium">Horarios</span>
        </a>
      </div>
    </div>
  );
}
