// src/components/auth/PasswordField.tsx
// Camp de parola cu buton arata/ascunde si (optional) indicator de putere.
// Starea de aici e pur vizuala. Valoarea o controlezi din pagina (value + onChange) cand adaugi logica.
import { useState } from "react";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  showMeter?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}

function strength(pw: string): number {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s; // 0..4
}

export default function PasswordField({
  id, label, placeholder, autoComplete = "new-password", showMeter, value, onChange,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [local, setLocal] = useState("");
  const pw = value ?? local;

  const s = strength(pw);
  const pct = [8, 35, 60, 80, 100][s];
  const color = s < 2 ? "var(--danger)" : s < 4 ? "var(--gold)" : "var(--grass)";

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="inputwrap">
        <input
          className="input"
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={pw}
          onChange={(e) => {
            setLocal(e.target.value);
            onChange?.(e.target.value);
          }}
        />
        <button type="button" className="peek" onClick={() => setVisible((v) => !v)}>
          {visible ? "ascunde" : "arată"}
        </button>
      </div>
      {showMeter && (
        <div className="pw-meter">
          <i style={{ width: `${pct}%`, background: color }} />
        </div>
      )}
    </div>
  );
}
