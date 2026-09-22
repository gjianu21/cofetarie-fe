// src/data/variants.ts
// Variante de marime pentru produse tip tort. Cheia e slug-ul produsului.
export interface ProductVariant {
  id: string;
  label: string;
  helper: string; // ex: "4-6 persoane"
  price: number;
}

export const productVariants: Record<string, ProductVariant[]> = {
  "tort-red-velvet": [
    { id: "500g", label: "500g", helper: "4-6 persoane", price: 90 },
    { id: "1kg", label: "1kg", helper: "8-10 persoane", price: 160 },
    { id: "2kg", label: "2kg", helper: "16-20 persoane", price: 280 },
  ],
};
