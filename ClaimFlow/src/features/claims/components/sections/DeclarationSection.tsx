import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Text } from "@/shared/components/design-system/typography/Text";

import type { ClaimDeclarationData } from "../../schemas/claim-declaration.schema";

export function DeclarationSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ClaimDeclarationData>();

  return (
    <FormSection
      title="Declaration & Confirmation"
      description="
        Please review your information and confirm that everything
        provided in this claim is accurate.
      "
    >
      <div className="space-y-8">
        {/* Declaration notice */}

        <div
          className="
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
            p-6
          "
        >
          <h3
            className="
              font-semibold
              text-slate-900
            "
          >
            Declaration
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600
            "
          >
            I declare that the information provided in this claim is true, complete, and accurate to the best of my knowledge. I understand that providing false information may affect the outcome of
            this claim.
          </p>
        </div>

        {/* Signature */}

        <section className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Digital Signature</h3>

            <p className="mt-1 text-sm text-slate-500">Enter your full name as confirmation.</p>
          </div>

          <Input placeholder="Full name" {...register("signedBy")} error={!!errors.signedBy} />

          {errors.signedBy?.message && <Text className="text-sm text-red-500">{String(errors.signedBy.message)}</Text>}
        </section>

        {/* Acceptance */}

        <section
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
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
              {...register("accepted")}
              className="
                mt-1
                h-5
                w-5
                rounded
                border-slate-300
              "
            />

            <span className="text-sm text-slate-700">I confirm that the information supplied is correct and I agree to proceed with this claim submission.</span>
          </label>

          {errors.accepted?.message && <Text className="mt-3 text-sm text-red-500">{String(errors.accepted.message)}</Text>}
        </section>

        {/* Comments */}

        <section className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Additional Comments</h3>

          <textarea
            {...register("additionalComments")}
            rows={5}
            placeholder="Anything else you would like us to know?"
            className="
              w-full
              rounded-xl
              border
              border-slate-200
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
        </section>
      </div>
    </FormSection>
  );
}
