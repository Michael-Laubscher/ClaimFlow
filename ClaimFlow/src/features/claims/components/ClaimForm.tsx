import { FormProvider } from "react-hook-form";
import { useClaimForm } from "../hooks/useClaimForm";

import PolicySection from "./sections/PolicySection";
import PersonalSection from "./sections/PersonalSection";
import IncidentSection from "./sections/IncidentSection";
import AttachmentsSection from "./sections/AttachmentSection";

import { useSubmitClaim } from "../hooks/useSubmitClaim";
import { useAppStore } from "../../../app/store/useAppStore";

import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Button } from "@/shared/components/design-system/buttons/Button";

export default function ClaimForm() {
  const methods = useClaimForm();
  const { loading, error } = useAppStore();
  const { submit } = useSubmitClaim(methods.reset);

  return (
    <Section className="bg-[--color-slate-50] py-16">
      <Container>
        <Stack gap="xl" className="max-w-4xl mx-auto">
          {/* Header */}
          <Stack gap="xs">
            <Typography variant="body-3xl" className="text-[--color-slate-900]">
              Submit a Claim
            </Typography>

            <Typography color="muted">Complete the form below to submit your insurance claim. We’ll review and respond as soon as possible.</Typography>
          </Stack>

          {/* Error state */}
          {error && (
            <GlassCard className="p-4 border border-red-200 bg-red-50">
              <Typography className="text-red-600">{error}</Typography>
            </GlassCard>
          )}

          {/* Form */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)}>
              <Stack gap="lg">
                {/* Sections */}
                <GlassCard className="p-6">
                  <PolicySection />

                  <PersonalSection />

                  <IncidentSection />

                  <AttachmentsSection />

                  <Button type="submit" variant="primary" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Claim"}
                  </Button>
                </GlassCard>
              </Stack>
            </form>
          </FormProvider>
        </Stack>
      </Container>
    </Section>
  );
}
