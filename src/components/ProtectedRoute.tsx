// src/components/ProtectedRoute.tsx
// Paznic de rute: cere autentificare si, optional, un rol anume (ex. ADMIN).
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
    role?: "ADMIN";
}

export default function ProtectedRoute({ role }: Props) {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <p style={{ padding: "60px", textAlign: "center", color: "var(--muted)" }}>
                Se verifică sesiunea...
            </p>
        );
    }

    if (!user) {
        // pastram unde voia sa ajunga, ca dupa login sa-l trimitem inapoi acolo
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (role && user.role !== role) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}