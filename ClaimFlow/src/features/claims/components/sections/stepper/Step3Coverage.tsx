import type { InsuranceType } from "@/features/claims/types/insuranceTypes";
import type { CoverageLevel } from "@/features/claims/configs/coverageLevels";
import { COVERAGE_LEVELS } from "@/features/claims/configs/coverageLevels";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

interface Step3Props {
  coverage: CoverageLevel | "";

  onChange: (value: CoverageLevel) => void;

  insuranceType: InsuranceType | "";
  business: string;
  country: string;

  onBack: () => void;
  onSubmit: () => void;

  submitted: boolean;
}

export function Step3({ coverage, onChange, insuranceType, business, country, onBack, onSubmit, submitted }: Step3Props) {
  if (submitted) {
    return (
      <Stack align="center" gap="md">
        <div className="text-4xl text-green-600">✓</div>

        <Heading size="lg">Quote Submitted</Heading>

        <GenericText className="text-center text-slate-500">We’ll get back to you shortly.</GenericText>
      </Stack>
    );
  }

  return (
    <Stack gap="lg">
      {/* Header */}
      <Heading size="lg">Coverage Details</Heading>

      {/* Coverage select */}
      <select value={coverage} onChange={(e) => onChange(e.target.value as CoverageLevel)} className="w-full rounded-xl border px-4 py-3 text-sm">
        <option value="">Select coverage</option>

        {COVERAGE_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>

      {/* Summary card */}
      <Card className="p-4 text-sm">
        <div className="flex justify-between">
          <span>Insurance Type</span>

          <span className="font-medium">{insuranceType || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span>Business</span>

          <span className="font-medium">{business || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span>Country</span>

          <span className="font-medium">{country || "-"}</span>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button disabled={!coverage} onClick={onSubmit} className="flex-1">
          Get Quote
        </Button>
      </div>
    </Stack>
  );
}
