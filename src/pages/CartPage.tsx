// src/pages/CartPage.tsx
import { Link, useNavigate } from "react-router-dom";
import QuantityStepper from "../components/shop/QuantityStepper";
import { useCart } from "../context/cart-context";

export default function CartPage() {
  const navigate = useNavigate();
  const { items, updateQty, removeItem, subtotal } = useCart();

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
                {it.cakeMessage && (
                  <div className="cart-item__variant">Mesaj: „{it.cakeMessage}”</div>
                )}
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