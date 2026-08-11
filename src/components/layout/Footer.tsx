import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
  { href: "/menu", label: "Menú" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-soft pt-14 pb-28 md:pb-14">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
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
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-soft hover:text-terracotta"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-soft hover:text-terracotta"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-[var(--container-max)] border-t border-line px-5 pt-6 text-xs text-charcoal-soft/70 sm:px-8">
        <p>© {new Date().getFullYear()} Paulé Café — Hurlingham, Buenos Aires.</p>
      </div>
    </footer>
  );
}
