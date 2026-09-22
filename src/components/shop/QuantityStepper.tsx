// src/components/shop/QuantityStepper.tsx
// Prezentational, controlat: primeste value + onChange. Poate fi folosit si necontrolat cu useState local.
interface Props {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  size?: "md" | "sm";
}

export default function QuantityStepper({ value, onChange, min = 1, size = "md" }: Props) {
  return (
    <div className={`qty-stepper ${size === "sm" ? "qty-stepper--sm" : ""}`}>
      <button type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label="Scade cantitatea">
        −
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} aria-label="Crește cantitatea">
        +
      </button>
    </div>
  );
}
