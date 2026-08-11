"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryPreviewModal from "@/components/menu/CategoryPreviewModal";
import { menuCategories, type MenuCategory } from "@/data/menu";

/**
 * Reemplaza el viejo QuickCategories: en vez de saltar a un ancla dentro de
 * la misma página, cada card abre un preview rápido (CategoryPreviewModal)
 * y desde ahí se puede ir a /menu. La home ya no incluye la carta completa.
 */
export default function CategoryGrid() {
  const [previewCategory, setPreviewCategory] = useState<MenuCategory | null>(null);

  const combos = menuCategories.find((c) => c.id === "combos");
  const rest = menuCategories.filter((c) => c.id !== "combos");

  return (
    <section id="categorias" className="mx-auto max-w-[var(--container-max)] px-5 py-16 sm:px-8 sm:py-24 lg:py-28 xl:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="La carta, a un vistazo"
          title="¿Qué te tentó hoy?"
          subtitle="Elegí una categoría y mirá algunos productos y precios, o pasá directo a la carta completa."
        />
      </Reveal>

      <div className="mt-8 sm:mt-10">
        {combos && (
          <Reveal>
            <button
              type="button"
              onClick={() => setPreviewCategory(combos)}
              className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl bg-espresso px-5 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:px-8 sm:py-6 lg:gap-6 lg:px-10 lg:py-8"
            >
              <div className="relative z-10 min-w-0">
                <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-gold uppercase lg:text-xs">
                  Recomendado
                </span>
                <p className="mt-1 font-display text-2xl text-cream sm:text-3xl lg:mt-2 lg:text-4xl">
                  <span aria-hidden="true">{combos.icon}</span> Combos
                </p>
                <p className="mt-1 text-sm text-cream/70 line-clamp-2 lg:mt-2 lg:text-base">{combos.description}</p>
              </div>
              <span
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition-transform duration-300 group-hover:translate-x-1 lg:h-12 lg:w-12 lg:text-lg"
              >
                →
              </span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(146,179,162,0.22),transparent_60%)]" />
            </button>
          </Reveal>
        )}

        {/* Mobile: tira horizontal deslizable (no todas las categorías entran
            en una fila). Desde sm+ vuelve a ser la grilla de siempre.
            Ojo: van sin Reveal individual a propósito — una card que arranca
            fuera del ancho visible del carrusel (aunque esté "a la vista"
            verticalmente) nunca cruza el threshold del IntersectionObserver
            hasta que el usuario desliza, y queda invisible. Se anima el
            conjunto una sola vez al entrar la sección. */}
        <Reveal className="no-scrollbar mt-3 flex snap-x snap-proximity gap-3 overflow-x-auto pb-1 sm:mt-4 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-5">
          {rest.map((category) => (
            <div key={category.id} className="w-32 shrink-0 snap-start sm:w-auto">
              <button
                type="button"
                onClick={() => setPreviewCategory(category)}
                className="group flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-cream-soft px-3 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-[0_12px_28px_-16px_rgba(10,38,32,0.35)] lg:gap-3 lg:px-4 lg:py-8"
              >
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110 lg:text-3xl" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="font-display text-base text-espresso lg:text-lg">{category.name}</span>
              </button>
            </div>
          ))}
        </Reveal>

        <p className="mt-2 text-center text-[0.68rem] font-medium text-charcoal-soft/70 sm:hidden">
          Deslizá para ver más categorías{" "}
          <span className="inline-block animate-[nudge-x_1.4s_ease-in-out_infinite]" aria-hidden="true">
            ›
          </span>
        </p>
      </div>

      <div className="mt-8 text-center lg:mt-10">
        <Link
          href="/menu"
          className="text-sm font-medium text-terracotta underline-offset-4 hover:underline lg:text-base"
        >
          Ver la carta completa →
        </Link>
      </div>

      <CategoryPreviewModal category={previewCategory} onClose={() => setPreviewCategory(null)} />
    </section>
  );
}
