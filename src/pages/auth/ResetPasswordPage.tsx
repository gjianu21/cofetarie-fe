// src/pages/auth/ResetPasswordPage.tsx
// PREZENTATIONAL. Token-ul vine din URL (?token=...), la fel ca in versiunea ta actuala.
import { Link, useSearchParams } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordField from "../../components/auth/PasswordField";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // TODO: trimite token-ul la /api/auth/reset-password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: valideaza ca parolele coincid, apoi apiFetch("/api/auth/reset-password", { token, password })
    void token;
  };

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

        {/* TODO: mesaje
        <div className="notice notice--ok">Parola a fost schimbată. Te poți autentifica acum.</div>
        <div className="notice notice--err">Link invalid sau expirat.</div> */}

        <PasswordField id="rp-pass" label="Parolă nouă" placeholder="minim 8 caractere" showMeter />
        <PasswordField id="rp-pass2" label="Confirmă parola nouă" placeholder="repetă parola" />

        <button className="btn btn--primary btn--block" type="submit">
          Setează parola nouă
        </button>

        <p className="foot">
          <Link className="link" to="/login">← Înapoi la autentificare</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
