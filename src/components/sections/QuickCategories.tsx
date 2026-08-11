import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuCategories } from "@/data/menu";

export default function QuickCategories() {
  const combos = menuCategories.find((c) => c.id === "combos");
  const rest = menuCategories.filter((c) => c.id !== "combos");

  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 pt-20 pb-4 sm:px-8 sm:pt-28">
      <Reveal>
        <SectionHeading
          eyebrow="La carta, a un toque"
          title="¿Qué te tentó hoy?"
          subtitle="Elegí una categoría y te llevamos directo — sin vueltas, sin scrollear de más."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {combos && (
          <Reveal className="col-span-2 sm:col-span-3 lg:col-span-5">
            <a
              href={`#cat-${combos.id}`}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-espresso px-6 py-6 transition-transform duration-300 hover:-translate-y-0.5 sm:px-8"
            >
              <div className="relative z-10">
                <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-gold uppercase">
                  Recomendado
                </span>
                <p className="mt-1 font-display text-2xl text-cream sm:text-3xl">
                  <span aria-hidden="true">{combos.icon}</span> Combos
                </p>
                <p className="mt-1 text-sm text-cream/70">{combos.description}</p>
              </div>
              <span
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(146,179,162,0.22),transparent_60%)]" />
            </a>
          </Reveal>
        )}

        {rest.map((category, i) => (
          <Reveal key={category.id} delay={i * 50}>
            <a
              href={`#cat-${category.id}`}
              className="group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-cream-soft px-3 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-[0_12px_28px_-16px_rgba(10,38,32,0.35)]"
            >
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                {category.icon}
              </span>
              <span className="font-display text-base text-espresso">{category.name}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
