import type { ForgotPasswordRequest, RegisterRequest, ResetPasswordRequest } from "../types/auth";
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


export function forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    return apiFetch<void>("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export function resetPassword(payload: ResetPasswordRequest): Promise<void> {
    return apiFetch<void>("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}