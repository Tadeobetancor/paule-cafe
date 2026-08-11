import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { business } from "@/data/business";

// Otras opciones de tagline, por si preferís cambiarla más adelante:
// "Un buen café no se apura."
// "Café de especialidad, hecho para quedarte."
// "Acá el café se toma con tiempo."
const heroTagline = "Buen café, buena mesa y ganas de quedarte.";

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
          <h1 className="mt-3">
            <Image
              src="/paule-logo-cream.png"
              alt="Paulé Café"
              width={420}
              height={128}
              priority
              className="h-[clamp(4.5rem,19vw,5.5rem)] w-auto sm:h-24 md:h-28 lg:h-[clamp(7rem,5vw+3.6rem,10rem)]"
            />
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-cream/80 sm:max-w-sm sm:text-lg lg:max-w-md lg:text-xl">
            {heroTagline}
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-4 flex items-center gap-2 text-sm text-cream/75 lg:mt-5 lg:text-base">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {business.hoursToday}
        </Reveal>

        <Reveal delay={280} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 lg:mt-10">
          <Button href="/menu" variant="primary" className="px-8 py-3.5 text-sm lg:px-10 lg:py-4 lg:text-base">
            Ver el Menú
          </Button>
          <a
            href="#ubicacion"
            className="text-sm font-medium text-cream/70 underline-offset-4 transition-colors hover:text-cream hover:underline lg:text-base"
          >
            Cómo llegar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
