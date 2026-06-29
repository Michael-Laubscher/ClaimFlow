import { z } from "zod";

export const claimStep2Schema = z.object({
  incidentDate: z.string().min(1),

  incidentTime: z.string().min(1),

  country: z.string().min(1),

  city: z.string().min(1),

  exactLocation: z.string().min(1),

  claimType: z.enum([
    "collision",
    "theft",
    "fire",
    "vandalism",
    "other",
    "vehicle"
  ]),

  

  description: z.string().min(20),

  anyoneInjured: z.boolean(),

  emergencyServicesCalled: z.boolean(),

  policeReportNumber: z.string().optional(),
  
  vehicleRegistration:z.string().optional(),

  vehicleDrivable: z.boolean(),
});

export type ClaimStep2Data = z.infer<typeof claimStep2Schema>;