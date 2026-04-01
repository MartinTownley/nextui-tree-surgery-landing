import { reviews } from "@/data/reviews";

const stars = "★★★★★";

export default function HeroReviewCard() {
  const review = reviews[0];

  return (
    <div className="hidden md:flex flex-col justify-center items-center flex-1 px-8">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full">
        {/* Stars */}
        <div className="text-yellow-400 text-lg tracking-wide mb-2">{stars}</div>

        {/* Short text */}
        <p className="text-white/90 text-sm leading-relaxed mb-4">
          &ldquo;{review.shortText}&rdquo;
        </p>

        {/* Reviewer name + year */}
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm font-medium">{review.name}</span>
          <span className="text-white/40 text-xs">{review.year}</span>
        </div>
      </div>
    </div>
  );
}
