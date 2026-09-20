export interface RegisterRequest {
    email: string;
    password: string;
}

export interface ApiErrorResponse {
    message: string;
}

export interface ForgotPasswordRequest {
    email: string;
}

export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
}