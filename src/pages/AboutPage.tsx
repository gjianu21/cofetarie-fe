// src/pages/AboutPage.tsx
import { shop } from "../data/products";
import LocationSection from "../components/LocationSection";

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Bine ai venit</p>
          <h1>Despre {shop.name}</h1>
          <p>{shop.tagline}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <p className="about__text">{shop.about}</p>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
