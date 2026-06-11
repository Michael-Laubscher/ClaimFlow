import type { z } from "zod";
import type { contactSchema } from "../schemas/contact.schema";

export type FormSchema<T extends z.ZodTypeAny> = T;

export type FormValues<T extends z.ZodTypeAny> = z.output<T>;

export type ContactFormValues = z.infer<typeof contactSchema>;
