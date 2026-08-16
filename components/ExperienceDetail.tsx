import type { Experience } from "@/data/experiences";
import Link from "next/link";

interface ExperienceDetailProps {
  experience: Experience;
  prevSlug?: string;
  nextSlug?: string;
}

export default function ExperienceDetail({ experience, prevSlug, nextSlug }: ExperienceDetailProps) {
  return (
    <article className="w-full">
      {/* Header section */}
      <section className="w-full px-6 py-16 md:py-24 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="mx-auto max-w-4xl">
          {/* Company and role */}
          <p className="label mb-6" style={{ color: 'var(--text-secondary)' }}>
            {experience.role}
          </p>
          
          <h1 
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-playfair-display)' }}
          >
            {experience.company}
          </h1>

          {/* Framing statement */}
          <p 
            className="text-2xl md:text-3xl leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair-display)', color: 'var(--accent-color)' }}
          >
            {experience.framing}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="w-full px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
          {/* Problem */}
          <div>
            <h2 
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              The Problem
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {experience.problem}
            </p>
          </div>

          {/* Work */}
          <div style={{ paddingTop: '1rem', borderTop: `1px solid var(--border-color)` }}>
            <h2 
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              What I Did
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {experience.work}
            </p>
          </div>

          {/* Perspectives */}
          <div style={{ paddingTop: '1rem', borderTop: `1px solid var(--border-color)` }}>
            <h2 
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              Perspectives & Boundaries
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {experience.perspectives}
            </p>
          </div>

          {/* Capability */}
          <div style={{ paddingTop: '1rem', borderTop: `1px solid var(--border-color)` }}>
            <h2 
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              Capability Gained
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {experience.capability}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="w-full px-6 py-12 md:py-16 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            {/* Previous link */}
            <div>
              {prevSlug ? (
                <Link
                  href={`/experience/${prevSlug}`}
                  className="inline-flex items-center text-sm font-semibold hover:underline transition-colors"
                  style={{ color: 'var(--accent-color)' }}
                >
                  <span className="mr-2">←</span>
                  Previous Experience
                </Link>
              ) : (
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  —
                </span>
              )}
            </div>

            {/* Back to index */}
            <Link
              href="/experience"
              className="text-sm font-semibold hover:underline transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              ← Back to All Experiences
            </Link>

            {/* Next link */}
            <div>
              {nextSlug ? (
                <Link
                  href={`/experience/${nextSlug}`}
                  className="inline-flex items-center text-sm font-semibold hover:underline transition-colors"
                  style={{ color: 'var(--accent-color)' }}
                >
                  Next Experience
                  <span className="ml-2">→</span>
                </Link>
              ) : (
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  —
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
