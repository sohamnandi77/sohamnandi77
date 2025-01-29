import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
