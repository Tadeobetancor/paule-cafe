import type { Metadata } from "next";
import Link from "next/link";
import MenuHeader from "@/components/menu/MenuHeader";
import CategoryTabs from "@/components/menu/CategoryTabs";
import CombosSpotlight from "@/components/sections/CombosSpotlight";
import MenuSection from "@/components/sections/MenuSection";
import CoffeePicker from "@/components/sections/CoffeePicker";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Carta completa de Paulé Café: cafetería, cafetería fría, té en hebras, bebidas frías, pastelería, desayunos, tortas, sin TACC y combos, con precios actualizados.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[var(--container-max)] px-5 pt-8 pb-3 text-center sm:px-8 sm:pt-10">
          <h1 className="font-display text-3xl leading-tight font-medium text-espresso sm:text-4xl lg:text-[clamp(2.25rem,0.98vw+1.62rem,2.8rem)]">
            Carta completa
          </h1>
        </div>

        <div className="relative">
          <CategoryTabs />
          <CombosSpotlight />
          <MenuSection />
        </div>

        <CoffeePicker />

        <div className="px-5 py-14 text-center sm:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
          >
            ← Volver a Paulé Café
          </Link>
        </div>
      </main>
    </>
  );
}
