import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";
import { ContactInfo } from "../components/sections/ContactInfo";
import { ContactForm } from "../components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Section className="bg-[--color-slate-50] py-16">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
