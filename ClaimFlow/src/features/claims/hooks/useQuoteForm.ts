import { useState } from "react";

import type { CoverageLevel } from "../configs/coverageLevels";
import type { InsuranceType } from "../types/insuranceTypes";
import type { QuoteDetails } from "../types/quote.types";

export function useQuoteForm() {
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

  const updateDetails = (key: keyof QuoteDetails, value: string) => {
    setDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const reset = () => {
    setStep(1);

    setInsuranceType("");

    setDetails({
      business: "",
      contact: "",
      email: "",
      phone: "",
      country: "",
    });

    setCoverage("");

    setSubmitted(false);
  };

  return {
    step,

    nextStep,
    previousStep,
    reset,

    insuranceType,
    setInsuranceType,

    details,
    updateDetails,

    coverage,
    setCoverage,

    submitted,
    setSubmitted,
  };
}
