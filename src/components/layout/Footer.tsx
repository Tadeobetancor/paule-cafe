import Image from "next/image";
import { business, whatsappUrl } from "@/data/business";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-line bg-cream-soft pt-14 pb-28 md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Image
            src="/paule-logo-green.png"
            alt="Paulé Café"
            width={140}
            height={43}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
            {business.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-soft hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-charcoal-soft">
          <p>{business.address.street}</p>
          <p>
            {business.address.locality}, {business.address.region}
          </p>
          <a href={business.phoneHref} className="mt-2 inline-block hover:text-terracotta">
            {business.phoneDisplay}
          </a>
          <div className="mt-3 flex gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta"
            >
              WhatsApp
            </a>
            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line px-5 pt-6 text-xs text-charcoal-soft/70 sm:px-8">
        <p>© {new Date().getFullYear()} Paulé Café — Hurlingham, Buenos Aires.</p>
      </div>
    </footer>
  );
}
