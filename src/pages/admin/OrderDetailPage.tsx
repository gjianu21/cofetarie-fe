// src/pages/admin/OrderDetailPage.tsx
// PREZENTATIONAL. Schimbarea de status e vizuala (useState local); leag-o la
// PATCH /api/admin/orders/:id/status cand ai endpoint-ul.
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { orders } from "../../data/orders";
import StatusBadge, { type OrderStatus } from "../../components/shop/StatusBadge";

const STATUS_ACTIONS: { status: OrderStatus; label: string; className: string }[] = [
  { status: "confirmata", label: "Confirmă", className: "btn--ghost" },
  { status: "pregatire", label: "În pregătire", className: "btn--brown" },
  { status: "livrata", label: "Livrată", className: "btn--primary" },
  { status: "anulata", label: "Anulează", className: "btn--danger-ghost" },
];

export default function OrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const order = orders.find((o) => o.id === orderId);
  const [status, setStatus] = useState<OrderStatus | undefined>(order?.status);

  if (!order) {
    return (
      <div className="empty-state">
        <p>Comanda nu a fost găsită.</p>
        <Link to="/admin/comenzi" className="link">← Înapoi la listă</Link>
      </div>
    );
  }

  const handleStatusChange = (next: OrderStatus) => {
    setStatus(next);
    // TODO: PATCH /api/admin/orders/:id/status { status: next }
  };

  return (
    <>
      <div className="admin-head">
        <h2>Comandă #{order.id}</h2>
        <Link to="/admin/comenzi" className="btn btn--ghost btn--sm">
          ← Înapoi la listă
        </Link>
      </div>

      <div className="order-detail">
        <div className="panel" style={{ padding: "22px 24px" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "14px" }}>Produse comandate</h3>
          <table>
            <tbody>
              {order.lines.map((line, i) => (
                <tr key={i}>
                  <td>
                    {line.name}
                    {line.variant ? ` (${line.variant})` : ""} × {line.qty}
                  </td>
                  <td style={{ textAlign: "right" }}>{line.price} lei</td>
                </tr>
              ))}
              <tr>
                <td>Livrare</td>
                <td style={{ textAlign: "right" }}>{order.deliveryFee} lei</td>
              </tr>
            </tbody>
          </table>
          <div className="summary-row summary-row--total" style={{ marginTop: "8px" }}>
            <span>Total</span>
            <span>{order.total} lei</span>
          </div>

          <h3 style={{ fontSize: "1.05rem", margin: "22px 0 10px" }}>Client &amp; livrare</h3>
          <p className="cell-muted" style={{ margin: "4px 0" }}>
            {order.customerName}
            {order.customerPhone ? ` · ${order.customerPhone}` : ""}
          </p>
          {order.deliveryAddress && (
            <p className="cell-muted" style={{ margin: "4px 0" }}>{order.deliveryAddress}</p>
          )}
          {order.deliverySlot && (
            <p className="cell-muted" style={{ margin: "4px 0" }}>Livrare: {order.deliverySlot}</p>
          )}
        </div>

        <div>
          <div className="panel" style={{ padding: "22px 24px", marginBottom: "18px" }}>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "6px" }}>Status curent</h3>
            {status && <StatusBadge status={status} />}
            <div className="status-actions">
              {STATUS_ACTIONS.map((a) => (
                <button
                  key={a.status}
                  type="button"
                  className={`btn btn--sm ${a.className}`}
                  onClick={() => handleStatusChange(a.status)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: "22px 24px" }}>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "12px" }}>Istoric</h3>
            {/* TODO: inlocuieste cu istoricul real (audit log) al comenzii */}
            <ul className="timeline">
              <li>
                <time>{order.date}</time>
                <span>Comandă plasată de client</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
