// src/pages/auth/RegisterPage.tsx
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api/auth";
import { ApiError } from "../../api/client";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordField from "../../components/auth/PasswordField";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Parolele nu coincid.");
      return;
    }
    if (password.length < 8) {
      setError("Parola trebuie să aibă minim 8 caractere.");
      return;
    }

    setLoading(true);
    try {
      await register({ email, password });
      setSuccess(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Nu am putut contacta serverul. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <AuthLayout
        brandTitle="Alătură-te nouă"
        brandText="Creează-ți un cont ca să comanzi mai ușor la cofetăria noastră."
      >
        <p className="formside__eyebrow">Cont nou</p>
        <h2>Verifică-ți emailul</h2>
        <div className="notice notice--ok">
          Cont creat. Ți-am trimis un email de confirmare — contul devine activ după ce dai click pe link.
        </div>
        <p className="foot">
          <Link className="link" to="/login">← Înapoi la autentificare</Link>
        </p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      brandTitle="Alătură-te nouă"
      brandText="Creează-ți un cont ca să comanzi mai ușor la cofetăria noastră."
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="formside__eyebrow">Cont nou</p>
        <h2>Creează-ți cont</h2>
        <p className="formside__sub">
          Îți trimitem un email de confirmare — contul devine activ după ce îl confirmi.
        </p>

        {error && <div className="notice notice--err">{error}</div>}

        <div className="field">
          <label htmlFor="reg-email">Email</label>
          <input
            className="input"
            id="reg-email"
            type="email"
            placeholder="nume@exemplu.ro"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <PasswordField
          id="reg-pass"
          label="Parolă"
          placeholder="minim 8 caractere"
          showMeter
          value={password}
          onChange={setPassword}
        />
        <p className="hint" style={{ marginTop: "-10px", marginBottom: "18px" }}>
          Folosește litere, cifre și un simbol.
        </p>

        <PasswordField
          id="reg-pass2"
          label="Confirmă parola"
          placeholder="repetă parola"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <button className="btn btn--primary btn--block" type="submit" disabled={loading}>
          {loading ? "Se creează contul..." : "Creează cont"}
        </button>

        <p className="foot">
          Ai deja cont? <Link className="link" to="/login">Autentifică-te</Link>
        </p>
      </form>
    </AuthLayout>
  );
}