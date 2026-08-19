import Link from "next/link";
import Footer from "@/components/Footer";
import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <div
      className="flex w-full flex-col"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <main className="w-full flex-1">
        <section className="w-full px-6 py-32 md:py-48">
          <div className="mx-auto max-w-4xl">
            <p className="label mb-8 md:mb-12">About</p>
            <h1 className="mb-8 max-w-4xl text-5xl leading-tight sm:text-6xl md:mb-12 md:text-7xl">
              {about.introduction.heading}
            </h1>
            <p
              className="max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {about.introduction.body}
            </p>
          </div>
        </section>

        <section
          className="w-full border-t px-6 py-24 md:py-32"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
              <div>
                <p className="label mb-6">01</p>
                <h2 className="max-w-sm text-4xl leading-tight md:text-5xl">
                  {about.background.heading}
                </h2>
              </div>
              <div>
                <p
                  className="max-w-2xl text-base leading-relaxed md:text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {about.background.body}
                </p>
                <ul
                  className="mt-12 grid grid-cols-1 border-t sm:grid-cols-2"
                  style={{ borderColor: "var(--border-color)" }}
                  aria-label="Disciplines"
                >
                  {about.background.disciplines.map((discipline, index) => (
                    <li
                      key={discipline}
                      className="flex items-center gap-4 border-b py-5 text-base"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <span className="accent font-mono text-xs" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{discipline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full border-t px-6 py-24 md:py-32"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
              <div>
                <p className="label mb-6">02</p>
                <h2 className="max-w-sm text-4xl leading-tight md:text-5xl">
                  {about.story.heading}
                </h2>
              </div>
              <p
                className="max-w-2xl text-lg leading-relaxed md:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {about.story.body}
              </p>
            </div>
          </div>
        </section>

        <section
          className="w-full border-t px-6 py-24 md:py-32"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
              <div>
                <p className="label mb-6">03</p>
                <h2 className="max-w-sm text-4xl leading-tight md:text-5xl">
                  {about.outsideOfWork.heading}
                </h2>
              </div>
              <div>
                <p
                  className="max-w-2xl text-lg leading-relaxed md:text-xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {about.outsideOfWork.body}
                </p>
                <div className="mt-12 flex flex-col gap-5 text-lg sm:flex-row sm:gap-10">
                  <Link
                    href="/experience"
                    className="font-semibold"
                    style={{ color: "var(--accent-color)" }}
                  >
                    View my experience <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    View my resume <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}