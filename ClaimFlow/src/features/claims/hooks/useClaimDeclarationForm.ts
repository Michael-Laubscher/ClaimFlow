import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import { claimDeclarationSchema, type ClaimDeclarationData } from "../schemas/claim-declaration.schema";

import { CLAIM_STORAGE_KEYS, usePersistedForm } from "./usePersistedForm";

type Props = {
  defaultValues?: Partial<ClaimDeclarationData>;
};

export function useClaimDeclarationForm({ defaultValues }: Props = {}) {
  const methods = useZodForm(claimDeclarationSchema, {
    defaultValues: {
      accepted: false,
      dateSigned: new Date().toISOString().split("T")[0],
      signedBy: "",
      additionalComments: "",

      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.step8);

  return methods;
}
