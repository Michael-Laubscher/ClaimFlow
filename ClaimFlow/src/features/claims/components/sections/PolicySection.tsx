import { useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Text } from "@/shared/components/design-system/typography/Text";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";

export default function PolicySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection title="Policy Details" description="Enter your policy information">
      <Input {...register("policyNumber")} placeholder="Policy Number" />

      {errors.policyNumber?.message && <Text className="text-red-500 text-sm">{errors.policyNumber.message as string}</Text>}
    </FormSection>
  );
}
