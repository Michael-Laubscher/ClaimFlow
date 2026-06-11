import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { claimSchema, type ClaimFormData } from "../validation/claim.schema";

interface UseClaimFormOptions {
  defaultValues?: Partial<ClaimFormData>;
}

export const useClaimForm = (options?: UseClaimFormOptions) => {
  return useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),

    mode: "onBlur",
    reValidateMode: "onChange",

    defaultValues: {
      claimType: "vehicle",
      ...options?.defaultValues,
    },
  });
};
