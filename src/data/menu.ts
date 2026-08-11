/**
 * Datos del menú de Paulé Café.
 *
 * Fuente: carta oficial (PDF "carta a4 paulé"). Todas las categorías,
 * productos y precios de este archivo vienen de esa carta.
 *
 * Para agregar/editar productos: sumá objetos a `products` (o `subgroups`)
 * de la categoría correspondiente. No hace falta tocar ningún componente.
 */

export type CoffeeMood = "intenso" | "cremoso" | "frio" | "dulce" | "diferente";

export type ProductTag =
  | "nuevo"
  | "favorito"
  | "mas-elegido"
  | "sin-tacc"
  | "frio"
  | "vegano";

export interface MenuProduct {
  id: string;
  name: string;
  size?: string;
  price?: number;
  description?: string;
  /** Para combos: qué incluye la combinación (ej. ["Café", "Medialuna", "Jugo"]). */
  includes?: string[];
  /** Foto real del producto (opcional). Si falta, se usa un marcador visual. */
  image?: { src: string; alt: string };
  tags?: ProductTag[];
  /**
   * Clasificación estructural (no es un dato de la carta) usada por el
   * selector "Elegí tu café" para recomendar productos reales. Se infiere
   * del tipo de bebida (intensidad típica, base láctea, servido frío,
   * dulzor). Ajustar si no refleja el producto real.
   */
  moodTags?: CoffeeMood[];
}

export interface MenuSubgroup {
  name: string;
  products: MenuProduct[];
}

