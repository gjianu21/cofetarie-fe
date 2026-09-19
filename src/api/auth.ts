import type { RegisterRequest } from "../types/auth";
import { apiFetch } from "./client";

export function register(payload: RegisterRequest): Promise<void> {
    return apiFetch<void>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export function logout(): Promise<void> {
    return apiFetch<void>("/api/auth/logout", {
        method: "POST",
    });
}