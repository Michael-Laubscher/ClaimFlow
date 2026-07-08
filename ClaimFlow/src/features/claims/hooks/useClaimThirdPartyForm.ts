import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import { claimThirdPartySchema, type ClaimThirdPartyData } from "../schemas/claim-thirdparty.schema";

import { CLAIM_STORAGE_KEYS, usePersistedForm } from "@/features/claims/hooks/usePersistedForm";

type Props = {
  defaultValues?: Partial<ClaimThirdPartyData>;
};

export function useClaimThirdPartyForm({ defaultValues }: Props = {}) {
  const methods = useZodForm(claimThirdPartySchema, {
    defaultValues: {
      hasThirdParty: false,
      thirdPartyName: "",
      thirdPartyPhone: "",
      thirdPartyInsurance: "",
      thirdPartyVehicle: "",
      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step5);

  return methods;
}
