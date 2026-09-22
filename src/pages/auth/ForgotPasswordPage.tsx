// src/pages/auth/ForgotPasswordPage.tsx
// PREZENTATIONAL. Pastreaza raspunsul anti-enumerare: acelasi mesaj indiferent daca emailul exista.
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPasswordPage() {
  // TODO(logica ta): useState(email), handleSubmit -> apiFetch("/api/auth/forgot-password", ...)
  // Contractul apiFetch trateaza 204 ca succes fara continut (proxy-ul normalizeaza statusul).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: apel forgot-password + afiseaza mereu mesajul neutru de mai jos
  };

  return (
    <AuthLayout
      brandTitle="Nicio grijă"
      brandText="Îți trimitem un link ca să-ți alegi o parolă nouă."
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="formside__eyebrow">Recuperare</p>
        <h2>Ai uitat parola?</h2>
        <p className="formside__sub">Scrie-ți adresa de email și îți trimitem un link de resetare.</p>

        {/* TODO: dupa submit, arata mereu acest mesaj (anti user-enumeration):
        <div className="notice notice--ok">
          Dacă există un cont cu această adresă, vei primi în scurt timp un link de resetare.
        </div> */}

        <div className="field">
          <label htmlFor="fp-email">Email</label>
          <input className="input" id="fp-email" type="email" placeholder="nume@exemplu.ro" autoComplete="email" />
        </div>

        <button className="btn btn--primary btn--block" type="submit">
          Trimite link de resetare
        </button>

        <p className="foot">
          <Link className="link" to="/login">← Înapoi la autentificare</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
