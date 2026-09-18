import { z } from "zod";

export const registerSchema = z
    .object({
        email: z.string().min(1, "Emailul este obligatoriu").email("Adresă de email invalidă"),
        password: z.string().min(8, "Parola trebuie să aibă minim 8 caractere"),
        confirmPassword: z.string().min(1, "Confirmă parola"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Parolele nu coincid",
        path: ["confirmPassword"],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;