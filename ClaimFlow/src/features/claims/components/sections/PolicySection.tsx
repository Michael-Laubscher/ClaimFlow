import { Controller, useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { FormError } from "@/shared/components/forms/components/FormError";


import type { ClaimStep1Data } from "../../schemas/claim-step1.schema";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";


const policyTypes = [
  "motor",
  "home",
  "commercial",
] as const;


const claimTypes = [
  "collision",
  "theft",
  "fire",
] as const;


export default function PolicySection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ClaimStep1Data>();


  return (
    <FormSection
      title="Policy Information"
      description="Provide the policy details related to this claim."
    >

      <div className="grid gap-6 md:grid-cols-2">

        {/* Policy Type */}
        <Controller
          name="policyType"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Policy Type"
              value={field.value ?? ""}
              options={policyTypes}
              onChange={field.onChange}
              error={errors.policyType?.message}
            />
          )}
        />


        {/* Claim Type */}
        <Controller
          name="claimType"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Claim Type"
              value={field.value ?? ""}
              options={claimTypes}
              onChange={field.onChange}
              error={errors.claimType?.message}
            />
          )}
        />


        {/* Policy Number */}
        <div className="space-y-2 md:col-span-2">

          <Input
            {...register("policyNumber")}
            placeholder="Policy number"
            error={!!errors.policyNumber}
          />

          <FormError
            message={errors.policyNumber?.message}
          />

        </div>

      </div>

    </FormSection>
  );
}