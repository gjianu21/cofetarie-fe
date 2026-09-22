// src/components/auth/AuthLayout.tsx
// Cardul split (panou verde in stanga + formular in dreapta), refolosit de toate paginile de auth.
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { shop } from "../../data/products";

interface Props {
  brandTitle: string;
  brandText: string;
  children: ReactNode; // formularul (partea din dreapta)
}

export default function AuthLayout({ brandTitle, brandText, children }: Props) {
  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <aside className="brandside">
          <div>
            <Link to="/" className="brandside__logo" style={{ textDecoration: "none" }}>
              {shop.name.replace(/^Cofetăria\s+/, "")}
            </Link>
            <h2 className="brandside__title">{brandTitle}</h2>
            <p className="brandside__text">{brandText}</p>
          </div>
          <ul className="brandside__list">
            <li>Comenzi mai rapide</li>
            <li>Istoric comenzi</li>
            <li>Oferte pentru clienți</li>
          </ul>
        </aside>

        <section className="formside">{children}</section>
      </div>
    </div>
  );
}
