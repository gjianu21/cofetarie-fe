import CakeIllustration from "../components/CakeIllustration";
import CookieIllustration from "../components/CookieIllustration";
import EclairIllustration from "../components/EclairIllustration";
import "../styles/home.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface Product {
    id: string;
    name: string;
    price: string;
    badge?: string;
    description: string;
    illustration: React.ReactNode;
}

const PRODUCTS: Product[] = [
    {
        id: "tort-fructe-padure",
        name: "Tort cu fructe de pădure",
        price: "89 RON",
        badge: "Cel mai vândut",
        description:
            "Blat pufos, cremă mascarpone și un strat generos de fructe de pădure proaspete.",
        illustration: <CakeIllustration />,
    },
    {
        id: "eclair-clasic",
        name: "Eclair clasic",
        price: "14 RON",
        description:
            "Foietaj crocant, umplut cu cremă de vanilie și glazură fină de ciocolată.",
        illustration: <EclairIllustration />,
    },
    {
        id: "fursecuri-ciocolata",
        name: "Fursecuri cu ciocolată",
        price: "6 RON/buc",
        badge: "Nou",
        description:
            "Fursecuri artizanale cu bucăți generoase de ciocolată belgiană.",
        illustration: <CookieIllustration />,
    },
];

export default function HomePage() {
    const handleLogout = () => {
        window.location.href = `${BASE_URL}/api/auth/logout`;
    };

    return (
        <div className="home-page">
            <nav className="home-nav">
                <div className="home-nav-brand">
                    <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="17" stroke="#718355" strokeWidth="2" />
                        <path
                            d="M11 20c0-4 3-7 7-7s7 3 7 7"
                            stroke="#718355"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle cx="18" cy="12" r="2" fill="#c0392b" />
                    </svg>
                    <span>Cofetărie</span>
                </div>

                <div className="home-nav-user">
                    <span>Bine ai venit!</span>
                    <button className="home-nav-logout" type="button" onClick={handleLogout}>
                        Deconectare
                    </button>
                </div>
            </nav>

            <header className="home-hero">
                <div className="home-hero-text">
                    <p className="home-hero-eyebrow">Cofetărie artizanală</p>
                    <h1 className="home-hero-title">
                        Dulciuri făcute cu grijă, în fiecare zi
                    </h1>
                    <p className="home-hero-subtitle">
                        De la torturi personalizate până la fursecuri proaspete, aducem
                        atelierul cofetăriei direct la tine acasă.
                    </p>
                </div>
                <div className="home-hero-illustrations">
                    <CakeIllustration />
                    <EclairIllustration />
                    <CookieIllustration />
                </div>
            </header>

            <section className="home-section">
                <h2 className="home-section-title">Produsele noastre</h2>
                <p className="home-section-subtitle">
                    O selecție din ce găsești în vitrina noastră chiar acum.
                </p>

                <div className="home-product-grid">
                    {PRODUCTS.map((product) => (
                        <div className="home-product-card" key={product.id}>
                            {product.badge && (
                                <span className="home-product-badge">{product.badge}</span>
                            )}
                            {product.illustration}
                            <h3 className="home-product-name">{product.name}</h3>
                            <p className="home-product-desc">{product.description}</p>
                            <span className="home-product-price">{product.price}</span>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Cofetărie. Toate drepturile rezervate.</p>
            </footer>
        </div>
    );
}