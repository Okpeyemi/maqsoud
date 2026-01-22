import About from "@/components/About";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import GitHubActivity from "@/components/GitHubActivity";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Blog />
      <GitHubActivity />
    </main>
  );
}
