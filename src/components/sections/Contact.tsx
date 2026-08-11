import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { business, whatsappUrl } from "@/data/business";

/**
 * Sección de contacto al final de la home. Orden fijo pedido: Instagram,
 * WhatsApp, Cómo llegar, Pedidos/Delivery. No hay cuenta de delivery
 * (Rappi/PedidosYa) confirmada todavía, así que "Pedidos y delivery" deriva
 * a WhatsApp — es un canal real, no un dato inventado.
 */
const contactLinks = [
  {
    label: "Instagram",
    hint: business.social.instagramHandle ?? "Ver publicaciones",
    icon: (
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5ZM17.5 6.5h.01" />
    ),
    href: business.social.instagram || undefined,
    placeholder: "Muy pronto",
  },
  {
    label: "WhatsApp",
    hint: "Escribinos",
    icon: (
      <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.21A9 9 0 1 0 12 3Zm4.87 12.73c-.2.57-1.17 1.09-1.62 1.13-.43.05-.87.23-2.9-.62-2.46-1.02-4.04-3.52-4.16-3.68-.12-.16-1-1.32-1-2.52s.63-1.79.86-2.03c.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.41l.72 1.9c.06.16.1.34.02.5-.08.16-.13.26-.26.4l-.4.44c-.13.13-.27.27-.12.53.15.27.68 1.13 1.47 1.83 1.01.9 1.83 1.19 2.1 1.32.27.13.43.11.6-.07l.6-.7c.22-.25.4-.2.66-.11l1.7.82c.16.08.27.12.31.19.05.08.05.44-.15 1.01Z" />
    ),
    href: whatsappUrl(),
    external: true,
  },
  {
    label: "Cómo llegar",
    hint: business.address.locality + ", " + business.address.region,
    icon: (
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-8.8a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
    ),
    href: business.map.directionsUrl,
    external: true,
  },
  {
    label: "Pedidos y delivery",
    hint: "Coordiná tu pedido por WhatsApp",
    icon: (
      <path d="M4 8h16l-1.4 10.1a2 2 0 0 1-2 1.9H7.4a2 2 0 0 1-2-1.9L4 8Zm4 0V6a4 4 0 0 1 8 0v2" />
    ),
    href: whatsappUrl("Hola! Quería hacer un pedido para retirar o delivery."),
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-cream-soft py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Contacto"
            title="Seguinos y escribinos"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10 grid gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => {
            const disabled = !item.href;
            const content = (
              <>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-espresso"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {item.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base text-espresso">{item.label}</span>
                  <span className="block truncate text-xs text-charcoal-soft/80">
                    {disabled ? item.placeholder : item.hint}
                  </span>
                </span>
              </>
            );
            const className = `flex min-w-0 items-center gap-3 rounded-2xl border px-5 py-4 transition-colors ${
              disabled
                ? "border-dashed border-line text-charcoal-soft/60"
                : "border-line bg-cream hover:border-terracotta/40"
            }`;

            if (disabled) {
              return (
                <span key={item.label} className={className} aria-disabled="true">
                  {content}
                </span>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={className}
              >
                {content}
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
