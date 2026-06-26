import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import type { ClaimVehicleData } from "../../schemas/claim-vehicle.schema";


export function VehicleSection() {

  const {
    register,
    formState: {
      errors,
    },
  } = useFormContext<ClaimVehicleData>();



  return (

    <FormSection
      title="Vehicle Details"
      description="Provide information about the vehicle involved in this claim."
    >


      <div className="space-y-10">


        {/* Vehicle Identification */}

        <section className="space-y-6">

          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Vehicle Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Enter the details that identify the vehicle.
            </p>

          </div>



          <div className="grid gap-6 md:grid-cols-2">


            <div>

              <Input
                placeholder="Registration number"
                {...register("registrationNumber")}
                error={!!errors.registrationNumber}
              />


              {errors.registrationNumber?.message && (
                <Text className="text-sm text-red-500">
                  {String(errors.registrationNumber.message)}
                </Text>
              )}

            </div>



            <div>

              <Input
                placeholder="Year"
                {...register("year")}
                error={!!errors.year}
              />


              {errors.year?.message && (
                <Text className="text-sm text-red-500">
                  {String(errors.year.message)}
                </Text>
              )}

            </div>


          </div>



          <div className="grid gap-6 md:grid-cols-2">


            <div>

              <Input
                placeholder="Make"
                {...register("make")}
                error={!!errors.make}
              />


              {errors.make?.message && (
                <Text className="text-sm text-red-500">
                  {String(errors.make.message)}
                </Text>
              )}

            </div>



            <div>

              <Input
                placeholder="Model"
                {...register("model")}
                error={!!errors.model}
              />


              {errors.model?.message && (
                <Text className="text-sm text-red-500">
                  {String(errors.model.message)}
                </Text>
              )}

            </div>


          </div>


        </section>



        <div className="border-t border-slate-200" />



        {/* Damage Information */}

        <section className="space-y-5">


          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Damage Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Describe the damage caused by the incident.
            </p>

          </div>



          <textarea
            {...register("damageDescription")}
            rows={5}
            placeholder="Describe vehicle damage..."
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


          {errors.damageDescription?.message && (

            <Text className="text-sm text-red-500">
              {String(errors.damageDescription.message)}
            </Text>

          )}


        </section>



        <div className="border-t border-slate-200" />



        {/* Vehicle Status */}

        <section className="space-y-5">


          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Vehicle Condition
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Let us know whether the vehicle can still be used.
            </p>

          </div>



          <label className="flex items-center gap-3 text-sm text-slate-700">

            <input
              type="checkbox"
              {...register("vehicleDrivable")}
              className="h-4 w-4 rounded border-slate-300"
            />

            Vehicle is drivable

          </label>


        </section>


      </div>


    </FormSection>

  );
}