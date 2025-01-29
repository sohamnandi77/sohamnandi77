import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
