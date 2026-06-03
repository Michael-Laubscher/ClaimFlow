import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { banners } from "@/features/shared-ui/configs/banners.config";

import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { Step1 } from "../components/sections/stepper/Step1SelectType";
import { Step2 } from "../components/sections/stepper/Step2Details";
import { Step3 } from "../components/sections/stepper/Step3Coverage";

import { useQuoteForm } from "../hooks/useQuoteForm";

export default function GetQuotePage() {
  const {
    step,
    nextStep,
    previousStep,

    insuranceType,
    setInsuranceType,

    details,
    updateDetails,

    coverage,
    setCoverage,

    submitted,
    setSubmitted,
  } = useQuoteForm();

  return (
    <>
      <PageBanner {...banners.getQuote} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ClaimStepper current={step} />

            <Card className="rounded-3xl p-8">
              <Stack gap="lg">
                {step === 1 && <Step1 value={insuranceType} onChange={setInsuranceType} onNext={nextStep} />}

                {step === 2 && <Step2 data={details} onChange={updateDetails} onBack={previousStep} onNext={nextStep} />}

                {step === 3 && (
                  <Step3
                    coverage={coverage}
                    onChange={setCoverage}
                    insuranceType={insuranceType}
                    business={details.business}
                    country={details.country}
                    submitted={submitted}
                    onBack={previousStep}
                    onSubmit={() => setSubmitted(true)}
                  />
                )}
              </Stack>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
