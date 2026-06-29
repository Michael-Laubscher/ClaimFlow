import type { QuoteDetails } from "@/features/claims/types/quote.types";

import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { InputField } from "@/shared/components/design-system/primitives/Input/InputField";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { COUNTRIES } from "@/features/claims/configs/countries";
import { ArrowLeft } from "lucide-react";

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
      <div>
        <Heading size="lg">Your Details</Heading>

        <Text className="mt-1 text-slate-500">Tell us about your business</Text>
      </div>

      <Stack gap="md">
        <InputField label="Business Name" value={data.business ?? ""} onChange={(v) => onChange("business", v)} />

        <InputField label="Contact Person" value={data.contact ?? ""} onChange={(v) => onChange("contact", v)} />

        <div className="grid grid-cols-2 gap-4">
          <InputField label="Email" value={data.email ?? ""} onChange={(v) => onChange("email", v)} />

          <InputField label="Phone" value={data.phone ?? ""} onChange={(v) => onChange("phone", v)} />
        </div>

        <SelectField label="Country" value={data.country ?? ""} options={COUNTRIES} onChange={(v) => onChange("country", v)} />
      </Stack>

      <div className="flex gap-3 justify-end">
        <Button
          variant="outline"
          onClick={onBack}
          className="
    group
    inline-flex
    items-center
    gap-2
    rounded-xl
    border-slate-200
    bg-white
    px-5
    text-slate-600
    transition-all
    duration-300
    hover:border-slate-300
    hover:bg-slate-50
    hover:text-slate-900
    hover:-translate-x-0.5
  "
        >
          <ArrowLeft
            className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:-translate-x-1
    "
          />
          Back
        </Button>

        <Button
          disabled={!valid}
          onClick={onNext}
          className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[var(--color-primary)] text-white hover:opacity-90 h-12 px-6 text-base rounded-xl min-w-[180px]"
        >
          Continue
        </Button>
      </div>
    </Stack>
  );
}
