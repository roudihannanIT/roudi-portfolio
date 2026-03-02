import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsPreview from "@/components/sections/SkillsPreview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <SkillsPreview />
      <ProjectsSection />
    </main>
  );
}