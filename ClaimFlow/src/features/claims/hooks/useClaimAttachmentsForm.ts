import { useZodForm } from "@/shared/components/forms/hooks/useZodForm";
import { claimAttachmentsSchema } from "../schemas/claim-attachments.schema";
import type { z } from "zod";

export type ClaimAttachmentsData = z.infer<typeof claimAttachmentsSchema>;

const emptyAttachments: ClaimAttachmentsData["attachments"] = [];

export function useClaimAttachmentsForm(
  defaultValues?: Partial<ClaimAttachmentsData>
) {
  const mergedDefaults = {
    attachments: emptyAttachments,
    ...defaultValues,
  } satisfies Partial<ClaimAttachmentsData>;

  return useZodForm(claimAttachmentsSchema, {
    defaultValues: mergedDefaults,
  });
}