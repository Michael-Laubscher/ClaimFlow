
import { useZodForm } from "../hooks/useZodForm";
import { contactSchema } from "../schemas/contact.schema";

export function useContactForm() {
  return useZodForm(contactSchema, {
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
}