export interface MenuCategory {
  id: string;
  name: string;
  tabLabel: string;
  icon: string;
  description?: string;
  note?: string;
  featured?: boolean;
  comingSoon?: boolean;
  products?: MenuProduct[];
  subgroups?: MenuSubgroup[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "combos",
    name: "Combos",
    tabLabel: "Combos",
    icon: "⭐",
    description: "Las combinaciones ideales para acompañar tu café.",
    featured: true,
    products: [
      {
        id: "combo-ritual",
        name: "Combo Ritual",
        includes: ["Infusión", "Porción de torta", "Minijugo"],
        price: 16000,
      },
      {
        id: "combo-natural",
        name: "Combo Natural",
        includes: ["Infusión", "Huevos revueltos", "Yogurt con granola"],
        price: 14800,
        image: { src: "/images/combo-natural.jpg", alt: "Combo Natural de Paulé Café: latte, huevos revueltos con tostada y bowl de yogurt con granola y fruta" },
      },
      {
        id: "combo-pausa",
        name: "Combo Pausa",
        includes: ["Infusión", "Tostado jamón y queso", "Minijugo"],
        price: 10300,
      },
      {
        id: "combo-desconexion",
        name: "Combo Desconexión",
        includes: ["Infusión", "2 medialunas", "Minijugo"],
        price: 8200,
      },
      {
        id: "combo-especial",
        name: "Combo Especial",
        includes: ["Infusión", "Tostadas de pan de campo con dips", "Minijugo"],
        price: 10300,
      },
      {
        id: "brunch-paule",
        name: "Brunch Paulé",
        includes: [
          "2 infusiones",
          "2 minijugos",
          "Avocado toast",
          "Croissant jamón y queso",
          "Porción de torta",
          "Alfajor de almendras y dulce de leche",
        ],
        price: 40000,
        image: { src: "/images/brunch-paule.jpg", alt: "Brunch Paulé: avocado toast, croissant y jugo de naranja recién exprimido" },
      },
      {
        id: "hora-del-te",
        name: "Hora del Té",
        includes: [
          "2 tés en hebras",
          "Porción de budín",
          "Medialuna rellena",
          "Alfajor sablée",
        ],
        price: 20000,
        image: { src: "/images/hora-del-te.jpg", alt: "Café e infusión con alfajor sablée en la terraza de Paulé Café" },
      },
    ],
  },
  {
    id: "cafeteria",
    name: "Cafetería",
    tabLabel: "Cafetería",
    icon: "☕",
    description: "Café de especialidad, de la barra a tu mesa.",
    products: [
      { id: "espresso", name: "Espresso", price: 3400, moodTags: ["intenso"] },
      { id: "doppio", name: "Doppio", price: 3800, moodTags: ["intenso"] },
      { id: "lungo", name: "Lungo", price: 3800, moodTags: ["intenso"] },
      { id: "macchiato", name: "Macchiato", price: 3800, moodTags: ["intenso"] },
      { id: "cortado", name: "Cortado", price: 3800, moodTags: ["cremoso"] },
      { id: "americano", name: "Americano", price: 4000, moodTags: ["intenso"] },
      { id: "capuccino", name: "Capuccino", price: 5000, moodTags: ["cremoso"] },
      {
        id: "capuccino-italiano",
        name: "Capuccino italiano",
        description: "Cacao y canela",
        price: 6700,
        moodTags: ["cremoso", "dulce"],
      },
      { id: "cafe-con-leche", name: "Café con leche", price: 5000, moodTags: ["cremoso"] },
      { id: "flat-white", name: "Flat white", price: 5000, moodTags: ["cremoso"] },
      { id: "lagrima", name: "Lágrima", price: 5000, moodTags: ["cremoso"] },
      { id: "latte-doble", name: "Latte doble", price: 5500, moodTags: ["cremoso"] },
      { id: "vainilla-latte", name: "Vainilla latte", price: 6500, moodTags: ["dulce", "cremoso"] },
      { id: "avellana-latte", name: "Avellana latte", price: 6500, moodTags: ["dulce", "cremoso"] },
      { id: "caramel-latte", name: "Caramel latte", price: 6500, moodTags: ["dulce", "cremoso"] },
      { id: "nute-latte", name: "Nute latte", price: 7000, moodTags: ["dulce"] },
      { id: "frapuccino-paule", name: "Frapuccino Paulé", price: 7000, moodTags: ["dulce", "diferente"] },
      { id: "moca-blanco", name: "Moca blanco", price: 6700, moodTags: ["dulce"] },
      { id: "mocaccino", name: "Mocaccino", price: 6700, moodTags: ["dulce"] },
      { id: "chocolatada", name: "Chocolatada", price: 5000, moodTags: ["dulce", "diferente"] },
      { id: "submarino", name: "Submarino", price: 5800, moodTags: ["dulce", "diferente"] },
      { id: "chai-latte", name: "Chai latte", price: 6700, moodTags: ["diferente", "cremoso"] },
    ],
  },
  {
    id: "cafeteria-fria",
    name: "Cafetería fría",
    tabLabel: "Frías",
    icon: "🧊",
    description: "Para los días de calor — la misma calidad, servida con hielo.",
    products: [
      { id: "tonic-expresso", name: "Tonic expresso", price: 6400, tags: ["frio"], moodTags: ["frio", "diferente"] },
      { id: "iced-americano", name: "ICED americano", price: 4900, tags: ["frio"], moodTags: ["frio", "intenso"] },
      { id: "iced-capuccino", name: "ICED Capuccino", price: 5400, tags: ["frio"], moodTags: ["frio", "cremoso"] },
      { id: "iced-latte", name: "ICED Latte", price: 5400, tags: ["frio"], moodTags: ["frio", "cremoso"] },
      { id: "iced-flat-white", name: "ICED Flat white", price: 5700, tags: ["frio"], moodTags: ["frio", "cremoso"] },
      { id: "iced-vainilla-latte", name: "ICED Vainilla latte", price: 6700, tags: ["frio"], moodTags: ["frio", "dulce"] },
      { id: "iced-avellana-latte", name: "ICED Avellana latte", price: 6700, tags: ["frio"], moodTags: ["frio", "dulce"] },
      { id: "iced-caramel-latte", name: "ICED Caramel latte", price: 6700, tags: ["frio"], moodTags: ["frio", "dulce"] },
      { id: "iced-mocaccino", name: "ICED Mocaccino", price: 6700, tags: ["frio"], moodTags: ["frio", "dulce"] },
    ],
  },
  {
    id: "te-en-hebras",
    name: "Té en hebras",
    tabLabel: "Té",
    icon: "🍵",
    description: "Selección de tés en hebras.",
    products: [
      { id: "te-negro", name: "Té negro", price: 4500 },
      { id: "te-verde", name: "Té verde", price: 4500 },
      { id: "te-hierbas", name: "Té de hierbas", price: 4500 },
      { id: "te-chai", name: "Té Chai", price: 4500 },
    ],
  },
  {
    id: "bebidas-frias",
    name: "Bebidas frías",
    tabLabel: "Bebidas frías",
    icon: "🥤",
    description: "Opciones frías sin café.",
    products: [
      { id: "limonada-menta-jengibre", name: "Limonada menta y jengibre", price: 6000 },
      { id: "limonada-menta-jengibre-jarra", name: "Limonada menta y jengibre", size: "Jarra", price: 8000 },
      { id: "pomelada", name: "Pomelada", price: 6000 },
      { id: "pomelada-jarra", name: "Pomelada", size: "Jarra", price: 8000 },
      { id: "limonada-hibiscus", name: "Limonada hibiscus", price: 6000 },
      { id: "limonada-frutilla", name: "Limonada frutilla", price: 6000 },
      { id: "limonada-frutilla-jarra", name: "Limonada frutilla", size: "Jarra", price: 8000 },
      { id: "exprimido-naranja", name: "Exprimido naranja", price: 5800 },
      { id: "naranja-maracuya", name: "Naranja y maracuyá", price: 6800 },
      { id: "smoothies", name: "Smoothies", description: "2 frutas a elección, con leche o agua", price: 6200 },
      { id: "gaseosas-coca", name: "Gaseosas", description: "Línea Coca-Cola", price: 4200 },
      { id: "agua-saborizada", name: "Agua saborizada", price: 3700 },
      { id: "agua-cs-gas", name: "Agua", description: "Con o sin gas", price: 1600 },
    ],
  },
  {
    id: "pasteleria",
    name: "Delicias y Pastelería",
    tabLabel: "Pastelería",
    icon: "🥐",
    description: "Horneado de la casa, todos los días.",
    products: [
      { id: "medialuna", name: "Medialuna", price: 2100 },
      { id: "medialuna-jyq", name: "Medialuna con jamón y queso", price: 4700 },
      { id: "medialuna-rellena", name: "Medialuna rellena", description: "Crema pastelera o dulce de leche", price: 3700 },
      { id: "croissant", name: "Croissant", price: 4800 },
      { id: "croissant-jyq", name: "Croissant con jamón y queso", price: 7300 },
      { id: "croissant-relleno", name: "Croissant relleno", description: "Nutella, pistacho o crema con frutas rojas", price: 9000 },
      { id: "budin", name: "Budín", description: "Consultar variedad del día", price: 4800 },
      { id: "pan-chocolate", name: "Pan de chocolate", description: "Masa de hojaldre con doble relleno de chocolate", price: 8100 },
      { id: "roll-canela", name: "Roll de canela", price: 7200 },
      { id: "roll-queso", name: "Roll de queso", price: 7200 },
      { id: "chipa", name: "Chipa x 2 unidades", price: 3500 },
      { id: "alfajor-sablee-ddl", name: "Alfajor sablée y dulce de leche", price: 5100 },
      { id: "alfajor-sablee-cacao", name: "Alfajor sablée cacao, dulce de leche y frambuesas", price: 5700 },
      { id: "alfajor-almendras", name: "Alfajor de almendras y dulce de leche", price: 5700 },
      { id: "cookie-limon", name: "Cookie de limón", price: 4800 },
      { id: "cookie-pistacho", name: "Cookie de pistacho y chocolate", price: 6800 },
      { id: "cookie-vainilla", name: "Cookie de vainilla y chips", price: 4800 },
    ],
  },
  {
    id: "desayunos",
    name: "Desayunos y Meriendas",
    tabLabel: "Desayunos",
    icon: "🍳",
    description: "Para arrancar el día con tiempo.",
    products: [
      { id: "yogurt", name: "Yogurt", description: "Con frutas de estación, granola y miel", price: 8800 },
      {
        id: "avocado-toast",
        name: "Avocado toast",
        description: "Pan de campo, queso crema con ciboulette, huevos revueltos, palta y tomate cherry",
        price: 8800,
      },
      {
        id: "avocado-paule",
        name: "Avocado Paulé",
        description: "Pan de campo, queso crema con ciboulette, salmón ahumado, rúcula, huevos, palta y tomate cherry",
        price: 14000,
      },
      { id: "french-toast", name: "French toast", description: "Pan brioche, frutas de estación, crema y miel", price: 9900 },
      { id: "huevos-revueltos", name: "Huevos revueltos", description: "Con tostada de pan de campo o integral", price: 7100 },
      { id: "tostadas-dips", name: "Tostadas con dips untables", price: 6600 },
      { id: "tostado-jyq", name: "Tostado jamón y queso", description: "Pan de campo, árabe o integral", price: 7100 },
      { id: "tostado-chipa", name: "Tostado de chipa con jamón y queso", price: 9900 },
      { id: "croissant-salmon", name: "Croissant con queso crema, salmón ahumado y rúcula", price: 12500 },
      { id: "sandwich-atun", name: "Sándwich de atún", description: "En pan brioche con palta, tomate y espinaca", price: 12500 },
      {
        id: "sandwich-paule",
        name: "Sándwich Paulé",
        description: "Pan de campo, jamón crudo, rúcula, burrata y tomates confitados",
        price: 17000,
      },
      {
        id: "bagel-salmon",
        name: "Bagel de salmón ahumado",
        description: "Con rúcula, queso crema con ciboulette y palta",
        price: 12500,
      },
    ],
  },
  {
    id: "tortas",
    name: "Tortas",
    tabLabel: "Tortas",
    icon: "🍰",
    description: "Por porción, para compartir o para llevar.",
    products: [
      { id: "matilda", name: "Matilda", description: "Bizcochuelo de chocolate, dulce de leche y ganache", price: 12900 },
      { id: "carrot-cake", name: "Carrot cake", description: "Bizcocho de zanahoria con frosting de queso crema", price: 12900 },
      { id: "key-lime-pie", name: "Key lime pie", description: "De lima y leche condensada", price: 11200 },
      { id: "cheesecake-frutos-rojos", name: "Cheesecake de frutos rojos", price: 11200 },
      {
        id: "marquise",
        name: "Marquise",
        description: "Chocolate, dulce de leche, crema y frutas rojas de estación",
        price: 11200,
      },
      { id: "chocotorta", name: "Chocotorta", description: "Mousse de galletas de chocolate", price: 11200 },
    ],
  },
  {
    id: "sin-tacc",
    name: "Sin TACC",
    tabLabel: "Sin TACC",
    icon: "🌾",
    description: "Opciones libres de gluten.",
    products: [
      { id: "frola-membrillo", name: "Frola con membrillo", price: 7200 },
      { id: "mini-budin-carrot", name: "Mini budín carrot y nueces", price: 6200 },
      { id: "lemonie", name: "Lemonie", price: 7200 },
      { id: "alfajor-maicena", name: "Alfajor maicena c/ dulce de leche", price: 5800 },
      { id: "alfajor-sable-chocolate", name: "Alfajor sablé de chocolate c/ dulce de leche", price: 5800 },
    ],
  },
  {
    id: "extras",
    name: "Extras",
    tabLabel: "Extras",
    icon: "➕",
    description: "Sumale un extra a tu pedido.",
    products: [
      { id: "leche-vegetal", name: "Leche vegetal", price: 1600 },
      { id: "shot", name: "Shot", price: 1600 },
      { id: "crema", name: "Crema", price: 1600 },
      { id: "tomate", name: "Tomate", price: 1600 },
      { id: "palta", name: "Palta", price: 1900 },
      { id: "dip", name: "Dip", price: 1000 },
      { id: "huevo", name: "Huevo", price: 1000 },
      { id: "jamon-cocido", name: "Jamón cocido", price: 1600 },
      { id: "jamon-crudo", name: "Jamón crudo", price: 1900 },
      { id: "queso", name: "Queso", price: 1600 },
    ],
  },
];

