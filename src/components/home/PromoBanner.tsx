// src/components/home/PromoBanner.tsx
import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section className="promo">
      <div className="container promo__inner">
        <div>
          <h2>Comenzi pentru evenimente</h2>
          <p>Torturi personalizate și platouri cu sărate. Sună-ne cu o zi înainte.</p>
        </div>
        <Link to="/despre" className="btn btn--ghost" style={{ borderColor: "#fff", color: "#fff" }}>
          Contact &amp; program
        </Link>
      </div>
    </section>
  );
}
