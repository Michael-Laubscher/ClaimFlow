import { z } from "zod";

export const claimStep1Schema = z.object({
  policyType: z.enum(["motor", "home", "commercial"], {
    message: "Please select a policy type",
  }),

  claimType: z.enum(["collision", "theft", "fire"], {
    message: "Please select a claim type",
  }),

  policyNumber: z.string().min(1, "Policy number is required"),

  claimant: z.object({
    fullName: z.string().min(2, "Full name is required"),

    email: z.string().email("Invalid email address"),

    contactNumber: z.string().min(5, "Contact number is required"),
  }),

  employeeNumber: z.string().optional(),
});

export type ClaimStep1Data = z.infer<typeof claimStep1Schema>;
