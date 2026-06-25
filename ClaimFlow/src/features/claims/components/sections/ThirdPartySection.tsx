import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import { useFormContext } from "react-hook-form";

export function ThirdPartySection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const hasThirdParty = watch("hasThirdParty");

  return (
    <FormSection
      title="Third Party Information"
      description="Other parties involved"
    >
      
      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" {...register("hasThirdParty")} />
        Third party involved
      </label>

      {errors.hasThirdParty?.message && (
        <Text className="text-sm text-red-500">
          {String(errors.hasThirdParty.message)}
        </Text>
      )}

      
      {hasThirdParty && (
        <>
          <Input placeholder="Third Party Name" {...register("thirdPartyName")} />
          {errors.thirdPartyName?.message && (
            <Text className="text-sm text-red-500">
              {String(errors.thirdPartyName.message)}
            </Text>
          )}

          <Input placeholder="Phone Number" {...register("thirdPartyPhone")} />
          {errors.thirdPartyPhone?.message && (
            <Text className="text-sm text-red-500">
              {String(errors.thirdPartyPhone.message)}
            </Text>
          )}

          <Input placeholder="Insurance Provider" {...register("thirdPartyInsurance")} />
          {errors.thirdPartyInsurance?.message && (
            <Text className="text-sm text-red-500">
              {String(errors.thirdPartyInsurance.message)}
            </Text>
          )}

          <Input placeholder="Vehicle Registration" {...register("thirdPartyVehicle")} />
          {errors.thirdPartyVehicle?.message && (
            <Text className="text-sm text-red-500">
              {String(errors.thirdPartyVehicle.message)}
            </Text>
          )}
        </>
      )}
    </FormSection>
  );
}