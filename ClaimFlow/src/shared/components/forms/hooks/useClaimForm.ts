import { contactSchema } from "../schemas/contact.schema";
import { useZodForm } from "./useZodForm";

export function useContactForm() {
  return useZodForm(contactSchema, {
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    mode: "onTouched",

    reValidateMode: "onChange",
  });
}