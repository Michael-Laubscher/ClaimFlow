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
        <Input {...register("fullName")} placeholder="Full Name" error={!!errors.fullName} />

        <FormError message={errors.fullName?.message} />
      </div>

      <div>
        <Input {...register("email")} type="email" placeholder="Email Address" error={!!errors.email} />

        <FormError message={errors.email?.message} />
      </div>
    </FormSection>
  );
}
