import { useLocation, useNavigate } from "react-router-dom";

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

import { useClaimStep3Form } from "../hooks/useClaimStep3Form";
import { useSubmitClaim } from "../hooks/useSubmitClaim";

import { useAppStore } from "../../../app/store/useAppStore";

import { claimSchema } from "../schemas/claim.schema";

import type { ClaimStep3Data } from "../schemas/claim-step3.schema";
import type { ClaimFormData } from "../schemas/claim.schema";

export default function ClaimDocumentsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const previousData = (location.state as Partial<ClaimFormData>) ?? {};

  const methods = useClaimStep3Form({
    defaultValues: {
      attachments: [],
    },
  });

  const { loading, error } = useAppStore();

  const { submit } = useSubmitClaim(() => {
    methods.reset();

    navigate("/claims/success");
  });

  const handleSubmit = async (step3Data: ClaimStep3Data) => {
    const completeClaim = {
      ...previousData,
      ...step3Data,
    };

    const result = claimSchema.safeParse(completeClaim);

    if (!result.success) {
      console.error(result.error.flatten());

      return;
    }

    await submit(result.data);
  };

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ClaimStepper current={3} />

            {error && (
              <Card className="mb-6 border border-red-200 bg-red-50 p-4">
                <p className="text-sm text-red-600">{error}</p>
              </Card>
            )}

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card className="rounded-3xl p-8">
                <Stack gap="lg">
                  <AttachmentsSection />

                  <Card variant="glass" className="border border-slate-200 p-6">
                    <h3 className="mb-4 font-semibold text-slate-900">Required Documents</h3>

                    <ul className="space-y-3 text-sm text-slate-600">
                      <li>• Photos of damage</li>
                      <li>• Police report (if applicable)</li>
                      <li>• Repair quotations or invoices</li>
                      <li>• Delivery notes / waybills</li>
                      <li>• Supporting evidence</li>
                    </ul>
                  </Card>

                  <div className="flex justify-between">
                    <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                      Back
                    </Button>

                    <Button type="submit" variant="primary" size="lg" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Claim"}
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
