"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

type NavigationLinksProps = {
  onNavigate: () => void;
};

function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = link.href === "/experience"
          ? pathname === link.href || pathname.startsWith(`${link.href}/`)
          : pathname === link.href;

        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              className="text-sm font-medium transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`text-sm font-medium transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)] ${
              isActive ? "accent" : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          aria-label="Amanda Guo home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-display text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
        >
          Amanda Guo
        </Link>

        <nav aria-label="Primary navigation">
          <div className="hidden items-center gap-8 md:flex">
            <NavigationLinks onNavigate={() => undefined} />
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-sm font-medium md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </div>

      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? "block" : "hidden"} border-t md:hidden`}
        style={{ borderColor: "var(--border-color)" }}
      >
        <nav aria-label="Mobile primary navigation" className="mx-auto max-w-4xl px-6 py-5">
          <div className="flex flex-col items-start gap-5">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              aria-current={pathname === "/" ? "page" : undefined}
              className="text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
            >
              Home
            </Link>
            <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
}