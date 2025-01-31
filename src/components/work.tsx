import { WORK } from "@/constants";
import { RevealFx } from "./reveal-fx";
import { WorkCard } from "./work-card";

export const Work = () => {
  return (
    <section id="experience" className="px-8 sm:px-16">
      <div className="mt-16 sm:mt-32">
        <RevealFx translateY={2}>
          <div className="text-4xl font-bold">Work Experience</div>
        </RevealFx>
        <div className="relative ms-2 mt-9 space-y-12 border-s-2 border-solid border-[#3F3F3F] ps-9">
          {WORK.map((data) => {
            return <WorkCard key={data.company} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
