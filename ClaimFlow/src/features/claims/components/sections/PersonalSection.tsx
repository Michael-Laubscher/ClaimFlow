import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { FormError } from "@/shared/components/forms/components/FormError";

import type { ClaimFormData } from "../../schemas/claim.schema";

export default function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ClaimFormData>();

  return (
    <FormSection
      title="Claimant Information"
      description="Provide the contact details of the person submitting this claim."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div className="space-y-2 md:col-span-2">
          <Input
            {...register("claimant.fullName")}
            placeholder="Full name"
            error={!!errors.claimant?.fullName}
          />

          <FormError
            message={errors.claimant?.fullName?.message}
          />
        </div>

        <div className="space-y-2">
          <Input
            {...register("claimant.email")}
            type="email"
            placeholder="Email address"
            error={!!errors.claimant?.email}
          />

          <FormError
            message={errors.claimant?.email?.message}
          />
        </div>

        <div className="space-y-2">
          <Input
            {...register("claimant.contactNumber")}
            placeholder="Contact number"
            error={!!errors.claimant?.contactNumber}
          />

          <FormError
            message={errors.claimant?.contactNumber?.message}
          />
        </div>

      </div>
    </FormSection>
  );
}