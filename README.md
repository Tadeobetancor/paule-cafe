# Paulé Café

Sitio web oficial de **Paulé Café**, cafetería de especialidad en Hurlingham, Provincia de Buenos Aires. Funciona como la carta digital principal del local: menú interactivo, guía para elegir café, ubicación con mapa y toda la info de contacto, pensado mobile-first para gente que llega desde Instagram o un QR en la mesa.

## Características

- **Menú interactivo** con categorías, tabs con scroll horizontal y datos separados del código (`src/data/menu.ts`) para poder actualizar productos y precios sin tocar componentes.
- **Combos** con tratamiento visual destacado y fotos reales.
- **"Elegí tu café"** — guía que recomienda productos reales de la carta según temperatura, intensidad y si lleva leche.
- **Ubicación** con mapa embebido, horarios y botón "Cómo llegar".
- **Botón flotante de WhatsApp** y barra de acceso rápido fija en mobile (Cómo llegar / Ver Menú / Horarios).
- Diseño 100% responsive, con la paleta e identidad visual real de la marca (verde + crema, logo extraído de la carta oficial).
- SEO: metadata, Open Graph y datos estructurados (`CafeOrCoffeeShop`) para posicionar en búsquedas locales.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) para optimización de imágenes

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run lint    # eslint
```

## Estructura

```
src/
  app/                 # layout, metadata y la página principal
  components/
    layout/            # Navbar, Footer, barra mobile, botón de WhatsApp
    sections/           # Hero, Menú, Combos, "Elegí tu café", Ubicación, etc.
    menu/               # tabs de categorías y tarjetas de producto
    ui/                 # componentes base reutilizables
  data/
    business.ts         # datos del negocio: dirección, horarios, contacto
    menu.ts              # categorías y productos de la carta
public/
  images/               # fotos reales del local
```

Para actualizar precios, productos o categorías del menú, alcanza con editar `src/data/menu.ts`. Para datos del negocio (teléfono, horarios, redes), editar `src/data/business.ts`.
