import { z } from "zod";

export const claimStep2Schema = z.object({
  incidentDate: z.string().min(1, "Incident date is required"),

  claimType: z.enum(["vehicle", "property", "other"], {
    errorMap: () => ({
      message: "Please select a claim type",
    }),
  }),

  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type ClaimStep2Data = z.infer<typeof claimStep2Schema>;
