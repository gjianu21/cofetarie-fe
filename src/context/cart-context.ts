import { createContext, useContext } from "react";

export interface CartLine {
    id: string; // productId + variantId + mesaj, unic per linie
    productId: string; // deocamdată slug-ul produsului
    name: string;
    variantId?: string;
    variant?: string; // text afișat, ex. "1kg"
    cakeMessage?: string;
    qty: number;
    unitPrice: number;
    imageUrl?: string;
}

export type NewCartLine = Omit<CartLine, "id" | "qty">;

export interface CartContextValue {
    items: CartLine[];
    count: number;
    subtotal: number;
    addItem: (item: NewCartLine, qty?: number) => void;
    updateQty: (id: string, qty: number) => void;
    removeItem: (id: string) => void;
    clear: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart trebuie folosit în interiorul CartProvider");
    return ctx;
}