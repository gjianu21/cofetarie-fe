// src/pages/auth/ResetPasswordPage.tsx
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../api/auth";
import { ApiError } from "../../api/client";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordField from "../../components/auth/PasswordField";

type Status = "idle" | "submitting" | "success" | "error";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("Link invalid sau expirat.");
      setStatus("error");
      return;
    }
    if (password.length < 8) {
      setError("Parola trebuie să aibă minim 8 caractere.");
      return;
    }
    if (password !== confirm) {
      setError("Parolele nu coincid.");
      return;
    }

    setStatus("submitting");
    try {
      await resetPassword({ token, newPassword: password });
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof ApiError && err.status === 400
          ? err.message
          : "A apărut o eroare. Încearcă din nou.",
      );
      setStatus("error");
    }
  };

  const done = status === "success";

  return (
    <AuthLayout
      brandTitle="Aproape gata"
      brandText="Alege o parolă nouă și revii la comenzile tale."
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="formside__eyebrow">Parolă nouă</p>
        <h2>Setează o parolă nouă</h2>
        <p className="formside__sub">
          Alege o parolă nouă pentru contul tău. Linkul de resetare este valabil un timp limitat.
        </p>

        {done && (
          <div className="notice notice--ok">
            Parola a fost schimbată. Te poți autentifica acum.
          </div>
        )}
        {error && <div className="notice notice--err">{error}</div>}

        {!done && (
          <>
            <PasswordField
              id="rp-pass"
              label="Parolă nouă"
              placeholder="minim 8 caractere"
              showMeter
              value={password}
              onChange={setPassword}
            />
            <PasswordField
              id="rp-pass2"
              label="Confirmă parola nouă"
              placeholder="repetă parola"
              value={confirm}
              onChange={setConfirm}
            />
            <button
              className="btn btn--primary btn--block"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Se salvează..." : "Setează parola nouă"}
            </button>
          </>
        )}

        {status === "error" && (
          <p className="foot">
            <Link className="link" to="/forgot-password">Cere un link nou</Link>
          </p>
        )}

        <p className="foot">
          <Link className="link" to="/login">← Înapoi la autentificare</Link>
        </p>
      </form>
    </AuthLayout>
  );
}