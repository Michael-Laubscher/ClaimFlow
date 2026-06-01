import type { QuoteDetails } from "@/features/claims/types/quote.types";

import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { InputField } from "@/shared/components/design-system/primitives/Input/InputField";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { COUNTRIES } from "@/features/claims/configs/countries";

interface Step2Props {
  data: QuoteDetails;

  onChange: (key: keyof QuoteDetails, value: string) => void;

  onNext: () => void;
  onBack: () => void;
}

export function Step2({ data, onChange, onNext, onBack }: Step2Props) {
  const valid = data.business && data.contact && data.email && data.phone && data.country;

  return (
    <Stack gap="lg">
      {/* Header */}
      <div>
        <Heading size="lg">Your Details</Heading>

        <Text className="mt-1 text-slate-500">Tell us about your business</Text>
      </div>

      {/* Form */}
      <Stack gap="md">
        <InputField label="Business Name" value={data.business} onChange={(v) => onChange("business", v)} />

        <InputField label="Contact Person" value={data.contact} onChange={(v) => onChange("contact", v)} />

        <div className="grid grid-cols-2 gap-4">
          <InputField label="Email" value={data.email} onChange={(v) => onChange("email", v)} />

          <InputField label="Phone" value={data.phone} onChange={(v) => onChange("phone", v)} />
        </div>

        {/* FIXED: Country is now a SELECT (correct design-system usage) */}
        <SelectField label="Country" value={data.country} options={COUNTRIES} onChange={(v) => onChange("country", v)} />
      </Stack>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button disabled={!valid} onClick={onNext} className="flex-1">
          Continue
        </Button>
      </div>
    </Stack>
  );
}
