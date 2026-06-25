import { useNavigate } from "react-router-dom";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { Form } from "@/shared/components/forms/components/Form";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import IncidentSection from "../components/sections/IncidentSection";

import { useClaimStep2Form } from "../hooks/useClaimStep2Form";
import { useClaimWizard } from "../hooks/useClaimWizard";

import type { ClaimStep2Data } from "../schemas/claim-step2.schema";

export default function ClaimIncidentPage() {
  const navigate = useNavigate();

  const { setStep } = useClaimWizard();

  const methods = useClaimStep2Form();

  const submit = (data: ClaimStep2Data) => {
  
    setStep("step2", data); 

    navigate("/claims/driver");
  };

  return (
    <Section className="bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <ClaimStepper current={2} />

          <Form methods={methods} onSubmit={submit}>
            <Card className="rounded-3xl p-8">
              <Stack gap="lg">
                <IncidentSection />

                <Button type="submit">
                  Continue
                </Button>
              </Stack>
            </Card>
          </Form>
        </div>
      </Container>
    </Section>
  );
}