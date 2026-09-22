// src/pages/admin/DashboardPage.tsx
// PREZENTATIONAL. Numerele sunt de exemplu — inlocuiesti cu apiFetch("/api/admin/stats") si
// apiFetch("/api/admin/orders?limit=5") pentru tabelul de mai jos.
import StatTile from "../../components/admin/StatTile";
import StatusBadge from "../../components/shop/StatusBadge";
import { orders } from "../../data/orders";

export default function DashboardPage() {
  const recent = orders.slice(0, 3);

  return (
    <>
      <div className="admin-head">
        <h2>Dashboard</h2>
      </div>

      <div className="stat-row">
        <StatTile label="Comenzi azi" value="7" delta="+2 față de ieri" />
        <StatTile label="Venit azi" value="1.240 lei" delta="+180 lei" />
        <StatTile label="Comenzi noi" value="3" delta="necesită confirmare" deltaColor="var(--gold)" />
        <StatTile label="Produse cu stoc redus" value="2" delta="verifică stocul" deltaColor="var(--danger)" />
      </div>

      <div className="panel">
        <table>
          <thead>
            <tr>
              <th>Comandă</th>
              <th>Client</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((o) => (
              <tr key={o.id}>
                <td className="cell-muted">#{o.id}</td>
                <td>{o.customerName}</td>
                <td>{o.total} lei</td>
                <td>
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
