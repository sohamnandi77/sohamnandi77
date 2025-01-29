import { PROJECTS } from "@/constants";
import { ProjectCard } from "./project-card";
import { RevealFx } from "./reveal-fx";

export const Projects = () => {
  return (
    <RevealFx className="px-8 sm:px-16">
      <section id="projects" className="mt-32">
        <div className="text-4xl font-bold">Projects</div>
        <div className="mt-5 grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </RevealFx>
  );
};
