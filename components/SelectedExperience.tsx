import { featuredExperiences } from "@/data/experiences";
import Link from "next/link";

export default function SelectedExperience() {
  return (
    <section id="experience" className="w-full px-6 py-24 md:py-40 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <p className="label mb-4">Featured Work</p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Selected Experience
          </h2>
          <p className="text-base mt-4" style={{ color: 'var(--text-secondary)' }}>
            Connected chapters in one career story
          </p>
        </div>

        {/* Experience entries grouped together */}
        <div className="relative" style={{ paddingLeft: '3rem', borderLeft: `2px solid var(--accent-color)` }}>
          {featuredExperiences.map((exp, index) => (
            <article 
              key={exp.slug} 
              className="py-12 md:py-16 relative"
              style={{ 
                marginLeft: index % 2 === 1 ? '2rem' : '-2rem',
                transition: 'margin-left 0.3s ease'
              }}
            >
              {/* Connection node */}
              <div 
                className="absolute left-0 top-12 w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  marginLeft: '-1.75rem',
                  transition: 'transform 0.2s ease'
                }}
                aria-hidden="true"
              />

              {/* Entry number and company */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline gap-4 md:gap-6 mb-3">
                  <span 
                    className="text-3xl md:text-4xl font-bold hover:opacity-60 transition-opacity cursor-default"
                    style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-playfair-display)' }}
                    role="doc-pagebreak"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
                      {exp.company}
                    </h3>
                    <p className="text-base mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {exp.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus/framing statement */}
              <p className="label mb-4" style={{ color: 'var(--accent-color)' }}>
                {exp.framing}
              </p>

              {/* Description */}
              <p className="text-base leading-relaxed max-w-3xl mb-6 md:mb-8">
                {exp.problem}
              </p>

              {/* Case study link */}
              <Link
                href={`/experience/${exp.slug}`}
                className="inline-flex items-center text-sm font-semibold hover:underline transition-all"
                style={{ color: 'var(--accent-color)' }}
              >
                Read full case study
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
