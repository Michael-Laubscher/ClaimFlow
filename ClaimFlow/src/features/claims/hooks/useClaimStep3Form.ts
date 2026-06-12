import type { UseFormProps } from "react-hook-form";

import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { claimStep3Schema, type ClaimStep3Data } from "../schemas/claim-step3.schema";

export function useClaimStep3Form(options?: UseFormProps<ClaimStep3Data>) {
  return useZodForm(claimStep3Schema, {
    defaultValues: {
      attachments: [],
    },
    ...options,
  });
}
