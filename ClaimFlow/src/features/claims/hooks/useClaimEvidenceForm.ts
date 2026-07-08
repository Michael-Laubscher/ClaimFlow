import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import {
  claimEvidenceSchema,
  type ClaimEvidenceData,
} from "../schemas/claim-evidence.schema";

type Props = {
  defaultValues?: Partial<ClaimEvidenceData>;
};

export function useClaimEvidenceForm({ defaultValues }: Props = {}) {
  return useZodForm(claimEvidenceSchema, {
    defaultValues: {
      witnesses: [{ name: "", phone: "" }],
      evidenceNotes: "",
      attachments: [],

      ...defaultValues,
    },
  });
}