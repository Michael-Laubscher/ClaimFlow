import { z } from "zod";

export const claimSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  incidentDate: z.string().min(1, "Incident date required"),
  claimType: z.enum(["vehicle", "property", "other"]),
  description: z.string().min(10, "Description too short"),
});

export type ClaimFormData = z.infer<typeof claimSchema>;