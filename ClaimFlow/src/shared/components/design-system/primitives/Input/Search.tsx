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
    <>
      <label className="mb-2 block text-sm font-semibold text-slate-700">Claim Number</label>

      <div className="flex">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onTrack()}
          placeholder="CLM-2026-XXXXX"
          className="flex-1 rounded-l-md border px-4 py-2.5 text-sm"
        />

        <Button onClick={onTrack} className="rounded-l-none" iconRight={<SearchIcon size={16} />}>
          Track
        </Button>
      </div>

      {showHelper && <p className="mt-2 text-xs text-slate-400">Find your claim number in your confirmation email</p>}
    </>
  );
}
