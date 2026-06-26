import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimStep2Data } from "../../schemas/claim-step2.schema";

const claimTypes = ["collision", "theft", "fire", "vandalism", "other"] as const;

export default function IncidentSection() {
  const {
    register,
    watch,
    setValue,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimStep2Data>();

  const selectedClaimType = watch("claimType");

  return (
    <FormSection title="Incident Details" description="Tell us when, where and how the incident happened.">
      <div className="space-y-12">
        {/* Incident Type */}

        <section className="space-y-6">
          <SectionHeader title="Incident Type" description="Select the event that best describes what happened." />

          <FormField label="Claim Type" error={errors.claimType?.message}>
            <SelectField
              value={selectedClaimType ?? ""}
              options={claimTypes}
              onChange={(value) => {
                setValue("claimType", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              error={errors.claimType?.message}
            />
          </FormField>
        </section>

        <Divider />

        {/* Date Location */}

        <section className="space-y-6">
          <SectionHeader title="Incident Location & Time" description="Provide the approximate details of when and where it occurred." />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Incident Date" error={errors.incidentDate?.message}>
              <Input type="date" {...register("incidentDate")} error={!!errors.incidentDate} success={!!dirtyFields.incidentDate && !errors.incidentDate} />
            </FormField>

            <FormField label="Incident Time" error={errors.incidentTime?.message}>
              <Input type="time" {...register("incidentTime")} error={!!errors.incidentTime} success={!!dirtyFields.incidentTime && !errors.incidentTime} />
            </FormField>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Country" error={errors.country?.message}>
              <Input placeholder="Country" {...register("country")} error={!!errors.country} success={!!dirtyFields.country && !errors.country} />
            </FormField>

            <FormField label="City" error={errors.city?.message}>
              <Input placeholder="City" {...register("city")} error={!!errors.city} success={!!dirtyFields.city && !errors.city} />
            </FormField>
          </div>

          <FormField label="Exact Incident Location" error={errors.exactLocation?.message}>
            <Input placeholder="Exact incident location" {...register("exactLocation")} error={!!errors.exactLocation} success={!!dirtyFields.exactLocation && !errors.exactLocation} />
          </FormField>
        </section>

        <Divider />

        {/* Description */}

        <section className="space-y-5">
          <SectionHeader title="Incident Description" description="Describe what happened in your own words." />

          <FormField label="Description" error={errors.description?.message}>
            <Textarea rows={6} placeholder="Describe the incident..." {...register("description")} error={!!errors.description} success={!!dirtyFields.description && !errors.description} />
          </FormField>
        </section>

        <Divider />

        {/* Additional Information */}

        <section className="space-y-6">
          <SectionHeader title="Additional Information" description="Help us understand the circumstances around the incident." />

          <FormField label="Police Report Number" helperText="Optional">
            <Input placeholder="Police report number" {...register("policeReportNumber")} />
          </FormField>

          <PremiumCheckbox label="Anyone injured" {...register("anyoneInjured")} />

          <PremiumCheckbox label="Emergency services or police were called" {...register("emergencyServicesCalled")} />

          <PremiumCheckbox label="Vehicle is still drivable" {...register("vehicleDrivable")} />
        </section>

        {/* Collision Extra */}

        {selectedClaimType === "collision" && (
          <section
            className="
                space-y-5
                rounded-2xl
                border
                border-orange-100
                bg-orange-50/40
                p-6
              "
          >
            <SectionHeader title="Vehicle Information" description="Additional details required for collision claims." />

            <FormField label="Vehicle Registration Number" error={errors.vehicleRegistration?.message}>
              <Input
                placeholder="Vehicle registration number"
                {...register("vehicleRegistration")}
                error={!!errors.vehicleRegistration}
                success={!!dirtyFields.vehicleRegistration && !errors.vehicleRegistration}
              />
            </FormField>
          </section>
        )}
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

function PremiumCheckbox({
  label,

  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
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

        transition-all

        hover:border-orange-300

        hover:bg-orange-50/40
      "
    >
      <input
        {...props}
        type="checkbox"
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

      <span
        className="
          text-sm
          text-slate-700
        "
      >
        {label}
      </span>
    </label>
  );
}
