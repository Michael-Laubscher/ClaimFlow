import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { TermsSection } from "../components/sections/TermsSection";
import { termsConfig } from "../configs/terms.config";
import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";

export default function TermsOfServicePage() {
  return (
    <>
      {/* HERO */}
      <PageBanner title="Terms of Service" subtitle="Legal terms governing the use of Askari Insure services" />

      {/* CONTENT */}
      <Section className="py-20 bg-[--color-slate-50]">
        <Container size="md">
          <Stack gap="lg">
            {/* LAST UPDATED */}
            <Typography variant="label-md" color="muted">
              Last updated: May 12, 2026
            </Typography>

            {/* SECTIONS */}
            {termsConfig.map((section) => (
              <TermsSection key={section.title} section={section} />
            ))}

            {/* CONTACT */}
            <TermsSection
              section={{
                title: "8. Contact Information",
                content: "For questions about these Terms, contact us at legal@askariinsure.com or +254 700 000 000.",
              }}
            />
          </Stack>
        </Container>
      </Section>
    </>
  );
}
