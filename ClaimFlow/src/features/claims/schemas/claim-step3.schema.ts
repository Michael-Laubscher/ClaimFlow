import { z } from "zod";

export const claimStep3Schema = z.object({
  attachments: z
    .array(
      z.object({
        id: z.string(),

        file: z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, "Maximum file size is 10MB"),
      })
    )
    .min(1, "At least one file is required"),
});

export type ClaimStep3Data = z.infer<typeof claimStep3Schema>;
