import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

const variants = {
  xs: "text-xs",
  sm: "text-sm",

  body: "text-base leading-relaxed",

  lead: "text-lg leading-relaxed",

  title: "text-2xl font-semibold",

  hero: "text-5xl font-bold",
};

const colors = {
  default: "text-slate-700",

  muted: "text-slate-500",

  white: "text-white",

  inverse: "text-slate-100",
};

interface TextProps {
  children: ReactNode;

  variant?: keyof typeof variants;

  color?: keyof typeof colors;

  className?: string;
}

export function Text({ children, variant = "body", color = "default", className }: TextProps) {
  return <p className={cn(variants[variant], colors[color], className)}>{children}</p>;
}
