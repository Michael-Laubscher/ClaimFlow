import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { claimStep2Schema, type ClaimStep2Data } from "../schemas/claim-step2.schema";

export function useClaimStep2Form(defaultValues?: Partial<ClaimStep2Data>) {
  return useZodForm(claimStep2Schema, {
    defaultValues: {
      incidentDate: "",
      claimType: "vehicle",
      description: "",
      ...defaultValues,
    },
  });
}
