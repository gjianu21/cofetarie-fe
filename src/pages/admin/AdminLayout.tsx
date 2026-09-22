// src/pages/admin/AdminLayout.tsx
// Layout separat pentru admin (fara NavBar/Footer publice). Randeaza sidebar-ul + continutul rutei curente.
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <div className="admin-side__brand">Dulce Alint · Admin</div>
        <nav className="admin-nav">
          <NavLink to="/admin" end>
            📊 Dashboard
          </NavLink>
          <NavLink to="/admin/produse">🧁 Produse</NavLink>
          <NavLink to="/admin/comenzi">📦 Comenzi</NavLink>
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
