import { cn } from "@/shared/lib/cn";
import type { ElementType } from "react";

const sizes = {
  hero: "text-6xl font-extrabold",
  xl: "text-4xl font-bold",
  lg: "text-2xl font-bold",
};

export function Heading({ as: Comp = "h2", size = "xl", className, children }: { as?: ElementType; size?: keyof typeof sizes; className?: string; children: React.ReactNode }) {
  return <Comp className={cn(sizes[size], className)}>{children}</Comp>;
}
