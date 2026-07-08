import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import {
  claimAssessmentSchema,
  type ClaimAssessmentData,
} from "../schemas/claim-assessment.schema";

type Props = {
  defaultValues?: Partial<ClaimAssessmentData>;
};

export function useClaimAssessmentForm({ defaultValues }: Props = {}) {
  return useZodForm(claimAssessmentSchema, {
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
}