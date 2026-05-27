import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
}

export function GradientText({ children }: GradientTextProps) {
  return <span className="gradient-text">{children}</span>;
}
