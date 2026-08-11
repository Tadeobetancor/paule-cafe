import CategoryBlock from "@/components/menu/CategoryBlock";
import { menuCategories } from "@/data/menu";

export default function MenuSection() {
  const categories = menuCategories.filter((c) => c.id !== "combos");

  return (
    <section aria-label="Menú completo">
      <div className="mx-auto max-w-5xl divide-y divide-line px-5 sm:px-8">
        {categories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
