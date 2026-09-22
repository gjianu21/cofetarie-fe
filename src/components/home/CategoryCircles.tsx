// src/components/home/CategoryCircles.tsx
// Cercurile de categorii. Primesc categoria activa si un callback de selectie.
import { categories } from "../../data/products";

interface Props {
  active: string;
  onSelect: (slug: string) => void;
}

export default function CategoryCircles({ active, onSelect }: Props) {
  const items = [{ slug: "toate", name: "Toate", icon: "☰" }, ...categories];

  return (
    <div className="cats">
      {items.map((c) => (
        <button
          key={c.slug}
          type="button"
          className="cat"
          aria-selected={active === c.slug}
          onClick={() => onSelect(c.slug)}
        >
          <span className="cat__circle">{c.icon}</span>
          <span className="cat__label">{c.name}</span>
        </button>
      ))}
    </div>
  );
}
