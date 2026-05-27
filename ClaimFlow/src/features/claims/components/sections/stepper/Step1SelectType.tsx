import type { InsuranceType } from "@/features/claims/types/insuranceTypes";

import { FALLBACK_INSURANCE_ICON, INSURANCE_TYPES } from "@/features/claims/types/insuranceTypes";

import { Button } from "@/shared/components/design-system/buttons/Button";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";
import { cn } from "@/shared/lib/cn";

interface Step1Props {
  value: InsuranceType | "";

  onChange: (value: InsuranceType) => void;

  onNext: () => void;
}

export function Step1({ value, onChange, onNext }: Step1Props) {
  return (
    <Stack gap="lg">
      {/* Header */}
      <div>
        <Heading size="lg">Select Insurance Type</Heading>

        <GenericText className="mt-1 text-slate-500">Choose the coverage that fits your business</GenericText>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {INSURANCE_TYPES.map((item) => {
          const Icon = item.Icon ?? FALLBACK_INSURANCE_ICON;

          const isActive = value === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={cn("rounded-xl border p-5 text-left transition", "hover:border-slate-400", isActive ? "border-slate-900 bg-slate-50" : "border-slate-200")}
            >
              <Icon className="h-6 w-6 text-slate-700" />

              <div className="mt-3">
                <div className="font-semibold">{item.label}</div>

                <div className="text-xs text-slate-500">{item.sub}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Action */}
      <Button size="lg" disabled={!value} onClick={onNext} className="w-full">
        Continue
      </Button>
    </Stack>
  );
}
