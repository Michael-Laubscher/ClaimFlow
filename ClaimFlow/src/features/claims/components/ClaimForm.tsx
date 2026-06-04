import { FormProvider } from "react-hook-form";
import { useClaimForm } from "../hooks/useClaimForm";

import AttachmentsSection from "./sections/AttachmentSection";
import IncidentSection from "./sections/IncidentSection";
import PersonalSection from "./sections/PersonalSection";
import PolicySection from "./sections/PolicySection";

import { useAppStore } from "../../../app/store/useAppStore";
import { useSubmitClaim } from "../hooks/useSubmitClaim";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Text } from "@/shared/components/design-system/typography/Text";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export default function ClaimForm() {
  const methods = useClaimForm();
  const { loading, error } = useAppStore();
  const { submit } = useSubmitClaim(methods.reset);

  return (
    <Section className="bg-[--color-slate-50] py-16">
      <Container>
        <Stack gap="xl">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <Stack gap="xs">
              <Text variant="lead" className="text-[--color-slate-900]">
                Submit a Claim
              </Text>

              <Text color="muted">Complete the form below to submit your insurance claim. We’ll review and respond as soon as possible.</Text>
            </Stack>
          </div>
          {/* Error state */}
          {error && (
            <Card variant="glass" className="p-4 border border-red-200 bg-red-50">
              <Text className="text-red-600">{error}</Text>
            </Card>
          )}

          {/* Form */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)}>
              <Stack gap="lg">
                {/* Sections */}
                <Card variant="glass" className="p-6">
                  <PolicySection />

                  <PersonalSection />

                  <IncidentSection />

                  <AttachmentsSection />

                  <Button type="submit" variant="primary" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Claim"}
                  </Button>
                </Card>
              </Stack>
            </form>
          </FormProvider>
        </Stack>
      </Container>
    </Section>
  );
}
