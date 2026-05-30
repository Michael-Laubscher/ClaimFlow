import { useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";

export default function PolicySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection title="Policy Details" description="Enter your policy information">
      <Input {...register("policyNumber")} placeholder="Policy Number" />

      {errors.policyNumber?.message && <Typography className="text-red-500 text-sm">{errors.policyNumber.message as string}</Typography>}
    </FormSection>
  );
}
