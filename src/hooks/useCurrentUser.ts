import { useEffect, useState } from "react";
import { ApiError, apiFetch } from "../api/client";

interface CurrentUser {
    email: string;
}

export function useCurrentUser() {
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch<CurrentUser>("/api/me")
            .then(setUser)
            .catch((err) => {
                if (!(err instanceof ApiError && err.status === 401)) {
                    console.error(err);
                }
                setUser(null);
            })
            .finally(() => setLoading(false));
    }, []);

    return { user, loading };
}