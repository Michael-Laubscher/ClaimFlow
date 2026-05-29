import { z } from "zod";

export const claimSchema = z.object({
  policyNumber: z.string().min(1),
  fullName: z.string().min(2),
  email: z.string().email(),
  incidentDate: z.string(),
  claimType: z.enum(["vehicle", "property", "other"]),
  description: z.string().min(10),

  attachments: z
    .array(
      z.object({
        id: z.string(),
        file: z.instanceof(File),
      })
    )
    .min(1, "At least one file is required"),
});

export type ClaimFormData = z.infer<typeof claimSchema>;
