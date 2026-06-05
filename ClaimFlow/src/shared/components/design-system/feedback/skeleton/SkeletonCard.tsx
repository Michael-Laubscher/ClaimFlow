import { Skeleton } from "./Skeleton";
import { SkeletonText } from "./SkeletonText";

export function SkeletonCard() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        space-y-4
      "
    >
      {/* header */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl" />

        <div className="flex-1">
          <Skeleton className="h-4 w-1/3 mb-2" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>

      {/* content */}
      <SkeletonText lines={3} />

      {/* footer */}
      <div className="flex gap-3 pt-2">
        <Skeleton className="h-8 w-24 rounded-lg" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}
