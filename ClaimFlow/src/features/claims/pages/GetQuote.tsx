import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { banners } from "@/features/shared-ui/configs/banners.config";

import { Step1 } from "../components/sections/stepper/Step1SelectType";
import { Step2 } from "../components/sections/stepper/Step2Details";
import { Step3 } from "../components/sections/stepper/Step3Coverage";

import { Stepper } from "../components/sections/stepper/Stepper";

import { useToast } from "@/shared/components/design-system/feedback/Toast";
import { MockEmailProvider } from "@/shared/services/email/providers/MockEmailProvider";
import { EmailService } from "@/shared/services/email/services/emailService";

import { quoteNotifications } from "../components/sections/QuoteProvider/quoteNotifications";

import { useQuoteForm } from "../hooks/useQuoteForm";

export default function GetQuotePage() {
  const emailService = new EmailService(new MockEmailProvider());

  const toast = useToast();

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

  const handleSubmit = async () => {
    try {
      await emailService.sendQuoteSubmitted({
        email: details.email ?? "",

        business: details.business ?? "",

        insuranceType,

        coverage,
      });

      quoteNotifications.submitted(toast);

      setSubmitted(true);
    } catch {
      quoteNotifications.failed(toast);
    }
  };

  return (
    <>
      <PageBanner {...banners.getQuote} />

      <Section
        className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
        py-20
        "
      >
        {/* background glow */}

        <div
          className="
          absolute
          left-1/2
          top-0
          -z-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-3xl
        "
        />

        <Container>
          <div
            className="
            relative
            mx-auto
            max-w-5xl
          "
          >
            <Stepper step={step} />

            <Card
              variant="glass"
              className="
              mt-10
              rounded-[32px]
              border
              border-white/60
              bg-white/80
              p-8
              shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-xl
              sm:p-12
              "
            >
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
                    onSubmit={handleSubmit}
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
