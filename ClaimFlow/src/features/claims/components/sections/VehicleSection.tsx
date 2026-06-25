import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import { useFormContext } from "react-hook-form";

export function VehicleSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection
      title="Vehicle Details"
      description="Vehicle involved in incident"
    >
     
      <Input
        placeholder="Registration Number"
        {...register("registrationNumber")}
      />
      {errors.registrationNumber?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.registrationNumber.message)}
        </Text>
      )}

   
      <Input placeholder="Make" {...register("make")} />
      {errors.make?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.make.message)}
        </Text>
      )}

    
      <Input placeholder="Model" {...register("model")} />
      {errors.model?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.model.message)}
        </Text>
      )}

     
      <Input placeholder="Year" {...register("year")} />
      {errors.year?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.year.message)}
        </Text>
      )}

      
      <textarea
        {...register("damageDescription")}
        placeholder="Describe damage"
        className="w-full rounded-xl border px-4 py-3"
      />
      {errors.damageDescription?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.damageDescription.message)}
        </Text>
      )}
    </FormSection>
  );
}