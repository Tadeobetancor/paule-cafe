"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useCssVarHeight } from "@/lib/useCssVarHeight";
import { menuCategories } from "@/data/menu";

const tabIds = menuCategories.map((c) => `cat-${c.id}`);

export default function CategoryTabs() {
  const activeId = useScrollSpy(tabIds, 150);
  const listRef = useCssVarHeight<HTMLDivElement>("--tabs-h");
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const check = () => {
      setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 8);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sticky top-[var(--navbar-h)] z-30 w-full border-b border-line bg-cream/95 px-5 backdrop-blur-sm sm:px-8">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div ref={listRef} className="no-scrollbar flex gap-2 overflow-x-auto pt-3 pb-1">
          {menuCategories.map((category) => {
            const id = `cat-${category.id}`;
            const active = activeId === id;
            const isCombos = category.id === "combos";
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? "border-terracotta bg-terracotta text-cream"
                    : isCombos
                      ? "border-terracotta/45 bg-terracotta/10 text-terracotta hover:border-terracotta/70 hover:bg-terracotta/15"
                      : "border-line bg-cream-soft text-charcoal-soft hover:border-terracotta/40 hover:text-espresso"
                }`}
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.tabLabel}
              </a>
            );
          })}
        </div>

        {/* Sin sm:hidden a propósito: con 10 categorías la lista desborda
            incluso en desktop ancho (1920px), así que el aviso de "hay más"
            tiene que verse en cualquier tamaño, no sólo en mobile. */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
            canScrollRight ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <p className="pb-1.5 text-center text-[0.68rem] font-medium text-charcoal-soft/70">
              Deslizá para ver más categorías{" "}
              <span className="inline-block animate-[nudge-x_1.4s_ease-in-out_infinite]" aria-hidden="true">
                ›
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
