import Badge from "@/components/ui/Badge";
import { formatPrice, type MenuProduct, type ProductTag } from "@/data/menu";

const tagLabels: Record<ProductTag, string> = {
  nuevo: "Nuevo",
  favorito: "Favorito",
  "mas-elegido": "Más elegido",
  "sin-tacc": "Sin TACC",
  frio: "Frío",
  vegano: "Vegano",
};

interface ProductCardProps {
  product: MenuProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      id={`producto-${product.id}`}
      className="flex items-start justify-between gap-4 border-b border-line/70 py-4 [break-inside:avoid-column] last:border-b-0"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h4 className="font-display text-lg text-espresso">{product.name}</h4>
          {product.size && (
            <span className="text-xs text-charcoal-soft/80">{product.size}</span>
          )}
        </div>
        {product.description && (
          <p className="mt-1 text-sm text-charcoal-soft">{product.description}</p>
        )}
        {product.tags && product.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <Badge key={tag} tone={tag === "mas-elegido" ? "terracotta" : "gold"}>
                {tagLabels[tag]}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <span className="shrink-0 font-display text-lg text-espresso">
        {formatPrice(product.price)}
      </span>
    </article>
  );
}
