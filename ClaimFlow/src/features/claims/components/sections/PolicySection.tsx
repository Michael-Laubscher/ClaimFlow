import { Controller, useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimStep1Data } from "../../schemas/claim-step1.schema";

const policyTypes = ["motor", "home", "commercial"] as const;

const claimTypes = ["collision", "theft", "fire"] as const;

export default function PolicySection() {
  const {
    register,
    control,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimStep1Data>();

  return (
    <FormSection title="Policy Information" description="Provide the policy details related to this claim.">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Policy Type */}

        <Controller
          name="policyType"
          control={control}
          render={({ field }) => (
            <FormField label="Policy Type" error={errors.policyType?.message}>
              <SelectField value={field.value ?? ""} options={policyTypes} placeholder="Select policy type" onChange={field.onChange} />
            </FormField>
          )}
        />

        {/* Claim Type */}

        <Controller
          name="claimType"
          control={control}
          render={({ field }) => (
            <FormField label="Claim Type" error={errors.claimType?.message}>
              <SelectField value={field.value ?? ""} options={claimTypes} placeholder="Select claim type" onChange={field.onChange} />
            </FormField>
          )}
        />

        {/* Policy Number */}

        <div className="md:col-span-2">
          <FormField label="Policy Number" error={errors.policyNumber?.message}>
            <Input {...register("policyNumber")} placeholder="Policy number" error={!!errors.policyNumber} success={!!dirtyFields.policyNumber && !errors.policyNumber} />
          </FormField>
        </div>
      </div>
    </FormSection>
  );
}
