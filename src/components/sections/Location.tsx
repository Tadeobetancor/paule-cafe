import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { business } from "@/data/business";

export default function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Visitanos"
          title="Encontranos"
          subtitle="En el corazón de Hurlingham, a un mate de distancia."
        />
      </Reveal>

      <Reveal delay={60}>
        <div className="relative mt-8 h-56 w-full overflow-hidden rounded-3xl sm:h-72">
          <Image
            src="/images/ubicacion-fachada.jpg"
            alt="Fachada de Paulé Café en Hurlingham"
            fill
            sizes="100vw"
            className="object-cover object-[50%_15%]"
          />
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
        <Reveal className="order-2 md:order-1">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-cream-soft p-7 sm:p-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                {business.hoursToday}
              </p>

              <p className="mt-6 font-display text-xl text-espresso">{business.address.street}</p>
              <p className="text-charcoal-soft">
                {business.address.locality}, {business.address.region}
              </p>
              <p className="text-charcoal-soft">{business.address.postalCode}</p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-charcoal-soft/70 uppercase">
                  Horarios
                </p>
                <ul className="space-y-1.5 text-sm">
                  {business.weeklyHours.map((d) => (
                    <li key={d.day} className="flex justify-between text-charcoal-soft">
                      <span>{d.day}</span>
                      <span>{d.hours ?? "—"}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              href={business.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-8 w-full"
            >
              Cómo Llegar
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 md:order-2">
          <div className="h-[320px] w-full overflow-hidden rounded-3xl border border-line sm:h-full sm:min-h-[420px]">
            <iframe
              src={business.map.embedSrc}
              title="Ubicación de Paulé Café en el mapa"
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
