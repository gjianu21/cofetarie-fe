// src/pages/account/OrdersPage.tsx
// PREZENTATIONAL. Foloseste datele statice din data/orders.ts; inlocuieste cu apiFetch("/api/orders/mine").
import { orders } from "../../data/orders";
import StatusBadge from "../../components/shop/StatusBadge";

export default function OrdersPage() {
  if (orders.length === 0) {
    return (
      <div className="container section">
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Comenzile mele</h1>
        <p className="empty-state">Nu ai plasat încă nicio comandă.</p>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{ fontSize: "2rem", marginBottom: "26px" }}>Comenzile mele</h1>
      {orders.map((o) => (
        <div className="order-row" key={o.id}>
          <StatusBadge status={o.status} />
          <div>
            <div className="order-row__id">#{o.id}</div>
            <div className="order-row__date">{o.date}</div>
          </div>
          <div className="cell-muted">{o.lines.length} produse</div>
          <div className="order-row__total">{o.total} lei</div>
          {/* TODO: leaga catre pagina de detaliu comanda client, cand o construiesti */}
          <button type="button" className="btn btn--ghost btn--sm">
            Detalii
          </button>
        </div>
      ))}
    </div>
  );
}
