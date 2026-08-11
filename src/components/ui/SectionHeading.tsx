import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.25em] uppercase ${
            isDark ? "text-gold" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl leading-tight font-medium sm:text-4xl ${
          isDark ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            isDark ? "text-cream/70" : "text-charcoal-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
