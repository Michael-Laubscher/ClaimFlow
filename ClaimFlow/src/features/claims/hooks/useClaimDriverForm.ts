import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import {
  claimDriverSchema,
  type ClaimDriverData,
} from "../schemas/claim-driver.schema";

export function useClaimDriverForm(
  defaultValues?: Partial<ClaimDriverData>
) {
  return useZodForm(claimDriverSchema, {
    defaultValues: {
      driverName: "",
      driverLicense: "",
      driverPhone: "",
      driverAddress: "",
      ...defaultValues,
    },
  });
}