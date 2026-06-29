import { z } from "zod";

import { claimStep1Schema } from "./claim-step1.schema";
import { claimStep2Schema } from "./claim-step2.schema";

import { claimDriverSchema } from "./claim-driver.schema";
import { claimVehicleSchema } from "./claim-vehicle.schema";
import { claimThirdPartySchema } from "./claim-thirdparty.schema";
import { claimEvidenceSchema } from "./claim-evidence.schema";
import { claimAssessmentSchema } from "./claim-assessment.schema";
import { claimDeclarationSchema } from "./claim-declaration.schema";

export const claimWizardSchema = z.object({
  step1: claimStep1Schema,

  claimant: z.object({
    fullName: z.string(),
    email: z.string().email(),
    contactNumber: z.string(),
  }),

  step2: claimStep2Schema,
  driver: claimDriverSchema,
  vehicle: claimVehicleSchema,
  thirdParty: claimThirdPartySchema,
  evidence: claimEvidenceSchema,
  assessment: claimAssessmentSchema,
  declaration: claimDeclarationSchema,
});

export type ClaimWizardData = z.infer<typeof claimWizardSchema>;
