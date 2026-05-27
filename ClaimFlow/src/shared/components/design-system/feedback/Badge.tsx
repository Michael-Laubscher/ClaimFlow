import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return <div className={cn("inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/90 sm:text-sm", className)}>{children}</div>;
}
