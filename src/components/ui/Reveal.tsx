"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "p";
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const combinedClassName = `reveal ${className}`;

  if (as === "p") {
    return (
      <p ref={ref} className={combinedClassName}>
        {children}
      </p>
    );
  }

  return (
    <div ref={ref} className={combinedClassName}>
      {children}
    </div>
  );
}
