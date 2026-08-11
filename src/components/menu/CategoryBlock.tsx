import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/menu/ProductCard";
import type { MenuCategory } from "@/data/menu";

interface CategoryBlockProps {
  category: MenuCategory;
}

export default function CategoryBlock({ category }: CategoryBlockProps) {
  const hasContent =
    (category.products && category.products.length > 0) ||
    (category.subgroups && category.subgroups.length > 0);

  return (
    <section id={`cat-${category.id}`} className="py-14 first:pt-10">
      <Reveal>
        <div className="mb-8 flex items-start gap-3">
          <span className="mt-0.5 text-2xl" aria-hidden="true">
            {category.icon}
          </span>
          <div>
            <h3 className="font-display text-2xl text-espresso sm:text-3xl">{category.name}</h3>
            {category.description && (
              <p className="mt-1 text-sm text-charcoal-soft">{category.description}</p>
            )}
          </div>
        </div>
      </Reveal>

      {!hasContent && (
        <Reveal>
          <div className="rounded-2xl border border-dashed border-line bg-cream-soft px-6 py-10 text-center">
            <p className="font-display text-lg text-espresso">Próximamente</p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-charcoal-soft">
              Todavía estamos cargando esta categoría. Muy pronto vas a poder ver los productos
              acá.
            </p>
          </div>
        </Reveal>
      )}

      {category.products && category.products.length > 0 && (
        <Reveal>
          <div className="rounded-2xl border border-line bg-cream-soft/60 px-5 sm:px-6 md:columns-2 md:gap-x-10">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      )}

      {category.subgroups && category.subgroups.length > 0 && (
        <div className="space-y-10">
          {category.subgroups.map((group) => (
            <Reveal key={group.name}>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
                {group.name}
              </p>
              <div className="rounded-2xl border border-line bg-cream-soft/60 px-5 sm:px-6 md:columns-2 md:gap-x-10">
                {group.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {category.note && (
        <p className="mt-4 text-xs text-charcoal-soft/70 italic">{category.note}</p>
      )}
    </section>
  );
}
