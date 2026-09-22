// src/components/shop/StatusBadge.tsx
export type OrderStatus = "noua" | "confirmata" | "pregatire" | "livrata" | "anulata";

const LABELS: Record<OrderStatus, string> = {
  noua: "Nouă",
  confirmata: "Confirmată",
  pregatire: "În pregătire",
  livrata: "Livrată",
  anulata: "Anulată",
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  return <span className={`badge badge--${status}`}>{LABELS[status]}</span>;
}
