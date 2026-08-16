import { featuredExperiences, otherExperiences } from "@/data/experiences";
import ExperienceHero from "@/components/ExperienceHero";
import ExperienceEntry from "@/components/ExperienceEntry";
import OtherExperienceList from "@/components/OtherExperienceList";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="flex-1 w-full">
        <ExperienceHero />

        {/* Featured experiences */}
        <section className="w-full px-6 py-24 md:py-32 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <div className="mx-auto max-w-4xl">
            {featuredExperiences.map((exp, index) => (
              <ExperienceEntry key={exp.slug} experience={exp} number={index + 1} />
            ))}
          </div>
        </section>

        {/* Other experiences */}
        <OtherExperienceList experiences={otherExperiences} />
      </main>
      <Footer />
    </div>
  );
}
