import Nav from "@/components/Nav";
import Doodles from "@/components/Doodles";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative">
        <Doodles />
        <main className="relative z-10">
          <Hero />
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <LeadershipSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
