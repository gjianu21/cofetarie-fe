// src/pages/CartPage.tsx
// PREZENTATIONAL cu date de exemplu locale (useState). Cand ai CartContext, inlocuiesti
// state-ul de mai jos cu { items, updateQty, removeItem, subtotal } din context.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuantityStepper from "../components/shop/QuantityStepper";

interface CartLine {
  id: string;
  name: string;
  variant?: string;
  qty: number;
  unitPrice: number;
  imageUrl?: string;
}

const SAMPLE: CartLine[] = [
  { id: "1", name: "Tort Red Velvet", variant: "Mărime: 1kg", qty: 1, unitPrice: 160 },
  { id: "2", name: "Eclere cu vanilie", variant: "Bucată", qty: 4, unitPrice: 8 },
  { id: "3", name: "Sărățele cu susan", variant: "Pungă 200g", qty: 2, unitPrice: 12 },
];

export default function CartPage() {
  const navigate = useNavigate();
  // TODO: inlocuieste cu const { items, updateQty, removeItem } = useCart();
  const [items, setItems] = useState<CartLine[]>(SAMPLE);

  const updateQty = (id: string, qty: number) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((sum, it) => sum + it.unitPrice * it.qty, 0);

  if (items.length === 0) {
    return (
      <div className="container section">
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Coșul tău</h1>
        <div className="empty-state">
          <p>Coșul este gol momentan.</p>
          <Link to="/" className="btn btn--primary" style={{ marginTop: "14px" }}>
            Vezi produsele
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{ fontSize: "2rem", marginBottom: "26px" }}>Coșul tău</h1>
      <div className="cart-layout">
        <div>
          {items.map((it) => (
            <div className="cart-item" key={it.id}>
              <div className="cart-item__thumb">
                {it.imageUrl ? <img src={it.imageUrl} alt={it.name} /> : it.name}
              </div>
              <div>
                <div className="cart-item__name">{it.name}</div>
                {it.variant && <div className="cart-item__variant">{it.variant}</div>}
              </div>
              <QuantityStepper value={it.qty} onChange={(v) => updateQty(it.id, v)} size="sm" />
              <div style={{ textAlign: "right" }}>
                <div className="cart-item__price">{it.unitPrice * it.qty} lei</div>
                <button type="button" className="cart-item__remove" onClick={() => removeItem(it.id)}>
                  Elimină
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary-card">
          <h3>Sumar comandă</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{subtotal} lei</span>
          </div>
          <div className="summary-row">
            <span>Livrare</span>
            <span>estimată la checkout</span>
          </div>
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <span>{subtotal} lei</span>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--block"
            style={{ marginTop: "18px" }}
            onClick={() => navigate("/checkout")}
          >
            Continuă spre finalizare
          </button>
          <Link to="/" className="btn btn--ghost btn--block" style={{ marginTop: "10px" }}>
            ← Continuă cumpărăturile
          </Link>
        </aside>
      </div>
    </div>
  );
}
