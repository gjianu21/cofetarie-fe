// src/pages/ProductPage.tsx
// PREZENTATIONAL. Cand adaugi CartContext, handleAdd trimite (product, variant, qty, cakeMessage) catre addItem().
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { productVariants } from "../data/variants";
import QuantityStepper from "../components/shop/QuantityStepper";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const variants = slug ? productVariants[slug] : undefined;

  const [variantId, setVariantId] = useState(variants?.[1]?.id ?? variants?.[0]?.id);
  const [qty, setQty] = useState(1);
  const [cakeMessage, setCakeMessage] = useState("");

  if (!product) {
    return (
      <div className="container section">
        <p className="empty-state">Produsul nu a fost găsit.</p>
        <p style={{ textAlign: "center" }}>
          <Link to="/" className="link">← Înapoi la produse</Link>
        </p>
      </div>
    );
  }

  const selectedVariant = variants?.find((v) => v.id === variantId);
  const displayPrice = selectedVariant?.price ?? product.price;

  const handleAdd = () => {
    // TODO: addItem({ productId: product.id, variantId, qty, cakeMessage })
    console.log("adaugă în coș", { slug: product.slug, variantId, qty, cakeMessage });
  };

  return (
    <div className="container section">
      <p className="breadcrumb">
        <Link to="/">Acasă</Link> / <Link to={`/?categorie=${product.categorySlug}`}>{product.categorySlug}</Link> / {product.name}
      </p>

      <div className="product">
        <div className="product__image">
          {product.imageUrl ? <img src={product.imageUrl} alt={product.name} /> : <span>{product.name}</span>}
        </div>

        <div>
          <p className="product__cat">{product.categorySlug}</p>
          <h1 className="product__name">{product.name}</h1>
          <div className="product__price">{displayPrice} lei</div>
          <p className="product__desc">{product.description}</p>

          {variants && (
            <div className="variant-group">
              <label className="variant-group__label">Alege mărimea</label>
              <div className="chips">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`chip ${variantId === v.id ? "selected" : ""}`}
                    onClick={() => setVariantId(v.id)}
                  >
                    {v.label}
                    <small>{v.helper} · {v.price} lei</small>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* mesaj personalizat — relevant doar pentru torturi, dar il lasam disponibil generic */}
          <div className="variant-group">
            <label className="variant-group__label" htmlFor="cakeMsg">Mesaj pe tort (opțional)</label>
            <input
              className="input"
              id="cakeMsg"
              placeholder="ex: La mulți ani, Ana!"
              value={cakeMessage}
              onChange={(e) => setCakeMessage(e.target.value)}
            />
          </div>

          <div className="product__actions">
            <QuantityStepper value={qty} onChange={setQty} />
            <button type="button" className="btn btn--primary" onClick={handleAdd} disabled={!product.available}>
              {product.available ? "Adaugă în coș" : "Indisponibil"}
            </button>
          </div>

          <div className="info-box">
            <h3>Ingrediente &amp; alergeni</h3>
            {/* TODO: cand ai campul in backend, inlocuieste textul static */}
            <p>Conține: gluten, ouă, lactate. Poate conține urme de nuci.</p>
          </div>
          <div className="info-box">
            <h3>Comandă din timp</h3>
            <p>Produsele de tip tort se pregătesc la comandă — comandă cu cel puțin 24h înainte de data dorită.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
