import { Link, NavLink } from "react-router-dom";
import { OAUTH2_LOGIN_URL } from "../../config/oauth2";
import { useAuth } from "../../hooks/useAuth";
import { performLogout } from "../../utils/logout";

interface NavBarProps {
  cartCount: number;
  onToggleTheme: () => void;
}

export default function NavBar({ cartCount, onToggleTheme }: NavBarProps) {
  const { user } = useAuth();

  const handleLogout = () => {
    performLogout();
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          Dulce Alint
        </Link>

        <nav className="nav__links">
          <NavLink to="/" end className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}>
            Acasă
          </NavLink>
          <NavLink to="/despre" className={({ isActive }) => "nav__link" + (isActive ? " active" : "")}>
            Despre
          </NavLink>
        </nav>

        <div className="nav__right">
          <Link to="/cos" className="icon-btn" aria-label="Coș">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {user ? (
            <div className="nav-account">
              <Link to="/cont/comenzi" className="nav-account__link" title={user.email}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span className="nav-account__email">{user.email}</span>
              </Link>
              <button type="button" className="btn btn--ghost btn--sm" onClick={handleLogout}>
                Delogare
              </button>
            </div>
          ) : (
            <a href={OAUTH2_LOGIN_URL} className="btn btn--ghost btn--sm">
              Autentificare
            </a>
          )}

          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label="Comută tema">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}