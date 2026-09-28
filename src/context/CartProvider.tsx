import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { CartContext, type CartLine, type NewCartLine } from "./cart-context";

const STORAGE_KEY = "cofetarie-cart";
const MAX_QTY = 99;

function loadCart(): CartLine[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export default function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartLine[]>(loadCart);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // storage plin sau blocat: coșul funcționează doar în memorie
        }
    }, [items]);

    const addItem = useCallback((item: NewCartLine, qty = 1) => {
        const id = `${item.productId}::${item.variantId ?? ""}::${item.cakeMessage ?? ""}`;
        setItems((prev) => {
            const existing = prev.find((it) => it.id === id);
            if (existing) {
                return prev.map((it) =>
                    it.id === id ? { ...it, qty: Math.min(it.qty + qty, MAX_QTY) } : it,
                );
            }
            return [...prev, { ...item, id, qty: Math.min(qty, MAX_QTY) }];
        });
    }, []);

    const updateQty = useCallback((id: string, qty: number) => {
        setItems((prev) =>
            qty <= 0
                ? prev.filter((it) => it.id !== id)
                : prev.map((it) => (it.id === id ? { ...it, qty: Math.min(qty, MAX_QTY) } : it)),
        );
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    }, []);

    const clear = useCallback(() => setItems([]), []);

    const value = useMemo(
        () => ({
            items,
            count: items.reduce((n, it) => n + it.qty, 0),
            subtotal: items.reduce((sum, it) => sum + it.unitPrice * it.qty, 0),
            addItem,
            updateQty,
            removeItem,
            clear,
        }),
        [items, addItem, updateQty, removeItem, clear],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}