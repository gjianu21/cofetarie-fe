// src/components/home/ProductCard.tsx
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import Stars from "./Stars";

interface Props {
  product: Product;
  onAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
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
          {/* TODO: onAdd va apela addItem din CartContext */}
          <button type="button" className="add-btn" onClick={() => onAdd?.(product)}>
            Adaugă
          </button>
        </div>
      </div>
    </article>
  );
}
