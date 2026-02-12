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
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
    const posts = getSortedPostsData();
    return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Blog posts={posts.slice(0, 3)} />
      <GitHubActivity />
      <Contact />
      <Footer />
    </main>
  );
}
