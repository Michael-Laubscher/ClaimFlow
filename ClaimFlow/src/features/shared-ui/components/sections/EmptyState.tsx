import { ClaimSearch } from "@/shared/components/design-system/primitives/Input/Search";
import type { EmptyStateProps } from "@/shared/types/EmptyState.types";

export function EmptyState(props: EmptyStateProps) {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-xl">
        <ClaimSearch {...props} showHelper />
      </div>
    </div>
  );
}
