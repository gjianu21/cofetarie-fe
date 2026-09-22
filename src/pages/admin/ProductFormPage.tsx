// src/pages/admin/ProductFormPage.tsx
// PREZENTATIONAL. Foloseste acelasi formular pentru "produs nou" si "editeaza produs":
// daca :slug exista in produse -> mod editare (campuri precompletate), altfel -> mod creare (campuri goale).
import { Link, useNavigate, useParams } from "react-router-dom";
import { categories, products } from "../../data/products";

export default function ProductFormPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const existing = slug ? products.find((p) => p.slug === slug) : undefined;
  const isEditing = Boolean(existing);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: isEditing ? PUT /api/admin/products/:id : POST /api/admin/products
    navigate("/admin/produse");
  };

  const handleDelete = () => {
    // TODO: DELETE /api/admin/products/:id (cu confirmare)
    navigate("/admin/produse");
  };

  return (
    <>
      <div className="admin-head">
        <h2>{isEditing ? "Editează produs" : "Produs nou"}</h2>
        <Link to="/admin/produse" className="btn btn--ghost btn--sm">
          ← Înapoi la listă
        </Link>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="admin-form-grid">
          <div className="field">
            <label htmlFor="pf-nume">Nume produs</label>
            <input className="input" id="pf-nume" defaultValue={existing?.name} placeholder="ex: Tort Red Velvet" />
          </div>
          <div className="field">
            <label htmlFor="pf-categorie">Categorie</label>
            <select className="select" id="pf-categorie" defaultValue={existing?.categorySlug}>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="pf-pret">Preț de bază (lei)</label>
            <input className="input" id="pf-pret" type="number" defaultValue={existing?.price} placeholder="0" />
          </div>
          <div className="field">
            <label htmlFor="pf-stoc">Stoc</label>
            <input className="input" id="pf-stoc" type="number" placeholder="0" />
          </div>
          <div className="field field--full">
            <label htmlFor="pf-desc">Descriere</label>
            <textarea className="textarea" id="pf-desc" defaultValue={existing?.description} />
          </div>
          <div className="field field--full">
            <label htmlFor="pf-poza">URL poză</label>
            <input className="input" id="pf-poza" placeholder="https://..." defaultValue={existing?.imageUrl} />
          </div>
          <div className="field">
            <label className="toggle-avail">
              <input type="checkbox" defaultChecked={existing?.available ?? true} /> Disponibil în vitrină
            </label>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button type="submit" className="btn btn--primary">
            Salvează produsul
          </button>
          {isEditing && (
            <button type="button" className="btn btn--danger-ghost" onClick={handleDelete}>
              Șterge produsul
            </button>
          )}
        </div>
      </form>
    </>
  );
}
