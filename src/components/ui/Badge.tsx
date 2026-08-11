import type { ReactNode } from "react";

const tones = {
  gold: "bg-gold/15 text-espresso border-gold/40",
  terracotta: "bg-terracotta/12 text-terracotta border-terracotta/35",
  charcoal: "border-charcoal/20 bg-charcoal/5 text-charcoal-soft",
  cream: "border-cream/30 bg-cream/10 text-cream",
};

interface BadgeProps {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}

export default function Badge({ children, tone = "charcoal", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
