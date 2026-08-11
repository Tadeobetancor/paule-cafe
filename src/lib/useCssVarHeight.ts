"use client";

import { useEffect, useRef } from "react";

/**
 * Mide la altura real de un elemento y la expone como variable CSS global
 * (ej. --navbar-h) para que otros elementos (barras sticky/fixed) puedan
 * posicionarse relativos a ella sin necesidad de "adivinar" un valor fijo
 * en píxeles que se rompe apenas cambia el contenido o el breakpoint.
 */
export function useCssVarHeight<T extends HTMLElement>(varName: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      document.documentElement.style.setProperty(varName, `${el.getBoundingClientRect().height}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("orientationchange", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, [varName]);

  return ref;
}
