import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";

import { Text } from "@/shared/components/design-system/typography/Text";

import type { ClaimStep2Data } from "../../schemas/claim-step2.schema";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";


const claimTypes = [
  "collision",
  "theft",
  "fire",
  "vandalism",
  "other",
] as const;


export default function IncidentSection() {

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<ClaimStep2Data>();


  const selectedClaimType = watch("claimType");


  return (

    <FormSection
      title="Incident Details"
      description="Tell us when, where and how the incident happened."
    >

      <div className="space-y-10">


        {/* Incident Type */}

        <section className="space-y-6">

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Incident Type
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Select the event that best describes what happened.
            </p>
          </div>


          <SelectField
            label="Claim Type"
            value={selectedClaimType ?? ""}
            options={claimTypes}
            onChange={(value) => {
              control._subjects.state.next({
                name: "claimType",
              });

              register("claimType").onChange({
                target: {
                  name: "claimType",
                  value,
                },
              });
            }}
            error={errors.claimType?.message}
          />

        </section>



        <div className="border-t border-slate-200" />



        {/* Date and Location */}

        <section className="space-y-6">

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Incident Location & Time
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Provide the approximate details of when and where it occurred.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-2">

            <Input
              type="date"
              {...register("incidentDate")}
              error={!!errors.incidentDate}
            />


            <Input
              type="time"
              {...register("incidentTime")}
              error={!!errors.incidentTime}
            />


          </div>


          <div className="grid gap-6 md:grid-cols-2">


            <Input
              placeholder="Country"
              {...register("country")}
              error={!!errors.country}
            />


            <Input
              placeholder="City"
              {...register("city")}
              error={!!errors.city}
            />


          </div>


          <Input
            placeholder="Exact location"
            {...register("exactLocation")}
            error={!!errors.exactLocation}
          />

        </section>



        <div className="border-t border-slate-200" />



        {/* Description */}

        <section className="space-y-4">

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Incident Description
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Describe what happened in your own words.
            </p>
          </div>


          <textarea
            {...register("description")}
            rows={5}
            placeholder="Describe the incident..."
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/10
            "
          />


          {errors.description?.message && (
            <Text className="text-sm text-red-500">
              {String(errors.description.message)}
            </Text>
          )}

        </section>



        <div className="border-t border-slate-200" />



        {/* Additional Information */}

        <section className="space-y-6">

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Additional Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Help us understand the circumstances around the incident.
            </p>
          </div>


          <Input
            placeholder="Police report number (optional)"
            {...register("policeReportNumber")}
          />


          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              {...register("anyoneInjured")}
              className="h-4 w-4 rounded border-slate-300"
            />

            Anyone injured
          </label>


          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              {...register("emergencyServicesCalled")}
              className="h-4 w-4 rounded border-slate-300"
            />

            Emergency services or police were called
          </label>


          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              {...register("vehicleDrivable")}
              className="h-4 w-4 rounded border-slate-300"
            />

            Vehicle is still drivable
          </label>


        </section>


        {selectedClaimType === "collision" && (

          <section className="space-y-4">

            <h3 className="text-base font-semibold text-slate-900">
              Vehicle Information
            </h3>


            <Input
              placeholder="Vehicle registration number"
              {...register("vehicleRegistration")}
            />

          </section>

        )}


      </div>

    </FormSection>

  );
}