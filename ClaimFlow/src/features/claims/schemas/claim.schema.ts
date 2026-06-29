import { claimWizardSchema } from "./claim-wizard.schema";
import { claimAttachmentsSchema } from "./claim-attachments.schema";
import type { z } from "zod";


export const claimSchema =
  claimWizardSchema.merge(
    claimAttachmentsSchema
  );

export type ClaimFormData =
  z.infer<typeof claimSchema>;