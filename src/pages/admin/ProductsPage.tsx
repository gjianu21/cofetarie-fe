// src/pages/admin/ProductsPage.tsx
// PREZENTATIONAL. Lista de produse cu stoc. Inlocuieste `products` cu apiFetch("/api/admin/products").
import { Link } from "react-router-dom";
import { products } from "../../data/products";

// stoc de exemplu — cand ai campul real in backend, il adaugi in Product si il citesti de acolo
const STOCK_DEMO: Record<string, number> = {
  "tort-red-velvet": 12,
  "cheesecake-new-york": 3,
  "saratele-susan": 25,
};

export default function ProductsPage() {
  return (
    <>
      <div className="admin-head">
        <h2>Produse</h2>
        <Link to="/admin/produse/nou" className="btn btn--primary btn--sm">
          + Produs nou
        </Link>
      </div>

      <div className="panel">
        <table>
          <thead>
            <tr>
              <th>Produs</th>
              <th>Categorie</th>
              <th>Preț</th>
              <th>Stoc</th>
              <th>Disponibil</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              const stock = STOCK_DEMO[p.slug] ?? 0;
              return (
                <tr key={p.id}>
                  <td>
                    <div className="cell-prod">
                      <div className="cell-prod__thumb">
                        {p.imageUrl && <img src={p.imageUrl} alt={p.name} />}
                      </div>
                      {p.name}
                    </div>
                  </td>
                  <td className="cell-muted">{p.categorySlug}</td>
                  <td>{p.price} lei</td>
                  <td className={stock <= 5 ? "stock-low" : ""}>{stock}</td>
                  <td>
                    <span className={`badge ${p.available ? "badge--livrata" : "badge--anulata"}`}>
                      {p.available ? "Da" : "Nu"}
                    </span>
                  </td>
                  <td className="table-actions">
                    <Link className="icon-link" to={`/admin/produse/${p.slug}`}>
                      Editează
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
