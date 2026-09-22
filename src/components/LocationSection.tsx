// src/components/LocationSection.tsx
import { shop } from "../data/products";

export default function LocationSection() {
  return (
    <section className="section section--muted" id="locatie">
      <div className="container location">
        <div>
          <h2>Unde ne găsești</h2>
          <p className="location__line">
            <strong>Adresă:</strong> {shop.address}
          </p>
          <p className="location__line">
            <strong>Telefon:</strong> {shop.phone}
          </p>
          <p className="location__line">
            <strong>Email:</strong> {shop.email}
          </p>
          {/* Mai tarziu: iframe Google Maps sau imagine cu harta */}
        </div>
        <div>
          <h2>Program</h2>
          <ul className="hours">
            {shop.hours.map((h) => (
              <li key={h.day} className="hours__row">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
