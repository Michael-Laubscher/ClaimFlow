import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function GenericText({ children, className }: TextProps) {
  return <p className={cn("text-base leading-relaxed text-blue-100/80 sm:text-lg", className)}>{children}</p>;
}
