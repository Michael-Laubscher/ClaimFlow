import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { SearchIcon } from "@/shared/components/design-system/svg/icons/lucide";

interface ClaimSearchProps {
  value: string;
  onChange: (value: string) => void;
  onTrack: () => void;
  showHelper?: boolean;
}

export function ClaimSearch({ value, onChange, onTrack, showHelper = false }: ClaimSearchProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">Claim Number</label>

      <div className="flex w-full overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-orange-400/30">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onTrack()}
          placeholder="CLM-2026-XXXXX"
          className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />

        <Button onClick={onTrack} className="rounded-none border-0 bg-orange-500 px-5 text-white hover:bg-orange-600" iconRight={<SearchIcon size={16} />}>
          Track
        </Button>
      </div>

      {showHelper && <p className="text-xs text-slate-400">Find your claim number in your confirmation email</p>}
    </div>
  );
}
