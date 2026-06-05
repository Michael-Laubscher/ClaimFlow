import { cn } from "@/shared/lib/cn";
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function SkeletonAvatar({ className, ...props }: SkeletonProps) {
  return (
    <div {...props} className={cn("relative overflow-hidden rounded-md bg-white/10", className)}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
