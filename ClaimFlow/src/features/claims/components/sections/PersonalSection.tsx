import { useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/Input/Input";
import { Typography } from "@/shared/components/design-system/typography/Typography";

export default function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection title="Personal Details" description="Your contact information">
      <Input {...register("fullName")} placeholder="Full Name" />
      {errors.fullName?.message && <Typography className="text-red-500 text-sm">{errors.fullName.message as string}</Typography>}

      <Input {...register("email")} placeholder="Email" />
      {errors.email?.message && <Typography className="text-red-500 text-sm">{errors.email.message as string}</Typography>}
    </FormSection>
  );
}
