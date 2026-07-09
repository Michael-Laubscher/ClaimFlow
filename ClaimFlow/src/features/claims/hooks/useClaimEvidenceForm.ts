import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import {
  claimEvidenceSchema,
  type ClaimEvidenceData,
} from "../schemas/claim-evidence.schema";

import {
  CLAIM_STORAGE_KEYS,
  usePersistedForm,
} from "./usePersistedForm";


type Props = {
  defaultValues?: Partial<ClaimEvidenceData>;
};


export function useClaimEvidenceForm(
  { defaultValues }: Props = {}
) {
  const methods = useZodForm(claimEvidenceSchema, {
    defaultValues: {
      witnesses: [{ name: "", phone: "" }],
      evidenceNotes: "",
      attachments: [],

      ...defaultValues,
    },
  });


  usePersistedForm(
    methods,
    CLAIM_STORAGE_KEYS.step6
  );


  return methods;
}