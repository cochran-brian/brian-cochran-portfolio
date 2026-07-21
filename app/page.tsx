import Nav from "@/components/Nav";
import Doodles from "@/components/Doodles";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import AboutStory from "@/components/AboutStory";
import StickerSheet from "@/components/StickerSheet";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <div className="relative">
        <Doodles />
        <main className="relative z-10">
          <Hero />
          <AboutStory />
          <StickerSheet />
          <ExperienceSection />
          <ProjectsSection />
          <LeadershipSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
