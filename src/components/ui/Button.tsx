import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants = {
  primary:
    "bg-terracotta text-cream shadow-[0_8px_24px_-8px_rgba(32,77,68,0.55)] hover:bg-terracotta-soft hover:shadow-[0_10px_28px_-6px_rgba(32,77,68,0.5)] active:scale-[0.98]",
  secondary:
    "border border-espresso/25 bg-transparent text-espresso hover:border-espresso/50 hover:bg-espresso/5 active:scale-[0.98]",
  "secondary-dark":
    "border border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10 active:scale-[0.98]",
  ghost: "text-espresso hover:text-terracotta",
};

type Variant = keyof typeof variants;

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
