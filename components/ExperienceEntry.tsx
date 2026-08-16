import type { Experience } from "@/data/experiences";
import Link from "next/link";

interface ExperienceEntryProps {
  experience: Experience;
  number: number;
}

export default function ExperienceEntry({ experience, number }: ExperienceEntryProps) {
  const numberStr = String(number).padStart(2, "0");

  return (
    <article className="py-12 md:py-16 border-b" style={{ borderColor: 'var(--border-color)' }}>
      {/* Entry number and company */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-baseline gap-4 md:gap-6 mb-3">
          <span 
            className="text-3xl md:text-4xl font-bold hover:opacity-60 transition-opacity cursor-default"
            style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-playfair-display)' }}
          >
            {numberStr}
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
              {experience.company}
            </h2>
            <p className="text-base mt-1" style={{ color: 'var(--text-secondary)' }}>
              {experience.role}
            </p>
          </div>
        </div>
      </div>

      {/* Framing statement */}
      <p className="label mb-4" style={{ color: 'var(--accent-color)' }}>
        {experience.framing}
      </p>

      {/* Description */}
      <p className="text-base leading-relaxed max-w-3xl mb-6 md:mb-8">
        {experience.problem}
      </p>

      {/* Read more link */}
      <Link
        href={`/experience/${experience.slug}`}
        className="inline-flex items-center text-sm font-semibold hover:underline transition-all"
        style={{ color: 'var(--accent-color)' }}
      >
        Read full story
        <span className="ml-2">→</span>
      </Link>
    </article>
  );
}
