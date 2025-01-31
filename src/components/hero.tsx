import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { RevealFx } from "./reveal-fx";
import { SocialBadge } from "./social-badge";

export const Hero = () => {
  return (
    <section id="home" className="px-8 sm:px-16">
      <div className="grid content-center gap-8 lg:grid-cols-2">
        <div className="row-start-2 self-center lg:row-start-auto">
          <RevealFx translateY={2}>
            <div className="space-x-2 text-xl">
              <span className="inline-block animate-wave">👋</span>
              <span className="text-md text-[#959595]">Hey,</span>
            </div>
            <div className="text-5xl font-bold text-white xl:text-7xl">
              Soham Nandi
            </div>
            <div className="text-2xl text-[#959595] md:text-3xl">
              Frontend Developer
            </div>
          </RevealFx>
          <RevealFx delay={0.2} translateY={3}>
            <div className="mt-4 flex space-x-4">
              {SOCIALS.map((social) => (
                <SocialBadge key={social.name} {...social} />
              ))}
            </div>
          </RevealFx>
          <RevealFx delay={0.2} translateY={4}>
            <p className="mt-6 text-lg">
              Every problem has a code, and I love finding the right one! With a
              passion for crafting seamless user experiences, I blend clean code
              and creativity to transform ideas into impactful products. Let’s
              make every line count together!
            </p>
          </RevealFx>
          <RevealFx delay={0.2} translateY={5}>
            <div className="mt-4">
              <Link
                href="https://drive.google.com/file/d/1ZB09Na1bKzUuoj-EfFgBFueu8ypiwRbI/view?usp=sharing"
                target="_blank"
              >
                <div className="flex w-fit items-center space-x-2 rounded-full border border-solid border-[#08a97c4d] bg-[#08a97c1a] p-2 backdrop-blur-sm">
                  <PiReadCvLogoFill className="size-6 text-[#08a97c]" />
                  <span className="font-semibold">Resume</span>
                  <div
                    className={cn(
                      "flex w-fit cursor-pointer items-center space-x-2 rounded-full border border-[#3f3f3f] bg-[#151515] text-sm",
                      //hover
                      "hover:border-[#595959] hover:bg-[#3f3f3f]",
                    )}
                  >
                    <IoIosArrowForward className="size-7 p-1" />
                  </div>
                </div>
              </Link>
            </div>
          </RevealFx>
        </div>
        <div className="row-start-1 place-self-center lg:row-start-auto">
          <RevealFx delay={0.2} translateY={3}>
            <div className="relative overflow-hidden rounded-full border-4 border-solid border-[#595959]">
              <Image
                src="https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738159059/profile/others/profile-image.png"
                width={368}
                height={368}
                alt="Soham Nandi"
                priority
                sizes="(max-width: 425px) 50vw, (max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealFx>
        </div>
      </div>
    </section>
  );
};
