import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import { claimAssessmentSchema, type ClaimAssessmentData } from "../schemas/claim-assessment.schema";

import { CLAIM_STORAGE_KEYS, usePersistedForm } from "./usePersistedForm";

type Props = {
  defaultValues?: Partial<ClaimAssessmentData>;
};

export function useClaimAssessmentForm({ defaultValues }: Props = {}) {
  const methods = useZodForm(claimAssessmentSchema, {
    defaultValues: {
      assessorName: "",
      assessorEmail: "",
      assessmentDate: new Date().toISOString().split("T")[0],
      estimatedLoss: "",
      currency: "ZAR",
      damageSeverity: "medium",
      assessmentNotes: "",
      requiresReinspection: false,

      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step7);

  return methods;
}
