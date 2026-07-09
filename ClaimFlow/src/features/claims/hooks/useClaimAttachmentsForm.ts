import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";

import { claimAttachmentsSchema } from "../schemas/claim-attachments.schema";

import type { z } from "zod";

import { CLAIM_STORAGE_KEYS, usePersistedForm } from "./usePersistedForm";

export type ClaimAttachmentsData = z.infer<typeof claimAttachmentsSchema>;

const emptyAttachments: ClaimAttachmentsData["attachments"] = [];

export function useClaimAttachmentsForm(defaultValues?: Partial<ClaimAttachmentsData>) {
  const methods = useZodForm(claimAttachmentsSchema, {
    defaultValues: {
      attachments: emptyAttachments,

      ...defaultValues,
    },
  });

  usePersistedForm(methods, CLAIM_STORAGE_KEYS.documents);

  return methods;
}
