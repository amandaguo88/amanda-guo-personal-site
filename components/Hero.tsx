export default function Hero() {
  return (
    <section className="w-full px-6 py-32 md:py-48 relative" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Subtle label */}
        <p className="label mb-8 md:mb-12" style={{ color: 'var(--text-secondary)' }}>
          Product • Technology • People
        </p>

        {/* Main headline - primary focus */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 md:mb-12" 
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          I work at the <span className="accent">intersection</span> of product, technology and people.
        </h1>

        {/* Visual composition supporting headline - PRODUCT × TECHNOLOGY × PEOPLE */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          {/* Left side - supporting content */}
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m a product-minded technologist with experience spanning software engineering, design, product, consulting, and technology enablement. I connect perspectives across disciplines to turn complex problems into solutions that work.
          </p>

          {/* Right side - visual reinforcement */}
          <div className="hidden md:flex flex-col items-end gap-4 text-sm uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
            <span>Product</span>
            <span className="accent font-bold text-lg">×</span>
            <span>Technology</span>
            <span className="accent font-bold text-lg">×</span>
            <span>People</span>
          </div>
        </div>

        {/* CTA section */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <a
            href="#experience"
            className="inline-flex items-center font-semibold text-lg hover:scale-105 transition-transform"
            style={{ color: 'var(--accent-color)' }}
          >
            View My Work
            <span className="ml-3">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center font-semibold text-lg hover:underline"
          >
            Learn More
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
