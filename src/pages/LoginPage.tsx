import EclairIllustration from "../components/EclairIllustration";
import "../styles/auth.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function LoginPage() {
    const handleLogin = () => {
        window.location.href = `${BASE_URL}/oauth2/authorization/cofetarie-bff`;
    };

    return (
        <div className="auth-page">
            <div className="auth-shell auth-shell--reverse">
                <div className="auth-form-col">
                    <div className="auth-logo">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="20" r="12" fill="#718355" />
                            <circle cx="26" cy="20" r="12" fill="#f6c9a0" opacity="0.9" />
                        </svg>
                    </div>

                    <h1 className="auth-title">Autentificare</h1>
                    <p className="auth-subtitle" style={{ textAlign: "left", margin: "-16px 0 24px" }}>
                        Vei fi redirecționat către pagina securizată de login.
                    </p>

                    <button type="button" className="auth-submit" onClick={handleLogin}>
                        Continuă spre autentificare
                    </button>

                    <p className="auth-footer">
                        Nu ai cont? <a href="/register">Creează unul</a>
                    </p>
                </div>

                <div className="auth-panel-col">
                    <p className="auth-panel-title">Un răsfăț dulce te așteaptă la fiecare vizită!</p>
                    <EclairIllustration />
                </div>
            </div>
        </div>
    );
}