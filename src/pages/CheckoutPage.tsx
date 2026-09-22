// src/pages/CheckoutPage.tsx
// PREZENTATIONAL. Taxa de livrare/total sunt calculate local pentru demo — in realitate vin din
// raspunsul serverului (nu ai incredere in preturi calculate pe client).
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DELIVERY_FEE = 40;
const SUBTOTAL_DEMO = 216; // TODO: preia subtotalul real din CartContext

type DeliveryMode = "livrare" | "ridicare";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<DeliveryMode>("livrare");

  const deliveryFee = mode === "ridicare" ? 0 : DELIVERY_FEE;
  const total = SUBTOTAL_DEMO + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST /api/orders cu { items, mode, address?, date, slot, notes }
    // apoi navigate(`/comanda-plasata/${orderId}`)
    navigate("/comanda-plasata/DA-2026-0417");
  };

  return (
    <div className="container section">
      <h1 style={{ fontSize: "2rem", marginBottom: "26px" }}>Finalizează comanda</h1>
      <form onSubmit={handleSubmit} className="checkout-layout" noValidate>
        <div>
          <div className="form-card" style={{ marginBottom: "20px" }}>
            <h3>Livrare sau ridicare</h3>
            <div className="toggle-row">
              <button
                type="button"
                className={`toggle-opt ${mode === "livrare" ? "selected" : ""}`}
                onClick={() => setMode("livrare")}
              >
                Livrare la adresă
                <small>~35–50 lei, în funcție de zonă</small>
              </button>
              <button
                type="button"
                className={`toggle-opt ${mode === "ridicare" ? "selected" : ""}`}
                onClick={() => setMode("ridicare")}
              >
                Ridic din locație
                <small>Str. Exemplu nr. 12, gratuit</small>
              </button>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="co-nume">Nume complet</label>
                <input className="input" id="co-nume" placeholder="Popescu Ana" />
              </div>
              <div className="field">
                <label htmlFor="co-telefon">Telefon</label>
                <input className="input" id="co-telefon" placeholder="07XX XXX XXX" />
              </div>
            </div>

            {mode === "livrare" && (
              <>
                <div className="field">
                  <label htmlFor="co-adresa">Adresă de livrare</label>
                  <input className="input" id="co-adresa" placeholder="Stradă, număr, bloc, apartament" />
                </div>
                <div className="field">
                  <label htmlFor="co-oras">Oraș</label>
                  <input className="input" id="co-oras" placeholder="București" />
                </div>
              </>
            )}

            <div className="field-row">
              <div className="field">
                <label htmlFor="co-data">Dată dorită</label>
                <input className="input" id="co-data" type="date" />
              </div>
              <div className="field">
                <label htmlFor="co-interval">Interval orar</label>
                <select className="select" id="co-interval">
                  <option>10:00 – 12:00</option>
                  <option>12:00 – 14:00</option>
                  <option>16:00 – 18:00</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="co-note">Observații pentru comandă (opțional)</label>
              <textarea className="textarea" id="co-note" placeholder="ex: sunați înainte de livrare" />
            </div>
          </div>

          <div className="form-card">
            <h3>Plata</h3>
            <div className="toggle-opt selected" style={{ cursor: "default" }}>
              Plată la livrare / ridicare
              <small>Numerar sau card la curier / la ridicare</small>
            </div>
            <div className="pay-note">
              💳 Plata online (card) vine într-o etapă viitoare. Momentan achiți doar la livrare sau la ridicarea din
              locație.
            </div>
          </div>
        </div>

        <aside className="summary-card">
          <h3>Comanda ta</h3>
          {/* TODO: randeaza liniile reale din cos */}
          <div className="summary-row"><span>Tort Red Velvet (1kg) × 1</span><span>160 lei</span></div>
          <div className="summary-row"><span>Eclere cu vanilie × 4</span><span>32 lei</span></div>
          <div className="summary-row"><span>Sărățele cu susan × 2</span><span>24 lei</span></div>
          <div className="summary-row"><span>Livrare</span><span>{deliveryFee} lei</span></div>
          <div className="summary-row summary-row--total"><span>Total</span><span>{total} lei</span></div>
          <button type="submit" className="btn btn--primary btn--block" style={{ marginTop: "18px" }}>
            Plasează comanda
          </button>
        </aside>
      </form>
    </div>
  );
}
