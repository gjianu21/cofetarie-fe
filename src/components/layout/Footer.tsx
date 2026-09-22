// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { shop } from "../../data/products";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Link to="/" className="footer__brand" style={{ textDecoration: "none" }}>
            {shop.name.replace(/^Cofetăria\s+/, "")}
          </Link>
          <p className="footer__muted">{shop.address}</p>
        </div>
        <div className="footer__muted">
          <p>{shop.phone}</p>
          <p>{shop.email}</p>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {shop.name}. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
