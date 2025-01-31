import { PROJECTS } from "@/constants";
import { ProjectCard } from "./project-card";
import { RevealFx } from "./reveal-fx";

export const Projects = () => {
  return (
    <section id="projects" className="px-8 sm:px-16">
      <div className="mt-32">
        <RevealFx translateY={2}>
          <div className="text-4xl font-bold">Projects</div>
        </RevealFx>
        <RevealFx translateY={2}>
          <div className="mt-5 grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </RevealFx>
      </div>
    </section>
  );
};
