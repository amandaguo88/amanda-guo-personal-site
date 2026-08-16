import Hero from "@/components/Hero";
import SelectedExperience from "@/components/SelectedExperience";
import HowIWork from "@/components/HowIWork";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="flex-1 w-full">
        <Hero />
        <SelectedExperience />
        <HowIWork />
        <CurrentlyExploring />
      </main>
      <Footer />
    </div>
  );
}
