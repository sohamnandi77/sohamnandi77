import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SocialBadge } from "./social-badge";

type ProjectCardProps = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    id,
    title,
    tags = [],
    description,
    imageUrl,
    githubUrl,
    liveDemoUrl,
  } = props;
  return (
    <article
      id={id}
      className="group relative flex h-min w-full flex-col rounded-2xl"
    >
      <div className="rounded-t-2xl bg-[#151515]/90 p-2 backdrop-blur-sm">
        <div className="relative h-[250px] w-full overflow-hidden lg:h-[300px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="rounded-2xl border-x border-t object-cover object-top transition-all duration-[6000ms] ease-in-out group-hover:object-bottom"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-b-2xl bg-[#151515]/90 px-6 py-9 backdrop-blur-sm transition-colors duration-300 ease-in-out md:px-6">
        <h3 className="text-base font-medium lg:text-[1.2rem]">{title}</h3>
        <div className="flex gap-3">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <p className="text-xs lg:text-sm">{description}</p>
        <div className="flex items-center gap-4 pt-2">
          {githubUrl && (
            <SocialBadge href={githubUrl} icon={<FaGithub />} name="Github" />
          )}
          {liveDemoUrl && (
            <Link href={liveDemoUrl} target="_blank" className="cursor-pointer">
              <div className="flex h-8 w-fit items-center space-x-2 rounded-xl border border-solid border-[#08a97c4d] bg-[#08a97c1a] px-2 text-[#84f6c3] backdrop-blur-sm">
                <span className="font-normal">Live demo</span>
                <FaExternalLinkAlt className="size-3" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
