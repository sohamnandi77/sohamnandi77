"use client";

import { NAV_ITEMS } from "@/constants";
import { useHash } from "@/hooks/use-hash";
import { Fragment } from "react";
import { NavButton } from "./nav-button";
import { Separator } from "./ui/separator";

export const Header = () => {
  const hash = useHash();

  return (
    <nav className="fixed bottom-16 z-30 flex w-screen justify-center transition-all duration-500">
      <div className="flex transform-none gap-3 rounded-full border-2 border-[#3f3f3f] bg-black bg-opacity-70 px-7 py-3 backdrop-blur-lg">
        {NAV_ITEMS.map((item) => (
          <Fragment key={item.id}>
            <NavButton
              {...item}
              isActive={
                hash === item.id || (item.id === "#home" && hash === "")
              }
            />
            {item.id === "#home" && (
              <Separator orientation="vertical" className="bg-[#3F3F3F]" />
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};
