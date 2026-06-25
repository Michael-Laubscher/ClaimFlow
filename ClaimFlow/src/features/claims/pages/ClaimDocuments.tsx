import { useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Form } from "@/shared/components/forms/components/Form";

import { banners } from "@/features/shared-ui/configs/banners.config";

import AttachmentsSection from "../components/sections/AttachmentSection";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

import { useClaimAttachmentsForm } from "../hooks/useClaimAttachmentsForm";
import { useClaimWizard } from "../hooks/useClaimWizard";
import type { ClaimAttachmentsData } from "../hooks/useClaimAttachmentsForm";

export default function ClaimDocumentsPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const methods = useClaimAttachmentsForm({
    attachments: (claimData?.evidence?.attachments as ClaimAttachmentsData["attachments"]) ?? [],
  });

  const handleSubmit = (data: ClaimAttachmentsData) => {
    setStep("evidence", {
      attachments: data.attachments,
    });

    navigate("/claims/success");
  };

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ClaimStepper current={8} />

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card className="rounded-3xl p-8">
                <Stack gap="lg">
                  <AttachmentsSection />

                  <div className="flex justify-between">
                    <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                      Back
                    </Button>

                    <Button type="submit" variant="primary" size="lg">
                      Continue
                    </Button>
                  </div>
                </Stack>
              </Card>
            </Form>
          </div>
        </Container>
      </Section>
    </>
  );
}
