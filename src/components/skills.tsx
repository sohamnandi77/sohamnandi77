import { SKILLS } from "@/constants";

import Image from "next/image";
import { Fragment } from "react";
import { RevealFx } from "./reveal-fx";

export const Skills = () => {
  return (
    <section id="skills" className="px-8 sm:px-16">
      <div className="mt-32">
        <RevealFx translateY={2}>
          <div className="text-4xl font-bold">Technical Skills</div>
        </RevealFx>
        <div className="mt-9 space-y-7 rounded-3xl border-2 border-[#3F3F3F] bg-[#151515]/50 px-3 py-5 backdrop-blur-lg md:px-8 md:py-11">
          {SKILLS.map(({ id, title, skills }, idx) => {
            return (
              <Fragment key={id}>
                <RevealFx translateY={2}>
                  <div className="text-xl font-bold text-[#84F6C3]">
                    {title}
                  </div>
                </RevealFx>
                <RevealFx
                  delay={idx * 0.1}
                  translateY={2}
                  className="mt-6 flex flex-wrap items-start gap-6 md:gap-10"
                >
                  {skills.map(({ name, url, height, width }) => {
                    return (
                      <div
                        key={name}
                        className="flex w-24 flex-col items-center justify-center sm:w-28"
                      >
                        <Image
                          src={url}
                          alt={name}
                          height={height}
                          width={width}
                          className="h-16"
                        />
                        <div className="mt-2 text-base font-semibold">
                          {name}
                        </div>
                      </div>
                    );
                  })}
                </RevealFx>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
