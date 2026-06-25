import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { useFormContext } from "react-hook-form";

export function AssessmentSection() {
  const { register } = useFormContext();

  return (
    <FormSection
      title="Assessment"
      description="Damage assessment details"
    >
      <Input placeholder="Assessor Name" {...register("assessorName")} />

      <Input
        placeholder="Assessor Email"
        type="email"
        {...register("assessorEmail")}
      />

      <Input
        type="date"
        {...register("assessmentDate")}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Estimated Loss (e.g. 15000.00)"
          {...register("estimatedLoss")}
        />

        <select
          {...register("damageSeverity")}
          className="rounded-xl border px-4 py-3"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      <textarea
        {...register("assessmentNotes")}
        placeholder="Assessment notes"
        className="w-full rounded-xl border px-4 py-3"
      />

      <label className="flex items-center gap-2 mt-2">
        <input type="checkbox" {...register("requiresReinspection")} />
        Requires reinspection
      </label>
    </FormSection>
  );
}