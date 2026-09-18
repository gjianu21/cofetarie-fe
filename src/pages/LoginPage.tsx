import EclairIllustration from "../components/EclairIllustration";
import "../styles/auth.css";

export default function LoginPage() {
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

                        <div className="form-field">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Parolă"
                                autoComplete="current-password"
                            />
                        </div>

                        <p className="auth-footer" style={{ marginTop: 8 }}>
                            <a href="/forgot-password">Ai uitat parola?</a>
                        </p>

                        <button type="submit" className="auth-submit">
                            Autentificare
                        </button>
                    </form>

                    <p className="auth-footer">
                        Nu ai cont? <a href="/register">Creează unul</a>
                    </p>
                </div>

                <div className="auth-panel-col">
                    <p className="auth-panel-title">
                        Un răsfăț dulce te așteaptă la fiecare vizită!
                    </p>
                    <EclairIllustration />
                </div>
            </div>
        </div>
    );
}