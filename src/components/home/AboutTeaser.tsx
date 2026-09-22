// src/components/home/AboutTeaser.tsx
import { Link } from "react-router-dom";
import { shop } from "../../data/products";

export default function AboutTeaser() {
  return (
    <section className="section">
      <div className="container about-teaser">
        <div className="about-teaser__art">
          <span>Cofetăria noastră</span>
        </div>
        <div>
          <p className="eyebrow">Cine suntem</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", marginBottom: "14px" }}>
            O cofetărie de familie din București
          </h2>
          <p>{shop.about}</p>
          <Link to="/despre" className="btn btn--brown" style={{ marginTop: "8px" }}>
            Mai multe despre noi
          </Link>
        </div>
      </div>
    </section>
  );
}
