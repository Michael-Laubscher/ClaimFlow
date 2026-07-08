import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import {
  claimStep1Schema,
  type ClaimStep1Data,
} from "../schemas/claim-step1.schema";

export function useClaimStep1Form(
  defaultValues?: Partial<ClaimStep1Data>,
) {
  return useZodForm(claimStep1Schema, {
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
}