import { useFormContext, useFieldArray } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import type { ClaimEvidenceData } from "../../schemas/claim-evidence.schema";


export function EvidenceSection() {


  const {
    register,
    control,
    formState:{
      errors,
    },
  } = useFormContext<ClaimEvidenceData>();



  const {
    fields,
    append,
    remove,
  } = useFieldArray({

    control,

    name:"witnesses",

  });



  return (

    <FormSection
      title="Evidence & Supporting Information"
      description="Provide any information that can help us assess your claim."
    >


      <div className="space-y-10">



        {/* Attachments */}

        <section className="space-y-5">


          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Supporting Documents
            </h3>


            <p className="mt-1 text-sm text-slate-500">
              Add photos, reports, or documents related to the claim.
            </p>

          </div>



          <div
            className="
              rounded-2xl
              border-2
              border-dashed
              border-slate-200
              bg-slate-50
              p-8
              text-center
              transition
              hover:border-orange-300
            "
          >

            <p className="text-sm text-slate-600">
              Upload evidence files
            </p>


            <p className="mt-1 text-xs text-slate-400">
              Photos, documents, repair estimates
            </p>


            <button
              type="button"
              className="
                mt-5
                rounded-xl
                border
                border-slate-300
                bg-white
                px-5
                py-2
                text-sm
                font-medium
                text-slate-700
                hover:bg-slate-50
              "
            >
              Add files
            </button>


          </div>


        </section>



        <div className="border-t border-slate-200"/>



        {/* Witnesses */}


        <section className="space-y-5">


          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Witness Information
            </h3>


            <p className="mt-1 text-sm text-slate-500">
              Add anyone who witnessed the incident.
            </p>

          </div>




          {errors.witnesses?.message && (

            <Text className="text-sm text-red-500">
              {String(errors.witnesses.message)}
            </Text>

          )}




          <div className="space-y-4">


            {fields.map((field,index)=>(

              <div
                key={field.id}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  space-y-4
                "
              >


                <div className="flex items-center justify-between">

                  <p className="font-medium text-slate-900">
                    Witness {index + 1}
                  </p>


                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm text-red-500"
                  >
                    Remove
                  </button>


                </div>



                <Input
                  placeholder="Witness name"
                  {...register(
                    `witnesses.${index}.name`
                  )}
                />



                {errors.witnesses?.[index]?.name?.message && (

                  <Text className="text-sm text-red-500">
                    {String(
                      errors.witnesses[index]?.name?.message
                    )}
                  </Text>

                )}



                <Input
                  placeholder="Witness phone number"
                  {...register(
                    `witnesses.${index}.phone`
                  )}
                />


              </div>


            ))}


          </div>




          <button

            type="button"

            disabled={fields.length >= 6}

            onClick={() =>
              append({
                name:"",
                phone:"",
              })
            }

            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-700
              disabled:opacity-50
            "

          >

            + Add witness

          </button>


        </section>



        <div className="border-t border-slate-200"/>



        {/* Notes */}


        <section className="space-y-4">


          <div>

            <h3 className="text-base font-semibold text-slate-900">
              Additional Notes
            </h3>


          </div>



          <textarea

            {...register("evidenceNotes")}

            rows={5}

            placeholder="Add any additional information..."

            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              text-sm
              outline-none
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-400/10
            "

          />


        </section>


      </div>


    </FormSection>

  );
}