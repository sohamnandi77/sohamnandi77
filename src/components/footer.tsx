import { SOCIALS } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative mt-24 flex w-full min-w-0 items-center justify-between p-8 px-8 sm:px-16">
      <div className="text-[#959595]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#84F6C3]">Soham Nandi</span>
      </div>
      <div className="flex space-x-4">
        {SOCIALS.map(({ name, icon, href }) => (
          <Link key={name} href={href} target="_blank">
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};
