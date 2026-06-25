import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { useFormContext, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { claimEvidenceSchema } from "../../schemas/claim-evidence.schema";

type FormValues = z.infer<typeof claimEvidenceSchema>;

export function EvidenceSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "witnesses",
  });

  return (
    <FormSection
      title="Evidence"
      description="Witnesses and supporting information"
    >
      <div className="space-y-4">
        {/* GLOBAL ARRAY ERROR */}
        {errors.witnesses?.message && (
          <p className="text-red-600 text-sm">
            {errors.witnesses.message}
          </p>
        )}

        {fields.map((field, index) => (
          <div key={field.id} className="rounded-xl border p-4 space-y-2">
            <input
              {...register(`witnesses.${index}.name`)}
              placeholder="Witness name"
              className="w-full rounded-xl border px-4 py-3"
            />

            {errors.witnesses?.[index]?.name?.message && (
              <p className="text-red-600 text-sm">
                {errors.witnesses[index]?.name?.message}
              </p>
            )}

            <input
              {...register(`witnesses.${index}.phone`)}
              placeholder="Witness phone number"
              className="w-full rounded-xl border px-4 py-3"
            />

            {errors.witnesses?.[index]?.phone?.message && (
              <p className="text-red-600 text-sm">
                {errors.witnesses[index]?.phone?.message}
              </p>
            )}

            <button
              type="button"
              onClick={() => remove(index)}
              className="text-sm text-red-600"
            >
              Remove witness
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ name: "", phone: "" })}
          disabled={fields.length >= 6}
          className="rounded-xl border px-4 py-2 text-sm disabled:opacity-50"
        >
          + Add witness
        </button>

        <textarea
          {...register("evidenceNotes")}
          placeholder="Additional evidence notes"
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>
    </FormSection>
  );
}