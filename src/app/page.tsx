import Hero from "./_components/Home/Hero";
import DesktopSection from "./_components/Home/DesktopSection";
import MobileSection from "./_components/Home/MobileSection";
import ProjectTeaser from "./_components/Home/ProjectTeaser";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <DesktopSection />
      <MobileSection />
      <ProjectTeaser />
    </section>
  );
}
