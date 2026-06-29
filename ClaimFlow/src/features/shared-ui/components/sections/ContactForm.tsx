import { MessageSquare, Phone, User, Mail } from "lucide-react";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Input } from "@/shared/components/design-system/primitives/Input/Input";
import { Textarea } from "@/shared/components/design-system/primitives/Input/Textarea";
import { FormField } from "@/shared/components/design-system/primitives/Input/FormField";

import { Form } from "@/shared/components/forms/components/Form";
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
    formState: { errors, dirtyFields },
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
      <FormSection title="Contact Us" description="Send us a message and our team will get back to you.">
        <FormField label="Full Name" error={errors.name?.message}>
          <Input placeholder="John Smith" icon={<User className="h-4 w-4" />} {...register("name")} error={!!errors.name} success={!!dirtyFields.name && !errors.name} />
        </FormField>

        <FormField label="Email Address" error={errors.email?.message} helperText="We'll never share your email.">
          <Input type="email" placeholder="name@example.com" icon={<Mail className="h-4 w-4" />} {...register("email")} error={!!errors.email} success={!!dirtyFields.email && !errors.email} />
        </FormField>

        <FormField label="Phone Number" error={errors.phone?.message}>
          <Input placeholder="+27 00 000 0000" icon={<Phone className="h-4 w-4" />} {...register("phone")} error={!!errors.phone} success={!!dirtyFields.phone && !errors.phone} />
        </FormField>

        <FormField label="Subject" error={errors.subject?.message}>
          <Input placeholder="How can we help?" icon={<MessageSquare className="h-4 w-4" />} {...register("subject")} error={!!errors.subject} success={!!dirtyFields.subject && !errors.subject} />
        </FormField>

        <FormField label="Message" error={errors.message?.message}>
          <Textarea
            rows={5}
            placeholder="
Tell us how we can help...
"
            {...register("message")}
            error={!!errors.message}
            success={!!dirtyFields.message && !errors.message}
          />
        </FormField>

        <FormSubmitButton>Send Message</FormSubmitButton>
      </FormSection>
    </Form>
  );
}
