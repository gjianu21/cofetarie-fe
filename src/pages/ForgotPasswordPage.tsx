import CookieIllustration from "../components/CookieIllustration";
import "../styles/auth.css";

export default function ForgotPasswordPage() {
    return (
        <div className="auth-page">
            <div className="auth-shell">
                <div className="auth-form-col">
                    <div className="auth-logo">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="20" r="12" fill="#718355" />
                            <circle cx="26" cy="20" r="12" fill="#f6c9a0" opacity="0.9" />
                        </svg>
                    </div>

                    <h1 className="auth-title">Ai uitat parola?</h1>
                    <p className="auth-subtitle" style={{ textAlign: "left", margin: "-16px 0 24px" }}>
                        Introdu adresa de email și îți trimitem un link pentru resetarea parolei.
                    </p>

                    <form className="auth-form">
                        <div className="form-field">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Adresă de email"
                                autoComplete="email"
                            />
                        </div>

                        <button type="submit" className="auth-submit">
                            Trimite link de resetare
                        </button>
                    </form>

                    <p className="auth-footer">
                        Ți-ai amintit parola? <a href="/login">Autentifică-te</a>
                    </p>
                </div>

                <div className="auth-panel-col">
                    <p className="auth-panel-title">
                        Nicio grijă, se mai întâmplă — te ajutăm să revii repede!
                    </p>
                    <CookieIllustration />
                </div>
            </div>
        </div>
    );
}