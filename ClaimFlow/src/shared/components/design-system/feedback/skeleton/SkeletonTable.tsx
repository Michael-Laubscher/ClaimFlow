import { Skeleton } from "./Skeleton";

export function SkeletonTable({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="space-y-3">
      {/* header */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>

      {/* rows */}
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="grid grid-cols-4 gap-4">
          {Array.from({
            length: cols,
          }).map((_, c) => (
            <Skeleton key={c} className="h-10 w-full rounded-lg" />
          ))}
        </div>
      ))}
    </div>
  );
}
