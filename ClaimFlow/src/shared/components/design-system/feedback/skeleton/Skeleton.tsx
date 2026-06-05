import { cn } from "@/shared/lib/cn";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-md
        bg-white/10
      `,
        className
      )}
    >
      {/* shimmer */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-shimmer
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}
