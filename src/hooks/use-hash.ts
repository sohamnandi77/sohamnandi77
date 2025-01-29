"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const updateHash = () => {
      const newHash = window.location.hash;
      setHash(newHash);
    };

    // Initial update
    updateHash();

    // Subscribe to native hash changes
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname, searchParams]); // Re-run when path changes

  return hash;
};
