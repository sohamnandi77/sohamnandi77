import { WORK } from "@/constants";
import { RevealFx } from "./reveal-fx";
import { WorkCard } from "./work-card";

export const Work = () => {
  return (
    <RevealFx delay={0.2} className="px-8 sm:px-16">
      <section id="experience" className="mt-16 sm:mt-32">
        <div className="text-4xl font-bold">Work Experience</div>
        <div className="relative ms-2 mt-9 space-y-12 border-s-2 border-solid border-[#3F3F3F] ps-9">
          {WORK.map((data) => {
            return <WorkCard key={data.company} {...data} />;
          })}
        </div>
      </section>
    </RevealFx>
  );
};
