// src/pages/HomePage.tsx
// Pagina principala. Compune sectiunile. Filtrul sta in query string (/?categorie=torturi).
import { useSearchParams } from "react-router-dom";
import AboutTeaser from "../components/home/AboutTeaser";
import CategoryCircles from "../components/home/CategoryCircles";
import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import PromoBanner from "../components/home/PromoBanner";
import { useCart } from "../context/cart-context";
import { products, type Product } from "../data/products";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const activeCategory = searchParams.get("categorie") ?? "toate";

  const handleSelect = (slug: string) => {
    if (slug === "toate") searchParams.delete("categorie");
    else searchParams.set("categorie", slug);
    setSearchParams(searchParams);
    document.getElementById("produse")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered =
    activeCategory === "toate"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  // Apelat doar pentru produsele fără variante (cele cu variante duc la pagina produsului)
  const handleAdd = (product: Product) => {
    addItem({
      productId: product.slug,
      name: product.name,
      unitPrice: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Alege după poftă</p>
            <h2>Categoriile noastre</h2>
          </div>
          <CategoryCircles active={activeCategory} onSelect={handleSelect} />
        </div>
      </section>

      <section className="section section--muted" id="produse">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Din vitrină</p>
            <h2>Produsele noastre</h2>
            <p>Apasă pe o categorie de mai sus ca să filtrezi lista.</p>
          </div>
          <ProductGrid products={filtered} onAdd={handleAdd} />
        </div>
      </section>

      <PromoBanner />
      <AboutTeaser />
    </>
  );
}