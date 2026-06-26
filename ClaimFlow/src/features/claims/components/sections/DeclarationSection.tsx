import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimDeclarationData } from "../../schemas/claim-declaration.schema";

export function DeclarationSection() {
  const {
    register,

    formState: { errors, dirtyFields },
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
          <h3 className="font-semibold text-slate-900">Declaration</h3>

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

          <FormField label="Full Name" error={errors.signedBy?.message}>
            <Input placeholder="Full name" {...register("signedBy")} error={!!errors.signedBy} success={!!dirtyFields.signedBy && !errors.signedBy} />
          </FormField>
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
                text-orange-500
                focus:ring-2
                focus:ring-orange-400/30
              "
            />

            <span className="text-sm text-slate-700">I confirm that the information supplied is correct and I agree to proceed with this claim submission.</span>
          </label>

          {errors.accepted?.message && <p className="mt-3 text-sm text-red-500">{String(errors.accepted.message)}</p>}
        </section>

        {/* Comments */}

        <section className="space-y-3">
          <FormField label="Additional Comments" error={errors.additionalComments?.message}>
            <Textarea
              rows={5}
              placeholder="Anything else you would like us to know?"
              {...register("additionalComments")}
              error={!!errors.additionalComments}
              success={!!dirtyFields.additionalComments && !errors.additionalComments}
            />
          </FormField>
        </section>
      </div>
    </FormSection>
  );
}
