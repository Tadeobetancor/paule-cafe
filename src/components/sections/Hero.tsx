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
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso-deep"
    >
      <Image
        src="/images/hero-latte-art.jpg"
        alt="Café con arte latte servido en Paulé Café"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso-deep/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/60 to-espresso-deep/20" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-28 sm:px-8 sm:pb-32 md:pb-24">
        <Reveal as="p" className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
          {business.address.locality}, {business.address.region}
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5">
            <Image
              src="/paule-logo-cream.png"
              alt="Paulé Café"
              width={420}
              height={128}
              priority
              className="h-16 w-auto sm:h-20 md:h-24"
            />
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/85 sm:text-xl">
            {heroTagline}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
          <Button href="#menu" variant="primary" className="px-7 py-3.5 text-sm">
            Ver el Menú
          </Button>
          <Button href="#ubicacion" variant="secondary-dark" className="px-7 py-3.5 text-sm">
            Cómo Llegar
          </Button>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/15 pt-6 text-sm text-cream/70"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {business.hoursToday}
          </span>
          <span>{business.priceRangeLabel}</span>
        </Reveal>
      </div>
    </section>
  );
}
