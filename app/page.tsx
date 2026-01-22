import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
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
      <Contact />
      <Footer />
    </main>
  );
}
