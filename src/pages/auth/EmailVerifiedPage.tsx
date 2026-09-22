import { Link } from "react-router-dom";

export default function EmailVerifiedPage() {
    return (
        <div className="container section">
            <div className="confirm">
                <div className="confirm__icon">✓</div>
                <h1 style={{ fontSize: "1.8rem" }}>Mulțumim că ți-ai creat cont!</h1>
                <p style={{ color: "var(--muted)" }}>
                    Contul tău e activ acum. Hai să continuăm comanda — te așteptăm în cofetărie.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "26px" }}>
                    <Link to="/" className="btn btn--primary">Continuă comanda</Link>
                    <Link to="/login" className="btn btn--ghost">Sau autentifică-te</Link>
                </div>
            </div>
        </div>
    );
}