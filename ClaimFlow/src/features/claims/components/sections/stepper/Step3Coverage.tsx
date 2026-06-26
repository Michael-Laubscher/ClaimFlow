import type { Country } from "@/features/claims/configs/countries";
import type { CoverageLevel } from "@/features/claims/configs/coverageLevels";
import { COVERAGE_LEVELS } from "@/features/claims/configs/coverageLevels";
import type { InsuranceType } from "@/features/claims/types/insuranceTypes";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

interface Step3Props {
  coverage: CoverageLevel | "";

  onChange: (value: CoverageLevel) => void;

  insuranceType: InsuranceType | "";
  business: string | null;
  country: Country | null;

  onBack: () => void;
  onSubmit: () => void;

  submitted: boolean;
}

export function Step3({ coverage, onChange, insuranceType, business, country, onBack, onSubmit, submitted }: Step3Props) {
  if (submitted) {
    return (
      <Stack align="center" gap="lg" className="py-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full bg-green-500/10 blur-2xl" />

          <div
            className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            text-green-500
            shadow-[0_10px_40px_rgba(34,197,94,0.15)]
          "
          >
            <span className="text-2xl font-bold">✓</span>
          </div>
        </div>

        <Stack align="center" gap="xs">
          <Heading size="lg" className="text-center text-slate-900">
            Quote Submitted
          </Heading>

          <Text className="text-center text-slate-500 max-w-md">Your request has been securely submitted. Our underwriting team will review your details and prepare your personalized quote.</Text>
        </Stack>

        <div
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          px-4
          py-1.5
          text-xs
          font-medium
          text-green-700
        "
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Submission successful
        </div>

        <Card variant="glass" className="mt-2 w-full max-w-md p-5 text-center">
          <Text variant="sm" color="muted">
            Typical response time: <span className="text-slate-800 font-medium">within 24–48 hours</span>
          </Text>

          <Text variant="sm" color="muted" className="mt-2">
            You’ll receive your quote via email once it’s ready.
          </Text>
        </Card>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/">Return Home</Button>
        </div>
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
