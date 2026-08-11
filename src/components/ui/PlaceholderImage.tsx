const icons = {
  cup: (
    <path d="M6 9h11v6a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V9Z M17 11h1.5a2.5 2.5 0 0 1 0 5H17 M9 5.5c0-1 .8-1 .8-2S9 2 9 2 M12.5 5.5c0-1 .8-1 .8-2s-.8-1.5-.8-1.5" />
  ),
  pastry: (
    <path d="M3 12c1-4 4-7 9-7s8 3 9 7c-1.5-1-3-1.5-4-.5-1 1-1 1-2 0s-2-1-3 0-2 1-3 0-2.5-1.5-4-.5-2 1-2 1Z M4 13.5c1 3 4 5.5 8 5.5s7-2.5 8-5.5" />
  ),
  cake: (
    <path d="M4 20v-6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V20 M4 20h16 M8 11.5V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.5 M12 6V3.5 M12 3.5c-.6 0-1-.5-1-1s.4-1.3 1-1.8c.6.5 1 1.2 1 1.8s-.4 1-1 1Z M4 17h16" />
  ),
  pin: (
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z M12 12.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
  ),
  interior: (
    <path d="M3 21h18 M5 21V9.5L12 4l7 5.5V21 M9 21v-6h6v6 M12 4v5.5M8.5 12h1.2M14.3 12h1.2" />
  ),
  breakfast: (
    <path d="M4 12a8 8 0 1 1 16 0c0 .7-.1 1.4-.3 2H4.3c-.2-.6-.3-1.3-.3-2Z M3 18.5h18 M9 8.2c0-1 .6-2.4 1.4-3.2M13 8.2c0-1.4.9-2.6 1.4-3.2" />
  ),
  beans: (
    <path d="M8 6.5c3-2 7-1 8.5 2s.3 7.2-2.7 9.2-7 1-8.5-2S5 8.5 8 6.5Z M7.8 15.8C9 13 11 11 13.8 9.6 M14.5 5.2c1 1.4 2 5 .5 8.6" />
  ),
  tea: (
    <path d="M4 9h13v5.5A5.5 5.5 0 0 1 11.5 20H10A5.5 5.5 0 0 1 4.5 14.5V9Z M17 10.5h1a2.5 2.5 0 0 1 0 5h-1.3 M8 5c-.4-.7 0-1.2 0-1.9M11.5 5c-.4-.7 0-1.2 0-1.9" />
  ),
};

export type PlaceholderIcon = keyof typeof icons;

interface PlaceholderImageProps {
  icon: PlaceholderIcon;
  label: string;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Marcador visual elegante para donde va una foto real de Paulé Café.
 * `label` describe qué foto corresponde ahí (para accesibilidad y para
 * que quede documentado qué reemplazar en /public/images).
 */
export default function PlaceholderImage({
  icon,
  label,
  className = "",
  tone = "light",
}: PlaceholderImageProps) {
  const isDark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${
        isDark
          ? "bg-[radial-gradient(circle_at_30%_20%,rgba(146,179,162,0.22),transparent_55%),linear-gradient(155deg,#1b3a30,#0a2620)]"
          : "bg-[radial-gradient(circle_at_30%_20%,rgba(32,77,68,0.12),transparent_55%),linear-gradient(155deg,#f6f2dc,#ece6c4)]"
      } ${className}`}
    >
      <div
        className={`absolute inset-0 opacity-[0.35] mix-blend-overlay`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDark ? "#cfe0d6" : "#204d44"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 opacity-70 sm:h-12 sm:w-12"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
    </div>
  );
}
