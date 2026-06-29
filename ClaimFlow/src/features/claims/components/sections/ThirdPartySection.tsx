import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimThirdPartyData } from "../../schemas/claim-thirdparty.schema";

export function ThirdPartySection() {
  const {
    register,
    watch,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimThirdPartyData>();

  const hasThirdParty = watch("hasThirdParty");

  return (
    <FormSection title="Third Party Information" description="Tell us if another person, vehicle, or property was involved.">
      <div className="space-y-8">
        {/* Toggle */}

        <section
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-6
          "
        >
          <label
            className="
              flex
              cursor-pointer
              items-start
              gap-4
            "
          >
            <input
              type="checkbox"
              {...register("hasThirdParty")}
              className="
                mt-1
                h-5
                w-5
                rounded
                border-slate-300
                text-orange-500
                focus:ring-2
                focus:ring-orange-400/30
              "
            />

            <div>
              <p className="font-medium text-slate-900">Another party was involved</p>

              <p className="mt-1 text-sm text-slate-500">Select this if another driver, person, vehicle, or property was involved.</p>
            </div>
          </label>

          {errors.hasThirdParty?.message && <p className="mt-3 text-sm text-red-500">{String(errors.hasThirdParty.message)}</p>}
        </section>

        {hasThirdParty && (
          <section className="space-y-6">
            <SectionHeader title="Third Party Details" description="Provide the details of the other party involved." />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="Full Name" error={errors.thirdPartyName?.message}>
                <Input placeholder="Full name" {...register("thirdPartyName")} error={!!errors.thirdPartyName} success={!!dirtyFields.thirdPartyName && !errors.thirdPartyName} />
              </FormField>

              <FormField label="Phone Number" error={errors.thirdPartyPhone?.message}>
                <Input placeholder="Phone number" {...register("thirdPartyPhone")} error={!!errors.thirdPartyPhone} success={!!dirtyFields.thirdPartyPhone && !errors.thirdPartyPhone} />
              </FormField>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="Insurance Provider" error={errors.thirdPartyInsurance?.message}>
                <Input
                  placeholder="Insurance provider"
                  {...register("thirdPartyInsurance")}
                  error={!!errors.thirdPartyInsurance}
                  success={!!dirtyFields.thirdPartyInsurance && !errors.thirdPartyInsurance}
                />
              </FormField>

              <FormField label="Vehicle Registration" error={errors.thirdPartyVehicle?.message}>
                <Input
                  placeholder="Vehicle registration"
                  {...register("thirdPartyVehicle")}
                  error={!!errors.thirdPartyVehicle}
                  success={!!dirtyFields.thirdPartyVehicle && !errors.thirdPartyVehicle}
                />
              </FormField>
            </div>
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
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>

      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}
