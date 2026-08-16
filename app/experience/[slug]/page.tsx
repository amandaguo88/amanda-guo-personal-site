import { notFound } from "next/navigation";
import { experiences, featuredExperiences, findExperienceBySlug, getExperienceIndex } from "@/data/experiences";
import ExperienceDetail from "@/components/ExperienceDetail";
import Footer from "@/components/Footer";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = findExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  // Only featured experiences have detail pages
  if (!experience.featured) {
    notFound();
  }

  // Get prev/next for featured experiences only
  const currentIndex = getExperienceIndex(slug);
  const prevExp = currentIndex > 0 ? featuredExperiences[currentIndex - 1] : null;
  const nextExp = currentIndex < featuredExperiences.length - 1 ? featuredExperiences[currentIndex + 1] : null;

  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="flex-1 w-full">
        <ExperienceDetail
          experience={experience}
          prevSlug={prevExp?.slug}
          nextSlug={nextExp?.slug}
        />
      </main>
      <Footer />
    </div>
  );
}
