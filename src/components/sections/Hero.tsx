import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { business } from "@/data/business";

// Versión corta de business.hoursToday para el Hero (info secundaria, no
// queremos la frase completa acá). Si cambia la redacción de hoursToday en
// data/business.ts y el patrón deja de matchear, el .replace no encuentra
// nada y devuelve el string original sin romper nada — solo no se acorta.
const heroStatus = business.hoursToday.replace("— cierra a las", "· hasta").replace(/\.$/, "");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85svh] items-end overflow-hidden bg-espresso-deep md:min-h-0 md:h-[640px] md:items-center lg:h-[720px] xl:h-[800px] 2xl:h-[860px]"
    >
      <Image
        src="/images/hero-latte-art.jpg"
        alt="Café con arte latte servido en Paulé Café"
        fill
        priority
        sizes="100vw"
        className="object-cover md:object-[55%_28%]"
      />
      {/* Overlay liviano: oscurece solo lo necesario para leer el texto de
          abajo, dejando la foto visible arriba en vez de taparla entera. En
          desktop el hero no queda "anclado abajo" (md:items-center + altura
          acotada en vez de 100svh), así que el overlay cubre parejo arriba y
          abajo para que el texto contraste bien sin importar dónde caiga. */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/40 to-transparent md:bg-gradient-to-r md:from-espresso-deep/85 md:via-espresso-deep/35 md:to-transparent" />

      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-6 pb-14 sm:px-8 sm:pb-20 md:pb-0">
        <Reveal as="p" className="text-sm font-medium text-cream/70">
          {business.address.locality} · Buenos Aires
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-4 lg:mt-5">
            {/* El PNG tiene ~4.1% de relleno transparente a la izquierda
                (medido con PIL) antes de que arranque el trazo de la "P" —
                sin este ajuste, el logo queda corrido respecto del texto
                de arriba aunque ambos partan del mismo borde del contenedor. */}
            <Image
              src="/paule-logo-cream.png"
              alt="Paulé Café"
              width={420}
              height={128}
              priority
              className="h-[clamp(3.25rem,14vw,4rem)] w-auto -translate-x-[4.1%] sm:h-16 md:h-20 lg:h-[clamp(5.25rem,3.5vw+2.8rem,7rem)]"
            />
          </h1>
        </Reveal>

        <Reveal delay={160} className="mt-5 flex items-center gap-2 text-xs text-cream/65 lg:mt-6 lg:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {heroStatus}
        </Reveal>

        <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-10">
          <Button href="/menu" variant="primary" className="px-8 py-3.5 text-sm lg:px-10 lg:py-4 lg:text-base">
            Ver el Menú
          </Button>
          <Button
            href="#ubicacion"
            variant="secondary-dark"
            className="gap-2.5 !py-2 pr-6 pl-2 text-sm lg:!py-2.5 lg:pr-8 lg:pl-2.5 lg:text-base"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/15 lg:h-9 lg:w-9">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-8.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
              </svg>
            </span>
            Cómo llegar
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
