import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { claimStep1Schema, type ClaimStep1Data } from "../schemas/claim-step1.schema";
import { CLAIM_STORAGE_KEYS, usePersistedForm } from "./usePersistedForm";

export function useClaimStep1Form(defaultValues?: Partial<ClaimStep1Data>) {
  const methods = useZodForm(claimStep1Schema, {
    defaultValues: {
      policyType: undefined,
      claimType: undefined,
      policyNumber: "",
      claimant: {
        fullName: "",
        email: "",
        contactNumber: "",
        ...defaultValues?.claimant,
      },
      employeeNumber: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step1);

  return methods;
}
