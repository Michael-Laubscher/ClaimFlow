import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

export function DriverSection() {
  const {
    register,

    formState: { errors, dirtyFields },
  } = useFormContext();

  return (
    <FormSection title="Driver Details" description="Driver information at time of incident">
      <div className="space-y-6">
        <FormField label="Driver Name" error={errors.driverName?.message as string}>
          <Input placeholder="Driver Name" {...register("driverName")} error={!!errors.driverName} success={!!dirtyFields.driverName && !errors.driverName} />
        </FormField>

        <FormField label="Driver License Number" error={errors.driverLicense?.message as string}>
          <Input placeholder="Driver License Number" {...register("driverLicense")} error={!!errors.driverLicense} success={!!dirtyFields.driverLicense && !errors.driverLicense} />
        </FormField>

        <FormField label="Phone Number" error={errors.driverPhone?.message as string}>
          <Input placeholder="Phone Number" {...register("driverPhone")} error={!!errors.driverPhone} success={!!dirtyFields.driverPhone && !errors.driverPhone} />
        </FormField>

        <FormField label="Address" error={errors.driverAddress?.message as string}>
          <Input placeholder="Address" {...register("driverAddress")} error={!!errors.driverAddress} success={!!dirtyFields.driverAddress && !errors.driverAddress} />
        </FormField>
      </div>
    </FormSection>
  );
}
