import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { claimSchema, type ClaimFormData } from "../schemas/claim.schema";

interface UseClaimFormOptions {
  defaultValues?: Partial<ClaimFormData>;
}

export const useClaimForm = (options?: UseClaimFormOptions) => {
  return useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),

    mode: "onBlur",
    reValidateMode: "onChange",

    defaultValues: {
      step1: {
        claimType: "collision",
      },
      ...options?.defaultValues,
    },
  });
};
