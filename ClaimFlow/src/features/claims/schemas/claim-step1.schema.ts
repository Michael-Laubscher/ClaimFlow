import { z } from "zod";

export const claimStep1Schema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),

  fullName: z.string().min(2, "Full name is required"),

  email: z.string().email("Please enter a valid email"),
});

export type ClaimStep1Data = z.infer<typeof claimStep1Schema>;
