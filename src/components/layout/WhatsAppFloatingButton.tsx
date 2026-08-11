import { whatsappUrl } from "@/data/business";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex h-12 w-12 [transform:translateZ(0)] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_-4px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 md:right-6 md:bottom-6 md:h-14 md:w-14"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.638 4.43 1.744 6.256L4 29l7.94-1.703A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.946-1.354l-.355-.21-4.71 1.01 1.006-4.59-.232-.372A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Z" />
        <path d="M21.61 17.53c-.303-.152-1.792-.884-2.07-.985-.278-.101-.48-.152-.682.152-.202.303-.784.985-.961 1.187-.177.202-.354.227-.657.076-.303-.152-1.279-.472-2.436-1.507-.9-.803-1.508-1.795-1.685-2.098-.177-.303-.019-.467.133-.618.137-.136.303-.354.455-.53.152-.177.202-.304.303-.506.101-.202.05-.379-.025-.53-.076-.152-.682-1.646-.935-2.253-.246-.591-.497-.511-.682-.52l-.582-.01c-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.526s1.086 2.93 1.238 3.132c.152.202 2.137 3.263 5.176 4.575.723.312 1.287.499 1.727.638.726.231 1.386.198 1.908.12.582-.087 1.792-.733 2.045-1.44.253-.708.253-1.315.177-1.44-.076-.126-.278-.202-.581-.354Z" />
      </svg>
    </a>
  );
}
