// src/components/home/ProductGrid.tsx
import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  onAdd?: (product: Product) => void;
}

export default function ProductGrid({ products, onAdd }: Props) {
  if (products.length === 0) {
    return <p className="empty">Nu există produse în această categorie momentan.</p>;
  }
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
