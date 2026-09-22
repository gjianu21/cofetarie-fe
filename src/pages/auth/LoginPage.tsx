// src/pages/auth/LoginPage.tsx
// Nu mai e formular — autentificarea reala se intampla pe auth-server (Thymeleaf, port 9000),
// pornita prin BFF (cofetarie-be, /oauth2/authorization/cofetarie-bff). Pagina asta e doar
// punct de intrare/iesire: aici ajunge userul dupa logout (postLogoutRedirectUri din
// SecurityConfig), sau cand ProtectedRoute il trimite aici pentru ca nu e autentificat.
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import { OAUTH2_LOGIN_URL } from "../../config/oauth2";

export default function LoginPage() {
  return (
    <AuthLayout
      brandTitle="Bine ai revenit"
      brandText="Contul tău pentru comenzi la cofetăria noastră de familie."
    >
      <p className="formside__eyebrow">Bun venit</p>
      <h2>Autentificare</h2>
      <p className="formside__sub">Intră în cont ca să comanzi mai repede.</p>

      <a href={OAUTH2_LOGIN_URL} className="btn btn--primary btn--block">
        Autentifică-te
      </a>

      <p className="foot">
        Nu ai cont? <Link className="link" to="/register">Înregistrează-te</Link>
      </p>
    </AuthLayout>
  );
}