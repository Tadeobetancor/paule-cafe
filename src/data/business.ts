/**
 * Fuente única de datos del negocio. Toda la UI lee de acá — para actualizar
 * teléfono, dirección, horarios o redes, alcanza con editar este archivo.
 */

export type DayHours = {
  day: string;
  hours: string | null; // null = sin dato todavía / cerrado
};

export const business = {
  name: "Paulé Café",
  tagline: "Café de especialidad, pastelería de la casa y un lugar para quedarse.",

  address: {
    street: "Gral. Mariano Necochea 1198",
    locality: "Hurlingham",
    region: "Provincia de Buenos Aires",
    postalCode: "B1686",
    country: "Argentina",
    full: "Gral. Mariano Necochea 1198, B1686 Hurlingham, Provincia de Buenos Aires, Argentina",
  },

  // TODO: confirmar si es línea móvil — wa.me requiere un número con WhatsApp activo.
  phoneDisplay: "011 6893-2248",
  phoneHref: "tel:+541168932248",
  whatsappNumber: "5491168932248",
  whatsappMessage: "Hola! Quería consultar por Paulé Café.",

  // Sólo se usa en el structured data (schema.org) para SEO, no se muestra en pantalla.
  priceRange: "$10.000 - $20.000",

  hoursToday: "Abierto — cierra a las 20:00 hs.",
  weeklyHours: [
    { day: "Lunes", hours: "7:30 - 20:00" },
    { day: "Martes", hours: "7:30 - 20:00" },
    { day: "Miércoles", hours: "7:30 - 20:00" },
    { day: "Jueves", hours: "7:30 - 20:00" },
    { day: "Viernes", hours: "7:30 - 20:00" },
    { day: "Sábado", hours: "9:00 - 20:00" },
    { day: "Domingo", hours: "9:00 - 20:00" },
  ] satisfies DayHours[],

  social: {
    instagram: "https://www.instagram.com/paulecafe/",
    instagramHandle: "@paulecafe",
    whatsapp: "",
  },

  map: {
    embedSrc:
      "https://www.google.com/maps?q=" +
      encodeURIComponent(
        "Gral. Mariano Necochea 1198, B1686 Hurlingham, Buenos Aires, Argentina"
      ) +
      "&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Gral. Mariano Necochea 1198, B1686 Hurlingham, Buenos Aires, Argentina"
      ),
  },
};

export const whatsappUrl = (message: string = business.whatsappMessage) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
