import { useSearchParams } from "react-router-dom";
import CookieIllustration from "../components/CookieIllustration";
import "../styles/auth.css";

export default function ResetPasswordPage() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

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

                    <h1 className="auth-title">Setează o parolă nouă</h1>

                    {!token && (
                        <div className="auth-message error">
                            Link invalid sau expirat. Cere un nou link de resetare.
                        </div>
                    )}

                    <form className="auth-form">
                        <div className="form-field">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                placeholder="Parolă nouă"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="form-field">
                            <input
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                type="password"
                                placeholder="Confirmă parola nouă"
                                autoComplete="new-password"
                            />
                        </div>

                        <button type="submit" className="auth-submit" disabled={!token}>
                            Salvează parola
                        </button>
                    </form>

                    <p className="auth-footer">
                        <a href="/login">Înapoi la autentificare</a>
                    </p>
                </div>

                <div className="auth-panel-col">
                    <p className="auth-panel-title">
                        Aproape gata — încă un pas și ești din nou înăuntru!
                    </p>
                    <CookieIllustration />
                </div>
            </div>
        </div>
    );
}