const workPrinciples = [
  {
    id: "perspectives",
    title: "Connect Perspectives",
    description:
      "I integrate insights from product, design, engineering, and business to solve problems holistically. This multidisciplinary view helps teams anticipate consequences and make better decisions.",
    featured: true,
  },
  {
    id: "stakeholders",
    title: "Work Across Teams",
    description:
      "I'm comfortable navigating ambiguity and building alignment across different functions and stakeholders. Clear communication and empathy for different viewpoints are foundational to my approach.",
    featured: false,
  },
  {
    id: "understanding",
    title: "Prioritize Understanding",
    description:
      "Before jumping to solutions, I invest time understanding the problem space, constraints, and underlying needs. This foundation leads to more robust and user-centered outcomes.",
    featured: false,
  },
  {
    id: "execution",
    title: "Ship with Intention",
    description:
      "I balance strategy with execution, ensuring decisions are grounded in evidence and intention. I focus on impact over perfection, learning continuously from what we build.",
    featured: true,
  },
];

export default function HowIWork() {
  return (
    <section className="w-full px-6 py-24 md:py-40 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <p className="label mb-4">Approach</p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            How I Work
          </h2>
        </div>

        {/* Principles with varied visual treatment */}
        <div className="space-y-12 md:space-y-16">
          {workPrinciples.map((principle, index) => (
            <div 
              key={principle.id} 
              className="group cursor-default"
              style={{
                marginLeft: index % 2 === 1 ? '2rem' : '0',
                paddingBottom: index !== workPrinciples.length - 1 ? '1rem' : '0',
                borderBottom: index !== workPrinciples.length - 1 ? `1px solid var(--border-color)` : 'none'
              }}
            >
              {/* Principle header with × symbol */}
              <div className="flex items-start gap-4 mb-4">
                <span 
                  className="accent font-bold text-xl mt-0.5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                  style={{ color: 'var(--accent-color)' }}
                >
                  ×
                </span>
                <h3 
                  className={principle.featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}
                  style={{ fontFamily: 'var(--font-playfair-display)' }}
                >
                  {principle.title}
                </h3>
              </div>

              {/* Principle description */}
              <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)', marginLeft: '2rem' }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
