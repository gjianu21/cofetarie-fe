// src/components/home/Hero.tsx
import { Link } from "react-router-dom";
import { shop } from "../../data/products";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Proaspăt în fiecare zi</p>
          <h1 className="hero__title">
            Dulciuri de casă din <em>{shop.name.replace(/^Cofetăria\s+/, "")}</em>
          </h1>
          <p className="hero__lead">{shop.tagline}</p>
          <div className="hero__actions">
            <a href="#produse" className="btn btn--primary">
              Vezi produsele
            </a>
            <Link to="/despre" className="btn btn--ghost">
              Despre noi
            </Link>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__dot" />
          <span>Vitrina zilei</span>
          {/* Cand ai poza: <img src="/hero.jpg" alt="Vitrina cofetariei" /> */}
          <div className="hero__float">
            Torturi la comandă
            <b>cu o zi înainte</b>
          </div>
        </div>
      </div>
    </header>
  );
}
