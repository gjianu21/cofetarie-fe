import { Link } from "react-router-dom";

export default function EmailVerificationFailedPage() {
    return (
        <div className="container section">
            <div className="confirm">
                <div className="confirm__icon confirm__icon--err">!</div>
                <h1 style={{ fontSize: "1.8rem" }}>Linkul nu mai este valabil</h1>
                <p style={{ color: "var(--muted)" }}>
                    Linkul de confirmare a expirat sau a fost deja folosit. Poți încerca să-ți creezi contul din nou.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "26px" }}>
                    <Link to="/register" className="btn btn--primary">Creează cont din nou</Link>
                    <Link to="/login" className="btn btn--ghost">Autentificare</Link>
                </div>
            </div>
        </div>
    );
}