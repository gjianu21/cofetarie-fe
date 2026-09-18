import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../api/auth";
import { ApiError } from "../api/client";
import CakeIllustration from "../components/CakeIllustration";
import { registerSchema, type RegisterFormValues } from "../schemas/authSchemas";
import "../styles/auth.css";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const [serverError, setServerError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (values: RegisterFormValues) => {
        setServerError(null);
        try {
            await registerUser({ email: values.email, password: values.password });
            setSuccess(true);
        } catch (err) {
            if (err instanceof ApiError) {
                setServerError(err.message);
            } else {
                setServerError("Nu am putut crea contul. Încearcă din nou.");
            }
        }
    };

    if (success) {
        return (
            <div className="auth-page">
                <div className="auth-shell">
                    <div className="auth-form-col">
                        <h1 className="auth-title">Cont creat!</h1>
                        <p>
                            Ți-am trimis un email de confirmare. Verifică-ți inbox-ul și dă
                            click pe link pentru a-ți activa contul.
                        </p>
                    </div>

                    <div className="auth-panel-col">
                        <p className="auth-panel-title">Aproape gata!</p>
                        <CakeIllustration />
                    </div>
                </div>
            </div>
        );
    }

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

                    <h1 className="auth-title">Creează cont</h1>

                    {serverError && <div className="auth-message error">{serverError}</div>}

                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="form-field">
                            <input
                                type="email"
                                placeholder="Adresă de email"
                                autoComplete="email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <span className="field-error">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="form-field">
                            <input
                                type="password"
                                placeholder="Parolă"
                                autoComplete="new-password"
                                {...register("password")}
                            />
                            {errors.password && (
                                <span className="field-error">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="form-field">
                            <input
                                type="password"
                                placeholder="Confirmă parola"
                                autoComplete="new-password"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <span className="field-error">{errors.confirmPassword.message}</span>
                            )}
                        </div>

                        <button type="submit" className="auth-submit" disabled={isSubmitting}>
                            {isSubmitting ? "Se creează contul..." : "Creează cont"}
                        </button>
                    </form>

                    <p className="auth-footer">
                        Ai deja cont? <a href="/login">Autentifică-te</a>
                    </p>
                </div>

                <div className="auth-panel-col">
                    <p className="auth-panel-title">
                        Bine ai venit!
                    </p>
                    <CakeIllustration />
                </div>
            </div>
        </div>
    );
}