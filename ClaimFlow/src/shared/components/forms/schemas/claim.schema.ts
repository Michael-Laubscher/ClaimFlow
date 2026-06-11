import { z } from "zod";

export const claimSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
});

export type ClaimFormValues = z.infer<typeof claimSchema>;
