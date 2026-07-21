import { useNavigate } from "react-router-dom";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { Form } from "@/shared/components/forms/components/Form";

import IncidentSection from "../components/sections/IncidentSection";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

import { useClaimStep2Form } from "../hooks/useClaimStep2Form";
import { useClaimWizard } from "../hooks/useClaimWizard";

import type { ClaimStep2Data } from "../schemas/claim-step2.schema";
import { banners } from "@/features/shared-ui/configs/banners.config";
import { useClaimStore } from "../utils/ClaimStore";

export default function ClaimIncidentPage() {
  const navigate = useNavigate();

  const methods = useClaimStep2Form();

  const { setStep } = useClaimWizard();
  const { completeStep } = useClaimStore();

  const submit = (data: ClaimStep2Data) => {
    setStep("step2", data);
    completeStep("incident");

    navigate("/claims/driver");
  };

  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-16">
      <PageBanner {...banners.newClaim} />

      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="m-10">
            <ClaimStepper current={2} />
          </div>

          <Form methods={methods} onSubmit={submit}>
            <Card
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-xl
                shadow-slate-200/40
              "
            >
              <div className="p-8 md:p-10 lg:p-12">
                <IncidentSection />
              </div>

              <footer
                className="
                  flex
                  flex-col
                  gap-6
                  border-t
                  border-slate-200
                  bg-slate-50
                  px-8
                  py-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                  lg:px-12
                "
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">Step 2 of 8</p>

                  <p className="mt-1 text-sm text-slate-500">Incident details</p>
                </div>

                <Button type="submit" size="lg" className="min-w-[180px]">
                  Continue
                </Button>
              </footer>
            </Card>
          </Form>
        </div>
      </Container>
    </Section>
  );
}
