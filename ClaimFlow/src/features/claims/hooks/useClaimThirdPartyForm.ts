import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import {
  claimThirdPartySchema,
  type ClaimThirdPartyData,
} from "../schemas/claim-thirdparty.schema";

type Props = {
  defaultValues?: Partial<ClaimThirdPartyData>;
};

export function useClaimThirdPartyForm({ defaultValues }: Props = {}) {
  return useZodForm(claimThirdPartySchema, {
    defaultValues: {
      hasThirdParty: false,
      thirdPartyName: "",
      thirdPartyPhone: "",
      thirdPartyInsurance: "",
      thirdPartyVehicle: "",
      ...defaultValues,
    },
  });
}