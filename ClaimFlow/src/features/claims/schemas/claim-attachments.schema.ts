import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
] as const;

type AllowedFileType = (typeof ALLOWED_TYPES)[number];

const isAllowedFileType = (type: string): type is AllowedFileType =>
  (ALLOWED_TYPES as readonly string[]).includes(type);

const fileSchema = z
  .instanceof(File)
  .refine((file) => isAllowedFileType(file.type), {
    message: "Only JPG, PNG, and PDF files are allowed",
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: "Each file must be under 5MB",
  });

const attachmentSchema = z.object({
  id: z.string(),
  file: fileSchema,
});

export const claimAttachmentsSchema = z.object({
  attachments: z
    .array(attachmentSchema)
    .max(10, "You can upload a maximum of 10 files"),
});