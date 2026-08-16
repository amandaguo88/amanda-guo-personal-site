import type { Experience } from "@/data/experiences";

interface OtherExperienceListProps {
  experiences: Experience[];
}

export default function OtherExperienceList({ experiences }: OtherExperienceListProps) {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-6 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="label mb-4">Other Experiences</p>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Additional Work
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.slug} className="pb-8" style={{ borderBottom: `1px solid var(--border-color)` }}>
              <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-playfair-display)' }}>
                {exp.company}
              </h3>
              <p className="text-base mb-3" style={{ color: 'var(--text-secondary)' }}>
                {exp.role}
              </p>
              <p className="label mb-4" style={{ color: 'var(--accent-color)' }}>
                {exp.framing}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {exp.problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
