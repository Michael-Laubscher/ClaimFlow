import { useLocation, useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { Form } from "@/shared/components/forms/components/Form";

import { banners } from "@/features/shared-ui/configs/banners.config";

import IncidentSection from "../components/sections/IncidentSection";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

import { useClaimStep2Form } from "../hooks/useClaimStep2Form";

import type { ClaimStep1Data } from "../schemas/claim-step1.schema";
import type { ClaimStep2Data } from "../schemas/claim-step2.schema";

export default function ClaimIncidentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const previousData = (location.state as ClaimStep1Data) ?? {};

  const methods = useClaimStep2Form();

  const handleSubmit = (step2Data: ClaimStep2Data) => {
    navigate("/claims/documents", {
      state: {
        ...previousData,
        ...step2Data,
      },
    });
  };

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ClaimStepper current={2} />

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card className="rounded-3xl p-8">
                <Stack gap="lg">
                  <IncidentSection />

                  <div className="flex justify-between">
                    <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                      Back
                    </Button>

                    <Button type="submit" variant="primary">
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
