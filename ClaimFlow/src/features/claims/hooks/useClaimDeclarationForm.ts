import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import {
  claimDeclarationSchema,
  type ClaimDeclarationData,
} from "../schemas/claim-declaration.schema";

type Props = {
  defaultValues?: Partial<ClaimDeclarationData>;
};

export function useClaimDeclarationForm({ defaultValues }: Props = {}) {
  return useZodForm(claimDeclarationSchema, {
    defaultValues: {
      accepted: false,
      dateSigned: new Date().toISOString().split("T")[0],
      signedBy: "",
      additionalComments: "",

      ...defaultValues,
    },
  });
}