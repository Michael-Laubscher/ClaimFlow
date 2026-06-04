import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Text } from "@/shared/components/design-system/typography/Text";
import { PrivacySection } from "../components/sections/PrivacySection";
import { privacyConfig } from "../configs/privacy.config";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" subtitle="How we collect, use, and protect your personal information" />

      <Section className="py-20 bg-[--color-slate-50]">
        <Container size="md">
          <Stack gap="lg">
            {/* Last updated */}
            <Text variant="body" color="muted">
              Last updated: {privacyConfig.lastUpdated}
            </Text>

            {/* Sections */}
            {privacyConfig.sections.map((section) => (
              <PrivacySection key={section.title} section={section} />
            ))}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
