"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import styles from "./background.module.css";
// import { Flex } from "./flex";

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && "current" in ref) {
    (ref as React.RefObject<T | null>).current = value;
  }
}

interface BackgroundProps extends React.ComponentProps<"div"> {
  className?: string;
  children?: React.ReactNode;
}

const Background = ({ children, className, ref, ...rest }: BackgroundProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRef(ref, backgroundRef.current);
  }, [ref]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const rect = backgroundRef.current.getBoundingClientRect();
        setCursorPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => {
        const dx = cursorPosition.x - prev.x;
        const dy = cursorPosition.y - prev.y;
        const easingFactor = 0.05;

        return {
          x: Math.round(prev.x + dx * easingFactor),
          y: Math.round(prev.y + dy * easingFactor),
        };
      });
      animationFrameId = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrameId = requestAnimationFrame(updateSmoothPosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  return (
    <div
      ref={backgroundRef}
      className={cn(
        styles.mask,
        "fixed left-0 top-0 z-0 flex size-full overflow-hidden",
        className,
      )}
      style={{
        ["--mask-position-x" as string]: `${smoothPosition.x}px`,
        ["--mask-position-y" as string]: `${smoothPosition.y}px`,
      }}
      {...rest}
    >
      <div
        className={cn(
          "pointer-events-none absolute left-[-150%] top-[-150%] flex size-[400%] origin-center rotate-0 opacity-50",
          styles.gradient,
        )}
      />
      <div
        className={cn(
          styles.dots,
          "pointer-events-none absolute left-0 top-0 flex size-full opacity-20",
        )}
      />
      {children}
    </div>
  );
};

export { Background };
