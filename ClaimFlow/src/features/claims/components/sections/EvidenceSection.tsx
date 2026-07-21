import { useFormContext, useFieldArray } from "react-hook-form";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";

import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import type { ClaimEvidenceData } from "../../schemas/claim-evidence.schema";
import { AttachmentsSection } from "./AttachmentSection";

export function EvidenceSection() {
  const {
    register,
    control,

    formState: { errors, dirtyFields },
  } = useFormContext<ClaimEvidenceData>();

  const { fields, append, remove } = useFieldArray({
    control,

    name: "witnesses",
  });

  return (
    <FormSection title="Evidence & Supporting Information" description="Provide any information that can help us assess your claim.">
      <div className="space-y-10">
        {/* Attachments */}
        <section className="space-y-5">
          <AttachmentsSection />
        </section>

        <Divider />

        {/* Witnesses */}

        <section className="space-y-5">
          <SectionHeader title="Witness Information" description="Add anyone who witnessed the incident." />

          {errors.witnesses?.message && <p className="text-sm text-red-500">{String(errors.witnesses.message)}</p>}

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="
                  space-y-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-900">Witness {index + 1}</p>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="
                      text-sm
                      text-red-500
                      hover:text-red-600
                    "
                  >
                    Remove
                  </button>
                </div>

                <FormField label="Witness Name" error={errors.witnesses?.[index]?.name?.message}>
                  <Input
                    placeholder="Witness name"
                    {...register(`witnesses.${index}.name`)}
                    error={!!errors.witnesses?.[index]?.name}
                    success={!!dirtyFields.witnesses?.[index]?.name && !errors.witnesses?.[index]?.name}
                  />
                </FormField>

                <FormField label="Witness Phone Number" error={errors.witnesses?.[index]?.phone?.message}>
                  <Input
                    placeholder="Witness phone number"
                    {...register(`witnesses.${index}.phone`)}
                    error={!!errors.witnesses?.[index]?.phone}
                    success={!!dirtyFields.witnesses?.[index]?.phone && !errors.witnesses?.[index]?.phone}
                  />
                </FormField>
              </div>
            ))}
          </div>

          <button
            type="button"
            disabled={fields.length >= 6}
            onClick={() =>
              append({
                name: "",
                phone: "",
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

        <Divider />

        {/* Notes */}

        <section className="space-y-4">
          <SectionHeader title="Additional Notes" description="Add any additional information." />

          <FormField label="Evidence Notes" error={errors.evidenceNotes?.message}>
            <Textarea
              rows={5}
              placeholder="Add any additional information..."
              {...register("evidenceNotes")}
              error={!!errors.evidenceNotes}
              success={!!dirtyFields.evidenceNotes && !errors.evidenceNotes}
            />
          </FormField>
        </section>
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
