import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../api/auth";
import { ApiError } from "../../api/client";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Introdu adresa de email.");
      return;
    }

    setSubmitting(true);
    try {
      await forgotPassword({ email: trimmed });
      setSent(true); // mesaj neutru, indiferent dacă emailul există
    } catch (err) {
      setError(
        err instanceof ApiError && err.status === 400
          ? "Adresa de email nu este validă."
          : "A apărut o eroare. Încearcă din nou.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      brandTitle="Nicio grijă"
      brandText="Îți trimitem un link ca să-ți alegi o parolă nouă."
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="formside__eyebrow">Recuperare</p>
        <h2>Ai uitat parola?</h2>
        <p className="formside__sub">
          Scrie-ți adresa de email și îți trimitem un link de resetare.
        </p>

        {sent && (
          <div className="notice notice--ok">
            Dacă există un cont cu această adresă, vei primi în scurt timp un link de resetare.
          </div>
        )}
        {error && <div className="notice notice--err">{error}</div>}

        <div className="field">
          <label htmlFor="fp-email">Email</label>
          <input
            className="input"
            id="fp-email"
            type="email"
            placeholder="nume@exemplu.ro"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn btn--primary btn--block" type="submit" disabled={submitting}>
          {submitting ? "Se trimite..." : "Trimite link de resetare"}
        </button>

        <p className="foot">
          <Link className="link" to="/login">← Înapoi la autentificare</Link>
        </p>
      </form>
    </AuthLayout>
  );
}