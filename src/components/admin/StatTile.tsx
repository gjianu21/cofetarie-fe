// src/components/admin/StatTile.tsx
interface Props {
  label: string;
  value: string;
  delta?: string;
  deltaColor?: string; // ex: "var(--danger)" sau "var(--gold)"; default = verde (pozitiv)
}

export default function StatTile({ label, value, delta, deltaColor }: Props) {
  return (
    <div className="stat-tile">
      <div className="stat-tile__label">{label}</div>
      <div className="stat-tile__value">{value}</div>
      {delta && (
        <div className="stat-tile__delta" style={deltaColor ? { color: deltaColor } : undefined}>
          {delta}
        </div>
      )}
    </div>
  );
}
