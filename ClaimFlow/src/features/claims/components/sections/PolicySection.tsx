import { useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { FormError } from "@/shared/components/forms/components/FormError";
import type { ClaimStep1Data } from "../../schemas/claim-step1.schema";

export default function PolicySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ClaimStep1Data>();

  return (
    <FormSection title="Policy Details" description="Enter your policy information">
      <Input
        {...register("policyNumber")}
        placeholder="Policy Number"
        error={!!errors.policyNumber}
      />

      <FormError message={errors.policyNumber?.message} />
    </FormSection>
  );
}