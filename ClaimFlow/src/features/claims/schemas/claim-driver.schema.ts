import { z } from "zod";

export const claimDriverSchema = z.object({
  driverName: z
    .string()
    .min(2, "Driver name must be at least 2 characters"),

  driverLicense: z
    .string()
    .min(5, "License number is too short")
    .regex(/^[a-zA-Z0-9-]+$/, "Invalid license format"),

  driverPhone: z
    .string()
    .min(10, "Phone number is required")
    .regex(/^[0-9+ ]+$/, "Invalid phone number format"),

  driverAddress: z
    .string()
    .min(5, "Address must be at least 5 characters"),
});

export type ClaimDriverData = z.infer<typeof claimDriverSchema>;