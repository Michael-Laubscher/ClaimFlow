import { z } from "zod";

export const claimThirdPartySchema = z
  .object({
    hasThirdParty: z.boolean(),

    thirdPartyName: z.string().optional(),
    thirdPartyPhone: z.string().optional(),
    thirdPartyInsurance: z.string().optional(),
    thirdPartyVehicle: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.hasThirdParty) return;

    const requiredFields: Array<{
      key: keyof typeof data;
      label: string;
    }> = [
      { key: "thirdPartyName", label: "Third party name" },
      { key: "thirdPartyPhone", label: "Third party phone" },
      { key: "thirdPartyInsurance", label: "Third party insurance" },
      { key: "thirdPartyVehicle", label: "Third party vehicle" },
    ];

    for (const field of requiredFields) {
      const value = data[field.key];

      if (typeof value !== "string" || value.trim().length === 0) {
        ctx.addIssue({
          code: "custom",
          path: [field.key],
          message: `${field.label} is required when third party is enabled`,
        });
      }
    }
  });

export type ClaimThirdPartyData = z.infer<typeof claimThirdPartySchema>;
