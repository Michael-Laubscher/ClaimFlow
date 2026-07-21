import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import { usePersistedForm, CLAIM_STORAGE_KEYS } from "@/features/claims/hooks/usePersistedForm";

import { claimDriverSchema, type ClaimDriverData } from "../schemas/claim-driver.schema";

export function useClaimDriverForm(defaultValues?: Partial<ClaimDriverData>) {
  const methods = useZodForm(claimDriverSchema, {
    defaultValues: {
      driverName: "",
      driverLicense: "",
      driverPhone: "",
      driverAddress: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step3);

  return methods;
}
