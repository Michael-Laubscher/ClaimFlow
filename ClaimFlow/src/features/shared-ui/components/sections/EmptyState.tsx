import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { SearchIcon } from "@/shared/components/design-system/svg/icons/SearchIcon";

interface EmptyStateProps {
  value: string;
  onChange: (value: string) => void;
  onTrack: () => void;
}

export function EmptyState({ value, onChange, onTrack }: EmptyStateProps) {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto max-w-xl">
        <label className="mb-2 block text-sm font-semibold text-slate-700">Claim Number</label>

        <div className="flex">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onTrack()}
            placeholder="CLM-2026-XXXXX"
            className="flex-1 rounded-l-md border px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:border-[#1a2744] focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
          />

          <Button onClick={onTrack} className="rounded-l-none" iconRight={<SearchIcon size={16} />}>
            Track
          </Button>
        </div>

        <p className="mt-2 text-xs text-slate-400">Find your claim number in your confirmation email</p>
      </div>
    </div>
  );
}
