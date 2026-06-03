import { FormProvider } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import AttachmentsSection from "../components/sections/AttachmentSection";

import { useClaimForm } from "../hooks/useClaimForm";
import { useSubmitClaim } from "../hooks/useSubmitClaim";

import { banners } from "@/features/shared-ui/configs/banners.config";
import { useAppStore } from "../../../app/store/useAppStore";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

export default function ClaimDocumentsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useClaimForm({
    defaultValues: location.state ?? {},
  });

  const { loading, error } = useAppStore();

  const { submit } = useSubmitClaim(() => {
    methods.reset();
    navigate("/claims/success");
  });

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ClaimStepper current={3} />

            {error && (
              <Card className="mb-6 border border-red-200 bg-red-50 p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </Card>
            )}

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(submit)}>
                <Card className="p-8 rounded-3xl">
                  <Stack gap="lg">
                    <AttachmentsSection />

                    <Card variant="glass" className="border border-slate-200 p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">Required Documents</h3>

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
              </form>
            </FormProvider>
          </div>
        </Container>
      </Section>
    </>
  );
}
