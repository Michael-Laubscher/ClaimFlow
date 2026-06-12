import type { ContactFormValues } from "@/shared/components/forms/schemas/contact.schema";

interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

export const marketingFormService = {
  async submitContactForm(data: ContactFormValues): Promise<ContactSubmissionResult> {
    console.log("Contact form submitted:", data);

    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  },
};
