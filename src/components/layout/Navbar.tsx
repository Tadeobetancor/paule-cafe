"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useCssVarHeight } from "@/lib/useCssVarHeight";
import Button from "@/components/ui/Button";

const links = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#nosotros", label: "Nosotros", id: "nosotros" },
  { href: "#ubicacion", label: "Ubicación", id: "ubicacion" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

const sectionIds = links.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const headerRef = useCssVarHeight<HTMLElement>("--navbar-h");
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 [transform:translateZ(0)] transition-colors duration-300 ${
        solid ? "bg-cream/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* --navbar-h se mide sólo de esta barra (no del header completo): si
          incluyera el dropdown mobile, abrirlo infla la variable y ese valor
          inflado queda "pegado" en el scroll-margin-top del destino cuando
          se toca un link, dejando un salto/hueco enorme antes de la sección. */}
      <nav ref={headerRef} className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-5 py-3 sm:px-8 lg:py-4">
        <a href="#inicio" className="shrink-0" onClick={() => setOpen(false)} aria-label="Paulé Café — Inicio">
          <Image
            src={solid ? "/paule-logo-green.png" : "/paule-logo-cream.png"}
            alt="Paulé Café"
            width={140}
            height={43}
            priority
            className="h-8 w-auto sm:h-9 lg:h-10"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex lg:gap-9">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors lg:text-base ${
                  activeId === link.id
                    ? solid
                      ? "text-terracotta"
                      : "text-gold"
                    : solid
                      ? "text-charcoal-soft hover:text-espresso"
                      : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/menu" variant="primary" className="px-5 py-2.5 text-xs lg:px-6 lg:py-3 lg:text-sm">
            Ver Menú
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${solid ? "bg-espresso" : "bg-cream"} ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 transition-opacity duration-200 ${solid ? "bg-espresso" : "bg-cream"} ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${solid ? "bg-espresso" : "bg-cream"} ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-cream transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-5 pb-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 font-display text-xl ${
                    activeId === link.id ? "text-terracotta" : "text-espresso"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                href="/menu"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Ver Menú
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
