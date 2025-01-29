"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import styles from "./reveal-fx.module.css";

interface RevealFxProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast";
  delay?: number;
  revealedByDefault?: boolean;
  translateY?: number;
  trigger?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const RevealFx = ({
  children,
  speed = "fast",
  delay = 0,
  revealedByDefault = false,
  translateY,
  trigger,
  style,
  className,
  ref,
  ...rest
}: RevealFxProps) => {
  const [isRevealed, setIsRevealed] = useState(revealedByDefault);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (trigger !== undefined) {
      setIsRevealed(trigger);
    }
  }, [trigger]);

  const getSpeedDuration = () => {
    switch (speed) {
      case "fast":
        return "1s";
      case "medium":
        return "2s";
      case "slow":
        return "3s";
      default:
        return "2s";
    }
  };

  const getTranslateYValue = () => {
    if (typeof translateY === "number") {
      return `${translateY}rem`;
    } else if (typeof translateY === "string") {
      return `var(--static-space-${translateY})`;
    }
    return undefined;
  };

  const translateValue = getTranslateYValue();

  const revealStyle: React.CSSProperties = {
    transitionDuration: getSpeedDuration(),
    transform: isRevealed ? "translateY(0)" : `translateY(${translateValue})`,
    ...style,
  };

  return (
    <div
      ref={ref}
      style={revealStyle}
      className={cn(
        styles.revealFx,
        isRevealed ? styles.revealed : styles.hidden,
        "relative w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
