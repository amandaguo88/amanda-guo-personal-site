import Footer from "@/components/Footer";
import { mediumUrl, writing } from "@/data/writing";

export default function WritingPage() {
  return (
    <div
      className="flex w-full flex-col"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <main className="w-full flex-1">
        <section className="w-full px-6 py-32 md:py-48">
          <div className="mx-auto max-w-4xl">
            <p className="label mb-8 md:mb-12">Writing</p>
            <h1 className="mb-8 max-w-3xl text-5xl leading-tight sm:text-6xl md:mb-12 md:text-7xl">
              Ideas in <span className="accent">progress</span>
            </h1>
            <p
              className="max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              I write about technology, product, design, AI and the things I&apos;m
              curious about.
            </p>
          </div>
        </section>

        <section
          className="w-full border-t px-6 py-24 md:py-32"
          style={{ borderColor: "var(--border-color)" }}
          aria-labelledby="writing-index-heading"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex items-center justify-between gap-6">
              <h2 id="writing-index-heading" className="text-3xl md:text-4xl">
                Selected writing
              </h2>
              <span className="label hidden sm:block">01—{String(writing.length).padStart(2, "0")}</span>
            </div>

            <ol>
              {writing.map((article, index) => (
                <li
                  key={article.title}
                  className="border-t py-10 md:py-14"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <article className="grid gap-8 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-12">
                    <div className="flex items-start justify-between gap-4 md:block">
                      <p className="label mb-3">{article.category}</p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {article.date}
                      </p>
                    </div>
                    <div>
                      <p className="label mb-5">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mb-5 max-w-2xl text-3xl leading-tight md:text-5xl">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.title}
                        </a>
                      </h3>
                      <p
                        className="mb-6 max-w-xl text-base leading-relaxed md:text-lg"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {article.description}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold"
                        style={{ color: "var(--accent-color)" }}
                      >
                        Read article <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            <div
              className="mt-2 border-t pt-10 md:pt-14"
              style={{ borderColor: "var(--border-color)" }}
            >
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-semibold"
                style={{ color: "var(--accent-color)" }}
              >
                More of my writing <span className="ml-3" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}