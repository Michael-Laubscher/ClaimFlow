import { useState } from "react";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";

import type { ContactFormState } from "@/shared/types/contact.types";
import { GlassCard } from "@/shared/components/design-system/composite/card/GlassCard";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <GlassCard className="p-8">
      <Stack gap="lg">
        <Heading size="lg">Send Message</Heading>

        <form onSubmit={onSubmit}>
          <Stack gap="md">
            <input name="name" value={form.name} onChange={onChange} />
            <input name="email" value={form.email} onChange={onChange} />
            <textarea name="message" value={form.message} onChange={onChange} />

            <Button variant={sent ? "secondary" : "primary"} type="submit">
              {sent ? "Sent ✓" : "Send Message"}
            </Button>
          </Stack>
        </form>
      </Stack>
    </GlassCard>
  );
}
