const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class ApiError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export async function apiFetch<T>(
    path: string,
    options: RequestInit = {},
): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        let message = "A apărut o eroare neașteptată.";
        try {
            const data = await response.json();
            message = data.message ?? message;
        } catch {
            // corpul răspunsului nu era JSON valid — păstrăm mesajul default
        }
        throw new ApiError(message, response.status);
    }

    if (response.status === 204 || response.status === 201) {
        return undefined as T;
    }

    return response.json();
}