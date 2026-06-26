import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimVehicleData } from "../../schemas/claim-vehicle.schema";

export function VehicleSection() {
  const {
    register,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimVehicleData>();

  return (
    <FormSection title="Vehicle Details" description="Provide information about the vehicle involved in this claim.">
      <div className="space-y-10">
        {/* Vehicle Identification */}

        <section className="space-y-6">
          <SectionHeader title="Vehicle Information" description="Enter the details that identify the vehicle." />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Registration Number" error={errors.registrationNumber?.message}>
              <Input
                placeholder="Registration number"
                {...register("registrationNumber")}
                error={!!errors.registrationNumber}
                success={!!dirtyFields.registrationNumber && !errors.registrationNumber}
              />
            </FormField>

            <FormField label="Year" error={errors.year?.message}>
              <Input placeholder="Year" {...register("year")} error={!!errors.year} success={!!dirtyFields.year && !errors.year} />
            </FormField>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Make" error={errors.make?.message}>
              <Input placeholder="Make" {...register("make")} error={!!errors.make} success={!!dirtyFields.make && !errors.make} />
            </FormField>

            <FormField label="Model" error={errors.model?.message}>
              <Input placeholder="Model" {...register("model")} error={!!errors.model} success={!!dirtyFields.model && !errors.model} />
            </FormField>
          </div>
        </section>

        <Divider />

        {/* Damage Information */}

        <section className="space-y-5">
          <SectionHeader title="Damage Information" description="Describe the damage caused by the incident." />

          <FormField label="Damage Description" error={errors.damageDescription?.message}>
            <Textarea
              rows={5}
              placeholder="Describe vehicle damage..."
              {...register("damageDescription")}
              error={!!errors.damageDescription}
              success={!!dirtyFields.damageDescription && !errors.damageDescription}
            />
          </FormField>
        </section>

        <Divider />

        {/* Vehicle Status */}

        <section className="space-y-5">
          <SectionHeader title="Vehicle Condition" description="Let us know whether the vehicle can still be used." />

          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-3

              rounded-xl
              border
              border-slate-200

              bg-white

              px-4
              py-3

              text-sm
              text-slate-700

              hover:border-orange-300
              hover:bg-orange-50/40
            "
          >
            <input
              type="checkbox"
              {...register("vehicleDrivable")}
              className="
                h-5
                w-5
                rounded
                border-slate-300
                text-orange-500
                focus:ring-2
                focus:ring-orange-400/30
              "
            />
            Vehicle is drivable
          </label>
        </section>
      </div>
    </FormSection>
  );
}

function SectionHeader({
  title,

  description,
}: {
  title: string;

  description: string;
}) {
  return (
    <div>
      <h3
        className="
          text-base
          font-semibold
          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          text-sm
          text-slate-500
        "
      >
        {description}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="
        border-t
        border-slate-200
      "
    />
  );
}
