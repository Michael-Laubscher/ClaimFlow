import { z } from "zod";

export const claimStep1Schema = z.object({
    claimType: z.enum(["collision", "theft", "fire"]),
    
  policyNumber: z.string().min(1),

  fullName: z.string().min(2),

  email: z.string().email(),

  contactNumber: z.string().min(5),

  employeeNumber: z.string().optional(),
});

export type ClaimStep1Data = z.infer<typeof claimStep1Schema>;