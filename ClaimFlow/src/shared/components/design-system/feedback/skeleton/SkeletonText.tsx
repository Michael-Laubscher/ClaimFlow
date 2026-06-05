import { Skeleton } from "./Skeleton";

interface Props {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className }: Props) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`
              h-4
              w-full
              mb-2
              last:mb-0
              ${i === lines - 1 ? "w-2/3" : ""}
            `}
        />
      ))}
    </div>
  );
}
