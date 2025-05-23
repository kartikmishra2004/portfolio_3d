import Hero from "./_components/Home/Hero";
import DesktopSection from "./_components/Home/DesktopSection";
import MobileSection from "./_components/Home/MobileSection";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <DesktopSection />
      <MobileSection />
    </section>
  );
}
