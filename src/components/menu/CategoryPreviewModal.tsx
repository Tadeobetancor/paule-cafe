"use client";

import { useEffect } from "react";
import Link from "next/link";
import { formatPrice, type MenuCategory } from "@/data/menu";

interface CategoryPreviewModalProps {
  category: MenuCategory | null;
  onClose: () => void;
}

/**
 * Preview rápido de una categoría, disparado desde CategoryGrid en la home.
 * Funcionalidad secundaria: no reemplaza /menu, sólo tienta con algunos
 * productos y precios antes de mandar a la carta completa.
 */
export default function CategoryPreviewModal({ category, onClose }: CategoryPreviewModalProps) {
  useEffect(() => {
    if (!category) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  const preview = (
    category.products ?? category.subgroups?.flatMap((group) => group.products) ?? []
  ).slice(0, 5);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-espresso-deep/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Vista previa de ${category.name}`}
        className="max-h-[80vh] w-full overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-2xl" aria-hidden="true">
              {category.icon}
            </span>
            <h3 className="mt-1 font-display text-2xl text-espresso">{category.name}</h3>
            {category.description && (
              <p className="mt-1 text-sm text-charcoal-soft">{category.description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 rounded-full p-2 text-charcoal-soft hover:bg-cream-soft hover:text-espresso"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {preview.length > 0 ? (
          <ul className="mt-6 divide-y divide-line">
            {preview.map((product) => (
              <li key={product.id} className="flex items-baseline justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="font-display text-base text-espresso">{product.name}</p>
                  {product.size && (
                    <p className="text-xs text-charcoal-soft/80">{product.size}</p>
                  )}
                </div>
                <span className="shrink-0 font-display text-base text-espresso">
                  {formatPrice(product.price)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-charcoal-soft">
            Estamos cargando esta categoría. Muy pronto vas a poder verla acá.
          </p>
        )}

        <Link
          href={`/menu#cat-${category.id}`}
          className="mt-6 block w-full rounded-full bg-terracotta px-6 py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-soft"
        >
          Ver carta completa
        </Link>
      </div>
    </div>
  );
}
