import { useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";

import type { ClaimAssessmentData } from "../../schemas/claim-assessment.schema";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";

const damageLevels = ["low", "medium", "high", "critical"] as const;

export function AssessmentSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ClaimAssessmentData>();

  const damageSeverity = watch("damageSeverity") ?? "";

  return (
    <FormSection title="Assessment" description="Capture the evaluation details and estimated impact of this claim.">
      <div className="space-y-10">
        {/* Assessor */}

        <section className="space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Assessment Information</h3>

            <p className="mt-1 text-sm text-slate-500">Details of the person completing the assessment.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input placeholder="Assessor name" {...register("assessorName")} error={!!errors.assessorName} />

            <Input placeholder="Assessor email" type="email" {...register("assessorEmail")} error={!!errors.assessorEmail} />
          </div>

          <Input type="date" {...register("assessmentDate")} error={!!errors.assessmentDate} />
        </section>

        <div className="border-t border-slate-200" />

        {/* Damage */}

        <section className="space-y-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Damage Evaluation</h3>

            <p className="mt-1 text-sm text-slate-500">Estimate the severity and financial impact.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input placeholder="Estimated loss" {...register("estimatedLoss")} error={!!errors.estimatedLoss} />

            <SelectField
              label="Damage Severity"
              value={damageSeverity}
              options={damageLevels}
              onChange={(value) => {
                register("damageSeverity").onChange({
                  target: {
                    name: "damageSeverity",
                    value,
                  },
                });
              }}
              error={errors.damageSeverity?.message}
            />
          </div>
        </section>

        <div className="border-t border-slate-200" />

        {/* Notes */}

        <section className="space-y-5">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Assessment Notes</h3>
          </div>

          <textarea
            {...register("assessmentNotes")}
            rows={5}
            placeholder="Add assessment notes..."
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

        {/* Reinspection */}

        <label className="flex items-center gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            {...register("requiresReinspection")}
            className="
              h-4
              w-4
              rounded
              border-slate-300
            "
          />
          Requires reinspection
        </label>
      </div>
    </FormSection>
  );
}
