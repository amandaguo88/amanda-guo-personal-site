export default function ExperienceHero() {
  return (
    <section className="w-full px-6 py-32 md:py-48" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Label */}
        <p className="label mb-8 md:mb-12" style={{ color: 'var(--text-secondary)' }}>
          My Work
        </p>

        {/* Main heading */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 md:mb-12"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Connected <span className="accent">chapters</span>
        </h1>

        {/* Intro text */}
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          My career is defined by connecting perspectives that typically sit apart. 
          Each experience below demonstrates a different facet of this work: translating 
          between teams, simplifying complexity, or bridging strategy with execution. 
          Together, they tell one cohesive story.
        </p>

        {/* Visual reinforcement */}
        <div className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
          <span className="accent font-bold">×</span>
          <span>Featured experiences</span>
        </div>
      </div>
    </section>
  );
}
