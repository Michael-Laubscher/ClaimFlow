import { useState } from "react";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Card } from "@/shared/components/design-system/surface/Card";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";

import { Stepper } from "../components/sections/stepper/Stepper";
import { Step1 } from "../components/sections/stepper/Step1SelectType";
import { Step2 } from "../components/sections/stepper/Step2Details";
import { Step3 } from "../components/sections/stepper/Step3Coverage";

import type { QuoteDetails } from "@/features/claims/types/quote.types";
import type { InsuranceType } from "@/features/claims/types/insuranceTypes";
import type { CoverageLevel } from "@/features/claims/configs/coverageLevels";

export default function GetQuotePage() {
  const [step, setStep] = useState(1);

  const [insuranceType, setInsuranceType] = useState<InsuranceType | "">("");

  const [details, setDetails] = useState<QuoteDetails>({
    business: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
  });

  const [coverage, setCoverage] = useState<CoverageLevel | "">("");

  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof QuoteDetails, value: string) => {
    setDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <div className="bg-[#1a2e5a] py-14">
        <Container size="lg">
          <Heading size="xl" className="text-white">
            Get Your Insurance Quote
          </Heading>

          <GenericText className="mt-2 text-blue-100/70">Fast, transparent quotes in minutes. No hidden fees.</GenericText>
        </Container>
      </div>

      {/* Form */}
      <Container size="md" className="-mt-8">
        <Card className="p-8 md:p-10">
          <Stepper step={step} />

          {step === 1 && <Step1 value={insuranceType} onChange={setInsuranceType} onNext={() => setStep(2)} />}

          {step === 2 && <Step2 data={details} onChange={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}

          {step === 3 && (
            <Step3
              coverage={coverage}
              onChange={setCoverage}
              insuranceType={insuranceType}
              business={details.business}
              country={details.country}
              onBack={() => setStep(2)}
              onSubmit={() => setSubmitted(true)}
              submitted={submitted}
            />
          )}
        </Card>
      </Container>
    </div>
  );
}
