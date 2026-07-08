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
    navigate("/claims/incident", {
      state: data,
    });
  };

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ClaimStepper current={1} />

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card className="rounded-3xl p-8">
                <Stack gap="lg">
                  <PolicySection />

                  <PersonalSection />

                  <Button type="submit" size="lg" variant="primary">
                    Continue
                  </Button>
                </Stack>
              </Card>
            </Form>

          </div>
        </Container>
      </Section>
    </>
  );
}