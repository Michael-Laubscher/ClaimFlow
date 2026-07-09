import { useForm } from "react-hook-form";

import type { ClaimVehicleData } from "../schemas/claim-vehicle.schema";

import { CLAIM_STORAGE_KEYS, usePersistedForm } from "@/features/claims/hooks/usePersistedForm";

type Props = {
  defaultValues?: Partial<ClaimVehicleData>;
};

export function useClaimVehicleForm({ defaultValues }: Props = {}) {
  const methods = useForm<ClaimVehicleData>({
    defaultValues: {
      registrationNumber: "",
      make: "",
      model: "",
      year: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step4);

  return methods;
}
