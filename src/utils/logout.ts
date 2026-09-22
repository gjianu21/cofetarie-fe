function readCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}

export function performLogout() {
    const token = readCookie("XSRF-TOKEN");
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`;

    if (token) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "_csrf";
        input.value = token;
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}