import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useCurrentUser();

    if (loading) {
        return <div style={{ padding: 40, textAlign: "center" }}>Se încarcă...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}