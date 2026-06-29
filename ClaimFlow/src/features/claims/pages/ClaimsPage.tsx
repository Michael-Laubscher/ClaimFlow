import { useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Form } from "@/shared/components/forms/components/Form";

import { banners } from "@/features/shared-ui/configs/banners.config";

import PolicySection from "../components/sections/PolicySection";
import PersonalSection from "../components/sections/PersonalSection";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

import { useClaimStep1Form } from "../hooks/useClaimStep1Form";
import { useClaimWizard } from "../hooks/useClaimWizard";
import type { ClaimStep1Data } from "../schemas/claim-step1.schema";

export default function ClaimPage() {
  const navigate = useNavigate();

  const methods = useClaimStep1Form();
  const { setStep } = useClaimWizard();

  const handleSubmit = (data: ClaimStep1Data) => {
     console.log("SUBMITTED DATA", data);
    setStep("step1", data);
    navigate("/claims/incident");
  };

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
        <Container>
          <div className="mx-auto max-w-5xl">

            <div className="mb-10">
              <ClaimStepper current={1} />
            </div>

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">

                <div className="p-8 md:p-10 lg:p-12">

                  <Stack gap="lg">

                    <PolicySection />

                    <div className="border-t border-slate-200" />

                    <PersonalSection />

                  </Stack>

                </div>

                <footer className="flex flex-col gap-6 border-t border-slate-200 bg-slate-50 px-8 py-6 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-8">

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Step 1 of 8
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Policy & Claimant Information
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="min-w-[180px]"
                  >
                    Continue
                  </Button>

                </footer>

              </Card>

              <p className="mt-8 text-center text-sm text-slate-500">
                Your information is securely encrypted and protected throughout
                the claims process.
              </p>

            </Form>

          </div>
        </Container>
      </Section>
    </>
  );
}