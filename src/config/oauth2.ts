// URL-ul care porneste fluxul OAuth2 Authorization Code prin BFF (cofetarie-be).
// NU e un apel apiFetch — e o navigare completa de pagina (browser-ul iese din SPA),
// pentru ca trebuie sa treaca prin cofetarie-be -> auth-server -> inapoi la cofetarie-be,
// unde se creeaza sesiunea (BE-SESSION), inainte sa ajunga inapoi in React.
const BE_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const OAUTH2_LOGIN_URL = `${BE_BASE_URL}/oauth2/authorization/cofetarie-bff`;