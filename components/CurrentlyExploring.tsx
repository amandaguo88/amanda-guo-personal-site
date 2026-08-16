const exploringAreas = [
  {
    id: "ai",
    title: "AI in Product & Design",
    highlightWord: "AI",
    description:
      "Exploring how AI tools reshape product workflows, customer experiences, and the way teams collaborate. Particularly interested in maintaining human judgment and values in AI-augmented processes.",
    featured: true,
  },
  {
    id: "modern-stack",
    title: "Modern Development Practices",
    highlightWord: "Development",
    description:
      "Diving deeper into contemporary frameworks, architectural patterns, and tools that enable teams to move faster while maintaining quality and clarity. Learning through building.",
    featured: false,
  },
  {
    id: "distributed-teams",
    title: "Distributed Team Dynamics",
    highlightWord: "Teams",
    description:
      "Understanding how remote and distributed teams collaborate effectively across time zones and contexts. How do we maintain culture, clarity, and connection at scale?",
    featured: true,
  },
  {
    id: "user-research",
    title: "Deep User Understanding",
    highlightWord: "Understanding",
    description:
      "Investing in research methods and frameworks to deeply understand user behaviors, motivations, and pain points. Moving beyond surface-level insights to uncover root causes.",
    featured: false,
  },
];

export default function CurrentlyExploring() {
  return (
    <section className="w-full px-6 py-24 md:py-40 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <p className="label mb-4">Learning</p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Currently Exploring
          </h2>
        </div>

        {/* Exploring areas with dramatic typography */}
        <div className="space-y-16 md:space-y-20">
          {exploringAreas.map((area, index) => (
            <div 
              key={area.id}
              className="group"
              style={{
                marginRight: area.featured && index % 2 === 0 ? '4rem' : '0',
                marginLeft: !area.featured && index % 2 === 1 ? '4rem' : '0',
                transition: 'margin 0.3s ease'
              }}
            >
              {/* Highlight word - large dramatic typography */}
              <div 
                className="text-6xl md:text-7xl font-bold mb-3 leading-none group-hover:opacity-60 transition-opacity"
                style={{ 
                  color: 'var(--accent-color)', 
                  fontFamily: 'var(--font-playfair-display)',
                  letterSpacing: '-0.02em'
                }}
              >
                {area.highlightWord}
              </div>

              {/* Full title */}
              <h3 
                className="text-xl md:text-2xl mb-4"
                style={{ fontFamily: 'var(--font-playfair-display)' }}
              >
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
