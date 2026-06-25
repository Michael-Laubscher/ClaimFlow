import { z } from "zod";

export const claimVehicleSchema = z.object({
  registrationNumber: z.string().min(1, "Registration number is required"),

  make: z.string().min(1, "Vehicle make is required"),

  model: z.string().min(1, "Vehicle model is required"),

  year: z.string().min(4, "Year is required"),

  damageDescription: z
    .string()
    .min(10, "Damage description must be at least 10 characters"),
});

export type ClaimVehicleData = z.infer<typeof claimVehicleSchema>;