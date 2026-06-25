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
    <FormSection title="Personal Details" description="Your contact information">
      <div>
        <Input {...register("claimant.fullName")} placeholder="Full Name" error={!!errors.claimant?.fullName} />

        <FormError message={errors.claimant?.fullName?.message} />
      </div>

      <div>
        <Input {...register("claimant.email")} type="email" placeholder="Email Address" error={!!errors.claimant?.email} />

        <FormError message={errors.claimant?.email?.message} />
      </div>
      <div>
        <Input {...register("claimant.contactNumber")} placeholder="Contact Number" error={!!errors.claimant?.contactNumber} />

        <FormError message={errors.claimant?.contactNumber?.message} />
      </div>
    </FormSection>
  );
}
