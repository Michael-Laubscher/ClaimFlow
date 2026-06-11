import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { SearchIcon } from "@/shared/components/design-system/svg/icons/lucide";
import { Input } from "./Input";

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

      <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-orange-400/30">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onTrack()}
          placeholder="CLM-2026-XXXXX"
          className="border-0 bg-transparent shadow-none focus:ring-0"
        />

        <Button onClick={onTrack} className="rounded-none border-0 bg-orange-500 px-5 text-white hover:bg-orange-600" iconRight={<SearchIcon size={16} />}>
          Track
        </Button>
      </div>

      {showHelper && <p className="text-xs text-slate-400">Find your claim number in your confirmation email</p>}
    </div>
  );
}
