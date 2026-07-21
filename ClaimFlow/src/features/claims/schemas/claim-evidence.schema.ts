import { z } from "zod";

export const witnessSchema = z.object({
  name: z.string().min(1, "Witness name is required"),
  phone: z
    .string()
    .min(1, "Witness phone is required")
    .regex(/^[0-9+\s()-]{7,20}$/, "Invalid phone number"),
});

export const claimEvidenceSchema = z.object({
  witnesses: z.array(witnessSchema).max(6),

  evidenceNotes: z.string().optional(),

  attachments: z.array(z.any()).default([]),
});

export type ClaimEvidenceData = z.infer<typeof claimEvidenceSchema>;
