// src/pages/OrderConfirmationPage.tsx
import { Link, useParams } from "react-router-dom";

export default function OrderConfirmationPage() {
  const { orderId } = useParams<{ orderId: string }>();
  // TODO: optional — GET /api/orders/:orderId ca sa arati data reala de livrare/ridicare

  return (
    <div className="container section">
      <div className="confirm">
        <div className="confirm__icon">✓</div>
        <h1 style={{ fontSize: "1.8rem" }}>Comanda a fost plasată!</h1>
        <p className="confirm__num">Comandă #{orderId}</p>
        <p style={{ color: "var(--muted)" }}>
          Îți trimitem confirmarea și pe email. Te anunțăm când comanda e în pregătire și când e gata de livrare.
        </p>
        <div className="confirm-steps">
          <ul>
            <li>✓ Comandă înregistrată</li>
            <li>Confirmare din partea cofetăriei (în curând)</li>
            <li>Pregătire comandă</li>
            <li>Livrare / ridicare — conform datei alese la checkout</li>
          </ul>
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/cont/comenzi" className="btn btn--primary">
            Vezi comenzile mele
          </Link>
          <Link to="/" className="btn btn--ghost">
            Înapoi la cofetărie
          </Link>
        </div>
      </div>
    </div>
  );
}
