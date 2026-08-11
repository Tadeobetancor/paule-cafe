import Link from "next/link";

/**
 * Único CTA flotante en mobile: acceso persistente a la carta completa
 * (/menu) sin ocupar una barra completa. "Cómo llegar" y "Horarios" ya
 * están accesibles desde el Hero, el footer y la sección de Ubicación.
 */
export default function MobileMenuBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:hidden">
      <Link
        href="/menu"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_10px_24px_-8px_rgba(20,67,59,0.55)] [transform:translateZ(0)] active:scale-95"
      >
        <span aria-hidden="true">☕</span> Ver Menú
      </Link>
    </div>
  );
}
