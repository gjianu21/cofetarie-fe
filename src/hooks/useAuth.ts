import { useEffect, useState } from "react";
import { apiFetch } from "../api/client";

export interface AuthUser {
    email: string;
    role: "USER" | "ADMIN";
}

interface AuthState {
    user: AuthUser | null;
    isLoading: boolean;
}

export function useAuth(): AuthState {
    const [state, setState] = useState<AuthState>({ user: null, isLoading: true });

    useEffect(() => {
        let cancelled = false;

        async function check() {
            try {
                const user = await apiFetch<AuthUser>("/api/auth/me");
                if (!cancelled) setState({ user, isLoading: false });
            } catch {
                if (!cancelled) setState({ user: null, isLoading: false });
            }
        }

        check();
        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}