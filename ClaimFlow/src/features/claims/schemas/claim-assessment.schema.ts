// schemas/claim-assessment.schema.ts
import { z } from "zod";

export const claimAssessmentSchema = z.object({
  assessorName: z.string().min(2, "Assessor name is required").max(100, "Name is too long"),

  assessorEmail: z.string().email("Invalid email").optional(),

  assessmentDate: z.string().min(1, "Assessment date is required"),

  estimatedLoss: z
    .string()
    .min(1, "Estimated loss is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid amount"),

  currency: z.string().default("ZAR"),

  damageSeverity: z.enum(["low", "medium", "high", "critical"]),

  assessmentNotes: z.string().max(1000, "Notes too long").optional(),

  requiresReinspection: z.boolean().default(false),
});

export type ClaimAssessmentData = z.infer<typeof claimAssessmentSchema>;
