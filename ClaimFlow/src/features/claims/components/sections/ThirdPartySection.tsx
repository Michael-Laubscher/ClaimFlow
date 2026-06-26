import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { ClaimThirdPartyData } from "../../schemas/claim-thirdparty.schema";




export function ThirdPartySection() {

  const {
    register,
    watch,
    formState: {
      errors,
    },
  } = useFormContext<ClaimThirdPartyData>();


  const hasThirdParty = watch("hasThirdParty");



  return (

    <FormSection
      title="Third Party Information"
      description="Tell us if another person, vehicle, or property was involved."
    >

      <div className="space-y-8">


        {/* Toggle */}

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">


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
              "
            />


            <div>

              <p className="font-medium text-slate-900">
                Another party was involved
              </p>


              <p className="mt-1 text-sm text-slate-500">
                Select this if another driver, person, vehicle, or property was involved.
              </p>

            </div>


          </label>



          {errors.hasThirdParty?.message && (

            <Text className="mt-3 text-sm text-red-500">
              {String(errors.hasThirdParty.message)}
            </Text>

          )}


        </section>




        {hasThirdParty && (

          <section className="space-y-6">


            <div>

              <h3 className="text-base font-semibold text-slate-900">
                Third Party Details
              </h3>


              <p className="mt-1 text-sm text-slate-500">
                Provide the details of the other party involved.
              </p>

            </div>



            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <Input
                  placeholder="Full name"
                  {...register("thirdPartyName")}
                  error={!!errors.thirdPartyName}
                />


                {errors.thirdPartyName?.message && (

                  <Text className="text-sm text-red-500">
                    {String(errors.thirdPartyName.message)}
                  </Text>

                )}

              </div>




              <div>

                <Input
                  placeholder="Phone number"
                  {...register("thirdPartyPhone")}
                  error={!!errors.thirdPartyPhone}
                />


                {errors.thirdPartyPhone?.message && (

                  <Text className="text-sm text-red-500">
                    {String(errors.thirdPartyPhone.message)}
                  </Text>

                )}

              </div>


            </div>




            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <Input
                  placeholder="Insurance provider"
                  {...register("thirdPartyInsurance")}
                />

              </div>



              <div>

                <Input
                  placeholder="Vehicle registration"
                  {...register("thirdPartyVehicle")}
                />

              </div>


            </div>


          </section>

        )}



      </div>


    </FormSection>

  );
}