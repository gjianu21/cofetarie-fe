// src/data/products.ts
// Date statice de pornire. Cand ai GET /api/products in cofetarie-be,
// inlocuiesti importul acestor constante cu un apiFetch — markup-ul ramane la fel.

export interface Category {
  slug: string;
  name: string;
  icon: string; // iconita temporara (emoji). Inlocuiesti cu poza/SVG mai tarziu.
}

export interface Product {
  id: number;
  slug: string; // apare in URL: /produse/tort-red-velvet
  name: string;
  description: string;
  price: number; // lei
  categorySlug: string;
  rating: number; // 0..5, doar pentru afisare deocamdata
  discount?: string; // ex: "-10%" -> afiseaza un badge pe card
  imageUrl?: string; // gol acum -> placeholder cu numele
  available: boolean;
}

export const shop = {
  name: "Cofetăria Dulce Alint", // <- pune numele real aici
  tagline: "Prăjituri de casă, făcute cu răbdare în fiecare zi",
  about:
    "Suntem o cofetărie de familie din București. Lucrăm în serii mici, cu ingrediente " +
    "de calitate și rețete la care ținem. De la torturi pentru zile speciale până la " +
    "sărate pentru birou, gătim tot ce ne place să și mâncăm.",
  address: "Str. Exemplu nr. 12, Sector 3, București",
  phone: "07XX XXX XXX",
  email: "comenzi@dulcealint.ro",
  hours: [
    { day: "Luni – Vineri", time: "08:00 – 20:00" },
    { day: "Sâmbătă", time: "09:00 – 18:00" },
    { day: "Duminică", time: "Închis" },
  ],
};

export const categories: Category[] = [
  { slug: "torturi", name: "Torturi", icon: "🎂" },
  { slug: "prajituri", name: "Prăjituri", icon: "🧁" },
  { slug: "tarte", name: "Tarte", icon: "🥧" },
  { slug: "sarate", name: "Sărate", icon: "🥨" },
];

export const products: Product[] = [
  { id: 1, slug: "tort-red-velvet", name: "Tort Red Velvet", description: "Blat catifelat roșu cu cremă fină de brânză. Se comandă cu o zi înainte.", price: 180, categorySlug: "torturi", rating: 5, available: true },
  { id: 2, slug: "eclere-vanilie", name: "Eclere cu vanilie", description: "Eclere clasice cu cremă de vanilie și glazură de ciocolată.", price: 8, categorySlug: "prajituri", rating: 4.5, available: true },
  { id: 3, slug: "cheesecake-new-york", name: "Cheesecake New York", description: "Cremos, copt lent, cu blat de biscuiți. Felie generoasă.", price: 18, categorySlug: "prajituri", rating: 5, discount: "-10%", available: true },
  { id: 4, slug: "prajitura-snickers", name: "Prăjitură Snickers", description: "Straturi de blat, caramel, arahide și ciocolată.", price: 14, categorySlug: "prajituri", rating: 4.5, available: true },
  { id: 5, slug: "tarta-fructe-padure", name: "Tartă cu fructe de pădure", description: "Aluat fraged, cremă de vanilie și fructe de pădure proaspete.", price: 15, categorySlug: "tarte", rating: 4.5, available: true },
  { id: 6, slug: "saratele-susan", name: "Sărățele cu susan", description: "Fragede, cu unt și susan. Se vând la pungă de 200g.", price: 12, categorySlug: "sarate", rating: 4, available: true },
  { id: 7, slug: "cornulete-gouda-sunca", name: "Cornulețe cu gouda și șuncă", description: "Aluat pufos umplut cu brânză gouda și șuncă. Bune calde.", price: 6, categorySlug: "sarate", rating: 5, available: true },
  { id: 8, slug: "rulouri-capia-pui", name: "Rulouri cu ardei capia, gouda și piept de pui", description: "Rulouri sărate cu ardei capia copt, gouda și piept de pui.", price: 9, categorySlug: "sarate", rating: 4.5, available: true },
];
