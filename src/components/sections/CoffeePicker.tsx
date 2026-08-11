"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { coffeeMoods, formatPrice, getCoffeeProfile, getProductsByMood } from "@/data/menu";

export default function CoffeePicker() {
  const [moodId, setMoodId] = useState<(typeof coffeeMoods)[number]["id"] | null>(null);
  const mood = coffeeMoods.find((m) => m.id === moodId);
  const results = mood ? getProductsByMood(mood.id, 3) : [];

  return (
    <section id="elegi-tu-cafe" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Guía rápida"
          title="¿Qué café tenés ganas de tomar?"
          subtitle="Contanos qué se te antoja y te recomendamos algo de nuestra carta, con temperatura, intensidad y si lleva leche."
          className="mx-auto"
        />
      </Reveal>

      <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-3">
        {coffeeMoods.map((m) => {
          const active = moodId === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMoodId(active ? null : m.id)}
              aria-pressed={active}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                active
                  ? "border-terracotta bg-terracotta text-cream shadow-[0_8px_20px_-8px_rgba(32,77,68,0.55)]"
                  : "border-line bg-cream-soft text-charcoal-soft hover:border-terracotta/40 hover:text-espresso"
              }`}
            >
              <span aria-hidden="true">{m.emoji}</span>
              {m.label}
            </button>
          );
        })}
      </Reveal>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
          mood ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          {mood && (
            <div className="mt-10 rounded-2xl border border-line bg-cream-soft px-6 py-8 sm:px-8">
              <p className="font-display text-lg text-espresso italic">{mood.intro}</p>

              {results.length > 0 ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {results.map((product) => {
                    const profile = getCoffeeProfile(product);
                    return (
                      <a
                        key={product.id}
                        href={`#producto-${product.id}`}
                        className="group flex flex-col rounded-xl border border-line bg-cream px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-[0_10px_24px_-14px_rgba(10,38,32,0.4)]"
                      >
                        <p className="font-display text-base text-espresso">{product.name}</p>
                        {product.size && (
                          <p className="text-xs text-charcoal-soft/80">{product.size}</p>
                        )}

                        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.68rem] text-charcoal-soft/80">
                          <span className="inline-flex items-center gap-1">
                            <span aria-hidden="true">
                              {profile.temperature === "frio" ? "🧊" : "🔥"}
                            </span>
                            {profile.temperature === "frio" ? "Frío" : "Caliente"}
                          </span>
                          <span className="inline-flex items-center gap-1" title="Intensidad">
                            <span aria-hidden="true" className="flex gap-0.5">
                              {[1, 2, 3].map((level) => (
                                <span
                                  key={level}
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    level <= profile.intensity ? "bg-terracotta" : "bg-line"
                                  }`}
                                />
                              ))}
                            </span>
                            Intensidad
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span aria-hidden="true">{profile.withMilk ? "🥛" : "◇"}</span>
                            {profile.withMilk ? "Con leche" : "Sin leche"}
                          </span>
                        </div>

                        <p className="mt-3 flex items-center justify-between border-t border-line/70 pt-2.5 text-sm">
                          <span className="font-medium text-terracotta">
                            {formatPrice(product.price)}
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-charcoal-soft/50 transition-transform group-hover:translate-x-0.5 group-hover:text-terracotta"
                          >
                            Ver en el menú →
                          </span>
                        </p>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-4 text-sm text-charcoal-soft">
                  Todavía no tenemos productos cargados para esta opción.
                </p>
              )}

              <p className="mt-6 text-xs text-charcoal-soft/60">
                Guía orientativa según el estilo de cada bebida — no reemplaza la receta exacta
                de la barra.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
