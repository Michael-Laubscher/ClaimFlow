import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import { useFormContext } from "react-hook-form";

export function DriverSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormSection
      title="Driver Details"
      description="Driver information at time of incident"
    >
      
      <Input placeholder="Driver Name" {...register("driverName")} />
      {errors.driverName?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.driverName.message)}
        </Text>
      )}

     
      <Input placeholder="Driver License Number" {...register("driverLicense")} />
      {errors.driverLicense?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.driverLicense.message)}
        </Text>
      )}

   
      <Input placeholder="Phone Number" {...register("driverPhone")} />
      {errors.driverPhone?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.driverPhone.message)}
        </Text>
      )}

      
      <Input placeholder="Address" {...register("driverAddress")} />
      {errors.driverAddress?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.driverAddress.message)}
        </Text>
      )}
    </FormSection>
  );
}