export const coffeeMoods: {
  id: CoffeeMood;
  label: string;
  emoji: string;
  intro: string;
}[] = [
  { id: "intenso", label: "Quiero algo intenso", emoji: "☕", intro: "Si buscás algo intenso..." },
  { id: "cremoso", label: "Quiero algo suave y cremoso", emoji: "🥛", intro: "Si buscás algo suave y cremoso..." },
  { id: "frio", label: "Quiero algo frío", emoji: "🧊", intro: "Si buscás algo frío..." },
  { id: "dulce", label: "Quiero algo dulce", emoji: "🍫", intro: "Si buscás algo dulce..." },
  { id: "diferente", label: "Quiero probar algo diferente", emoji: "✨", intro: "Si querés probar algo diferente..." },
];

export function formatPrice(price?: number): string {
  if (price == null) return "Consultar";
  return `$${price.toLocaleString("es-AR")}`;
}

export function getAllProducts(): MenuProduct[] {
  return menuCategories.flatMap((category) => [
    ...(category.products ?? []),
    ...(category.subgroups?.flatMap((group) => group.products) ?? []),
  ]);
}

export function getProductsByMood(mood: CoffeeMood, limit = 3): MenuProduct[] {
  return getAllProducts()
    .filter((product) => product.moodTags?.includes(mood))
    .slice(0, limit);
}

export interface CoffeeProfile {
  temperature: "frio" | "caliente";
  intensity: 1 | 2 | 3;
  withMilk: boolean;
}

/**
 * Perfil orientativo (temperatura, intensidad, si lleva leche) para la
 * guía visual de "Elegí tu café". Se infiere de `moodTags` — es una
 * referencia general del estilo de bebida, no la receta exacta de Paulé.
 */
export function getCoffeeProfile(product: MenuProduct): CoffeeProfile {
  const tags = product.moodTags ?? [];
  const withMilk = tags.includes("cremoso") || tags.includes("dulce");
  const intensity: 1 | 2 | 3 = tags.includes("intenso") ? 3 : withMilk ? 1 : 2;
  return {
    temperature: tags.includes("frio") ? "frio" : "caliente",
    intensity,
    withMilk,
  };
}

export function findCategoryOfProduct(productId: string): MenuCategory | undefined {
  return menuCategories.find(
    (category) =>
      category.products?.some((p) => p.id === productId) ||
      category.subgroups?.some((g) => g.products.some((p) => p.id === productId))
  );
}
