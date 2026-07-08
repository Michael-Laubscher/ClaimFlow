import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { claimStep1Schema, type ClaimStep1Data } from "../schemas/claim-step1.schema";

export function useClaimStep1Form(defaultValues?: Partial<ClaimStep1Data>) {
  return useZodForm(claimStep1Schema, {
    defaultValues: {
      policyNumber: "",
      fullName: "",
      email: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step1);

  return methods;
}