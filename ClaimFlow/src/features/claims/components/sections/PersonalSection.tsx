import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { useFormContext } from "react-hook-form";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

export default function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection title="Personal Details" description="Your contact information">
      <Input {...register("fullName")} placeholder="Full Name" />
      {errors.fullName?.message && <Text className="text-red-500 text-sm">{errors.fullName.message as string}</Text>}

      <Input {...register("email")} placeholder="Email" />
      {errors.email?.message && <Text className="text-red-500 text-sm">{errors.email.message as string}</Text>}
    </FormSection>
  );
}
