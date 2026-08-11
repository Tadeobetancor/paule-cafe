import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Copy de referencia — reemplazar por la historia real de Paulé Café
// cuando esté disponible (origen del nombre, quiénes están detrás, etc.).
const aboutCopy =
  "Paulé Café es un lugar pensado para tomarse un buen café sin apuro: barra de especialidad, pastelería propia y un espacio que invita a quedarse. Cuidamos cada detalle, de la taza a la mesa.";

export default function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-[var(--container-max)] px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[5/4] md:aspect-[4/5]">
            <Image
              src="/images/about-servicio-terraza.jpg"
              alt="Mozo sirviendo la mesa en la terraza de Paulé Café"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading eyebrow="Sobre nosotros" title="Paulé Café" />
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft sm:text-lg">
            {aboutCopy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
