import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Form } from "@/shared/components/forms/components/Form";
import { FormError } from "@/shared/components/forms/components/FormError";
import { FormSubmitButton } from "@/shared/components/forms/components/FormSubmitButton";
import { useContactForm } from "@/shared/components/forms/hooks/useClaimForm";

import type { ContactFormValues } from "@/shared/components/forms/schemas/contact.schema";
import { marketingFormService } from "@/shared/components/forms/services/marketingForm.service";
import { useToast } from "@/shared/hooks/use-toast";

export default function ContactForm() {
  const methods = useContactForm();

  const { success, error } = useToast();

  const {
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await marketingFormService.submitContactForm(data);

      success({
        title: "Message Sent",
        description: result.message,
      });

      methods.reset();
    } catch {
      error({
        title: "Submission Failed",
        description: "Unable to send your message right now.",
      });
    }
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <FormSection title="Contact Us" description="Send us a message and we'll get back to you.">
        <div>
          <Input {...register("name")} placeholder="Your Name" error={!!errors.name} />

          <FormError message={errors.name?.message} />
        </div>

        <div>
          <Input {...register("email")} type="email" placeholder="Email Address" error={!!errors.email} />

          <FormError message={errors.email?.message} />
        </div>

        <div>
          <Input {...register("phone")} placeholder="Phone Number" error={!!errors.phone} />

          <FormError message={errors.phone?.message} />
        </div>

        <div>
          <Input {...register("subject")} placeholder="Subject" error={!!errors.subject} />

          <FormError message={errors.subject?.message} />
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Your Message"
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-orange-400/40
            "
          />

          <FormError message={errors.message?.message} />
        </div>

        <FormSubmitButton>Send Message</FormSubmitButton>
      </FormSection>
    </Form>
  );
}
