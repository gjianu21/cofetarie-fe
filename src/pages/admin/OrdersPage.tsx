// src/pages/admin/OrdersPage.tsx
// PREZENTATIONAL. Inlocuieste `orders` cu apiFetch("/api/admin/orders").
import { Link } from "react-router-dom";
import { orders } from "../../data/orders";
import StatusBadge from "../../components/shop/StatusBadge";

export default function OrdersPage() {
  return (
    <>
      <div className="admin-head">
        <h2>Comenzi</h2>
      </div>

      <div className="panel">
        <table>
          <thead>
            <tr>
              <th>Comandă</th>
              <th>Client</th>
              <th>Dată</th>
              <th>Total</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="cell-muted">#{o.id}</td>
                <td>{o.customerName}</td>
                <td className="cell-muted">{o.date}</td>
                <td>{o.total} lei</td>
                <td>
                  <StatusBadge status={o.status} />
                </td>
                <td>
                  <Link className="icon-link" to={`/admin/comenzi/${o.id}`}>
                    Vezi
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
