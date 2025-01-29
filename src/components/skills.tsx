import { SKILLS } from "@/constants";

import Image from "next/image";
import { Fragment } from "react";
import { RevealFx } from "./reveal-fx";

export const Skills = () => {
  return (
    <RevealFx className="px-8 sm:px-16">
      <section id="skills" className="mt-32">
        <div className="text-4xl font-bold">Technical Skills</div>
        <div className="mt-9 space-y-7 rounded-3xl border-2 border-[#3F3F3F] bg-[#151515]/30 px-8 py-11 backdrop-blur-lg">
          {SKILLS.map(({ id, title, skills }) => {
            return (
              <Fragment key={id}>
                <div className="text-xl font-bold text-[#84F6C3]">{title}</div>
                <div className="mt-6 flex flex-wrap gap-10">
                  {skills.map(({ name, url }) => {
                    return (
                      <div
                        key={name}
                        className="flex w-28 flex-col items-center"
                      >
                        <div>
                          <Image
                            src={url}
                            alt={name}
                            width={64}
                            height={64}
                            className="h-16 w-16"
                          />
                          <div className="mt-2 text-base font-semibold">
                            {name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
    </RevealFx>
  );
};
