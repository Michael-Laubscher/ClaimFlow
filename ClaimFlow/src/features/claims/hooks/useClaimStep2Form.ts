import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { type ClaimStep2Data, claimStep2Schema } from "../schemas/claim-step2.schema";
import { CLAIM_STORAGE_KEYS, usePersistedForm } from "./usePersistedForm";

export function useClaimStep2Form(defaultValues?: Partial<ClaimStep2Data>) {
  const methods = useZodForm(claimStep2Schema, {
    defaultValues: {
      incidentDate: "",
      incidentTime: "",
      country: "",
      city: "",
      exactLocation: "",
      claimType: "collision",
      description: "",
      anyoneInjured: false,
      emergencyServicesCalled: false,
      vehicleDrivable: false,
      policeReportNumber: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step2);

  return methods;
}
