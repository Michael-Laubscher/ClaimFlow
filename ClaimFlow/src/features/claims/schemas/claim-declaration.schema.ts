import { z } from "zod";

export const claimDeclarationSchema = z.object({
  accepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the declaration to continue",
  }),

  dateSigned: z.string().min(1, "Signature date is required"),

  additionalComments: z.string().max(1000, "Max 1000 characters").optional(),

  signedBy: z.string().min(2, "Name is required").max(100).optional(),
});

export type ClaimDeclarationData = z.infer<typeof claimDeclarationSchema>;
