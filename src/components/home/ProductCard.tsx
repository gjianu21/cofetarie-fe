// src/components/home/ProductCard.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import { productVariants } from "../../data/variants";
import Stars from "./Stars";

interface Props {
  product: Product;
  onAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  const [added, setAdded] = useState(false);
  const hasVariants = (productVariants[product.slug]?.length ?? 0) > 0;

  const handleAdd = () => {
    onAdd?.(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="card">
      {/* imaginea + numele duc spre pagina de produs */}
      <Link to={`/produse/${product.slug}`} className="card__link">
        <div className="card__image">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} loading="lazy" />
          ) : (
            <span className="card__ph">{product.name}</span>
          )}
          {product.discount && <span className="card__badge">{product.discount}</span>}
        </div>
      </Link>

      <div className="card__body">
        <Stars rating={product.rating} />
        <Link to={`/produse/${product.slug}`} className="card__link">
          <h3 className="card__name">{product.name}</h3>
        </Link>
        <p className="card__desc">{product.description}</p>
        <div className="card__foot">
          <span className="card__price">{product.price} lei</span>
          {!product.available ? (
            <button type="button" className="add-btn" disabled>
              Indisponibil
            </button>
          ) : hasVariants ? (
            <Link to={`/produse/${product.slug}`} className="add-btn">
              Alege mărimea
            </Link>
          ) : (
            <button type="button" className="add-btn" onClick={handleAdd}>
              {added ? "Adăugat ✓" : "Adaugă"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}