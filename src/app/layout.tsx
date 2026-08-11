import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Paulé Café | Cafetería en Hurlingham";
const description =
  "Paulé Café, cafetería de especialidad en Hurlingham. Carta completa de cafés, pastelería, desayunos, tortas y combos. Mirá el menú, horarios y cómo llegar.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Paulé Café",
  },
  description,
  keywords: [
    "Paulé Café",
    "cafetería en Hurlingham",
    "cafés en Hurlingham",
    "cafetería de especialidad",
    "desayunos Hurlingham",
    "pastelería Hurlingham",
  ],
  openGraph: {
    title,
    description,
    siteName: "Paulé Café",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: business.name,
    image: "/paule-logo-green.png",
    telephone: business.phoneDisplay,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: "AR",
    },
    servesCuisine: "Café",
    url: undefined,
  };

  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="flex min-h-full flex-col bg-cream text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
