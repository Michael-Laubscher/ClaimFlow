import type { ElementType, ReactNode } from "react";

import { cn } from "@/shared/utilis/cn";

interface HeadingProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  size?: "hero" | "xl" | "lg";
}

const sizes = {
  hero: "text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl",
  xl: "text-3xl font-bold",
  lg: "text-2xl font-bold",
};

export function Heading({
  children,
  as: Component = "h2",
  className,
  size = "xl",
}: HeadingProps) {
  return (
    <Component className={cn(sizes[size], className)}>{children}</Component>
  );
}
