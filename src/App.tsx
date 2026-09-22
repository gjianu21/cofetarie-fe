import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";

// --- pagini publice ---
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ProductPage from "./pages/ProductPage";

// --- auth ---
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// --- cont (necesită autentificare) ---
import AccountOrdersPage from "./pages/account/OrdersPage";

// --- admin (necesită rol ADMIN) ---
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import OrderDetailPage from "./pages/admin/OrderDetailPage";
import AdminOrdersPage from "./pages/admin/OrdersPage";
import ProductFormPage from "./pages/admin/ProductFormPage";
import ProductsPage from "./pages/admin/ProductsPage";

import EmailVerificationFailedPage from "./pages/auth/EmailVerificationFailedPage";
import EmailVerifiedPage from "./pages/auth/EmailVerifiedPage";
import "./styles/theme-extra.css";
import "./styles/theme.css";

const AUTH_ROUTES = ["/login", "/register", "/forgot-password", "/reset-password"];

function Shell() {
  const location = useLocation();
  const isAuth = AUTH_ROUTES.includes(location.pathname);
  const isAdmin = location.pathname.startsWith("/admin");

  const [dark, setDark] = useState<boolean | null>(null);
  const toggleTheme = () => {
    const next = dark === null ? !window.matchMedia("(prefers-color-scheme: dark)").matches : !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* NavBar/Footer publice — nu apar pe /login, /register, etc. si nici in admin (are propriul sidebar) */}
      {!isAuth && !isAdmin && <NavBar cartCount={0} onToggleTheme={toggleTheme} />}

      <main>
        <Routes>
          {/* ---------- rute publice ---------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/despre" element={<AboutPage />} />
          <Route path="/produse/:slug" element={<ProductPage />} />
          <Route path="/cos" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/comanda-plasata/:orderId" element={<OrderConfirmationPage />} />

          {/* ---------- auth (publice) ---------- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/email-verified" element={<EmailVerifiedPage />} />
          <Route path="/email-verification-failed" element={<EmailVerificationFailedPage />} />

          {/* ---------- rute care cer doar autentificare ---------- */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cont/comenzi" element={<AccountOrdersPage />} />
          </Route>

          {/* ---------- rute care cer rol ADMIN ---------- */}
          <Route element={<ProtectedRoute role="ADMIN" />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="produse" element={<ProductsPage />} />
              <Route path="produse/nou" element={<ProductFormPage />} />
              <Route path="produse/:slug" element={<ProductFormPage />} />
              <Route path="comenzi" element={<AdminOrdersPage />} />
              <Route path="comenzi/:orderId" element={<OrderDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </main>

      {!isAuth && !isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}