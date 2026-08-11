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
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl lg:max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.25em] uppercase lg:text-[0.8125rem] ${
            isDark ? "text-gold" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {/* H2: fluida en mobile, fija en tablet (sm, sin cambios), y vuelve a
          crecer progresivamente desde desktop (lg 1024px) hasta un techo en
          monitores grandes — así el título gana presencia en pantallas
          anchas sin volverse gigante ni afectar mobile/tablet. */}
      <h2
        className={`font-display text-[clamp(1.7rem,7.2vw,2.1rem)] leading-tight font-medium sm:text-4xl lg:text-[clamp(2.25rem,0.98vw+1.62rem,2.8rem)] ${
          isDark ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed lg:text-lg ${
            isDark ? "text-cream/70" : "text-charcoal-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
