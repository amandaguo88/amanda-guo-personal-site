export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Writing", href: "/writing" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Medium", href: "https://medium.com", external: true },
    { label: "Email", href: "mailto:amanda@example.com", external: true },
  ];

  return (
    <footer className="w-full border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Brand statement */}
          <div>
            <h3 className="label mb-4">About</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I work at the intersection of product, technology and people.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="label mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm leading-relaxed hover:opacity-60 transition-opacity"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h3 className="label mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm leading-relaxed hover:opacity-60 transition-opacity"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-xs mt-8" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} Amanda Guo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
