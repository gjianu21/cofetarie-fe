// src/components/home/Stars.tsx
// Afiseaza rating-ul cu stele (doar vizual deocamdata).
interface Props {
  rating: number; // 0..5
}

export default function Stars({ rating }: Props) {
  const chars: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) chars.push("★");
    else if (i - 0.5 === rating) chars.push("⯪");
    else chars.push("☆");
  }
  return (
    <div className="stars" aria-label={`Rating ${rating} din 5`}>
      {chars.join("")} <span>{rating.toFixed(1)}</span>
    </div>
  );
}
