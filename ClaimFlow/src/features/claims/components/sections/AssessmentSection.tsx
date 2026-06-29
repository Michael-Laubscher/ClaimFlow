import { Controller, useFormContext } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { SelectField } from "@/shared/components/design-system/primitives/Input/SelectField";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimAssessmentData } from "../../schemas/claim-assessment.schema";

const damageLevels = ["low", "medium", "high", "critical"] as const;

export function AssessmentSection() {
  const {
    register,
    control,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimAssessmentData>();

  return (
    <FormSection title="Assessment" description="Capture the evaluation details and estimated impact of this claim.">
      <div className="space-y-10">
        {/* Assessor */}

        <section className="space-y-6">
          <SectionHeader title="Assessment Information" description="Details of the person completing the assessment." />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Assessor Name" error={errors.assessorName?.message}>
              <Input placeholder="Assessor name" {...register("assessorName")} error={!!errors.assessorName} success={!!dirtyFields.assessorName && !errors.assessorName} />
            </FormField>

            <FormField label="Assessor Email" error={errors.assessorEmail?.message}>
              <Input type="email" placeholder="Assessor email" {...register("assessorEmail")} error={!!errors.assessorEmail} success={!!dirtyFields.assessorEmail && !errors.assessorEmail} />
            </FormField>
          </div>

          <FormField label="Assessment Date" error={errors.assessmentDate?.message}>
            <Input type="date" {...register("assessmentDate")} error={!!errors.assessmentDate} success={!!dirtyFields.assessmentDate && !errors.assessmentDate} />
          </FormField>
        </section>

        <Divider />

        {/* Damage */}

        <section className="space-y-6">
          <SectionHeader title="Damage Evaluation" description="Estimate the severity and financial impact." />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Estimated Loss" error={errors.estimatedLoss?.message}>
              <Input placeholder="Estimated loss" {...register("estimatedLoss")} error={!!errors.estimatedLoss} success={!!dirtyFields.estimatedLoss && !errors.estimatedLoss} />
            </FormField>

            <Controller
              name="damageSeverity"
              control={control}
              render={({ field }) => (
                <FormField label="Damage Severity" error={errors.damageSeverity?.message}>
                  <SelectField value={field.value ?? ""} options={damageLevels} placeholder="Select severity" onChange={field.onChange} />
                </FormField>
              )}
            />
          </div>
        </section>

        <Divider />

        {/* Notes */}

        <section className="space-y-5">
          <SectionHeader title="Assessment Notes" description="Add any additional evaluation details." />

          <FormField label="Notes" error={errors.assessmentNotes?.message}>
            <Textarea
              rows={5}
              placeholder="Add assessment notes..."
              {...register("assessmentNotes")}
              error={!!errors.assessmentNotes}
              success={!!dirtyFields.assessmentNotes && !errors.assessmentNotes}
            />
          </FormField>
        </section>

        {/* Reinspection */}

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
            {...register("requiresReinspection")}
            className="
              h-5
              w-5
              rounded
              border-slate-300
              text-orange-500
            "
          />
          Requires reinspection
        </label>
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

function Divider() {
  return <div className="border-t border-slate-200" />;
}
