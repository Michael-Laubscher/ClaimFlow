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

  const update = (key: keyof QuoteDetails, value: string) =>
    setDetails((d) => ({
      ...d,
      [key]: value,
    }));

  return {
    step,
    setStep,

    insuranceType,
    setInsuranceType,

    details,
    setDetails,

    coverage,
    setCoverage,

    submitted,
    setSubmitted,

    update,
  };
}
