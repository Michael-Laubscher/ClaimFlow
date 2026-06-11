import type { z } from "zod";
import { claimStep1Schema } from "./claim-step1.schema";
import { claimStep2Schema } from "./claim-step2.schema";
import { claimStep3Schema } from "./claim-step3.schema";

export const claimSchema = claimStep1Schema.merge(claimStep2Schema).merge(claimStep3Schema);

export type ClaimFormData = z.infer<typeof claimSchema>;
