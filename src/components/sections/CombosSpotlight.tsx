import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatPrice, menuCategories } from "@/data/menu";
import { whatsappUrl } from "@/data/business";

export default function CombosSpotlight() {
  const combos = menuCategories.find((c) => c.id === "combos");
  if (!combos) return null;

  const hasProducts = (combos.products?.length ?? 0) > 0;

  return (
    <section
      id={`cat-${combos.id}`}
      className="relative overflow-hidden bg-espresso py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(146,179,162,0.14),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(32,77,68,0.35),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Rinde más, sabe mejor"
            title="Combos"
            subtitle="Elegí tu combinación favorita."
            tone="dark"
          />
        </Reveal>

        {hasProducts ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {combos.products!.map((combo, i) => (
              <Reveal key={combo.id} delay={i * 70} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-cream-soft/[0.04] ring-1 ring-cream/10">
                  {combo.image ? (
                    <div className="relative h-44 w-full">
                      <Image
                        src={combo.image.src}
                        alt={combo.image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderImage
                      icon="pastry"
                      tone="dark"
                      label={`Foto del combo ${combo.name}`}
                      className="h-44 w-full"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl text-cream">{combo.name}</h3>
                    {combo.includes && (
                      <p className="mt-1 text-sm text-cream/60">{combo.includes.join(" + ")}</p>
                    )}
                    {combo.description && (
                      <p className="mt-2 text-sm text-cream/70">{combo.description}</p>
                    )}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-2xl text-gold">
                        {formatPrice(combo.price)}
                      </span>
                      {combo.tags?.includes("mas-elegido") && (
                        <Badge tone="cream">Más elegido</Badge>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-dashed border-cream/25 bg-cream/[0.03] px-6 py-14 text-center sm:px-12">
              <p className="text-3xl" aria-hidden="true">
                ⭐
              </p>
              <p className="mt-4 font-display text-2xl text-cream">
                Estamos armando nuestros combos.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-cream/65">
                Muy pronto vas a poder ver acá las combinaciones de café + algo rico pensadas
                para vos. Mientras tanto, consultanos directamente.
              </p>
              <Button
                href={whatsappUrl("Hola! Quería consultar si tienen combos disponibles.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary-dark"
                className="mt-6"
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
