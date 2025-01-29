"use client";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type NavButtonProps = {
  id: string;
  isActive: boolean;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const NavButton = (props: NavButtonProps) => {
  const { icon: Icon, isActive, id, title } = props;

  return (
    <Link
      aria-label={id}
      href={id}
      className={cn(
        id !== "#home" ? "size-8 sm:w-min sm:px-2" : "size-8",
        isActive
          ? "border-[#08a97c4c] bg-[#08a97c19] text-[#08A97C]"
          : "border-[#9595954c] hover:bg-[#9595954c]",
        "inline-flex h-8 items-center justify-center space-x-2 whitespace-nowrap rounded-full border transition-colors duration-300",
        // focus-visible
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08a97cb2]",
        "disabled:pointer-events-none disabled:opacity-50",
      )}
      data-state="closed"
    >
      <Icon className="size-5" />
      {id !== "#home" ? (
        <span className="hidden text-sm sm:block">{title}</span>
      ) : null}
    </Link>
  );
};
