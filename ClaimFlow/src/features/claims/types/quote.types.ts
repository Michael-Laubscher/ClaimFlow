import type { Country } from "../configs/countries";
import type { CoverageLevel } from "../configs/coverageLevels";

export interface QuoteDetails {
  business: string;
  contact: string;
  email: string;
  phone: string;
  country: Country | "";
}

export interface QuoteFormState {
  insuranceType: string;
  details: QuoteDetails;
  coverage: CoverageLevel | "";
}
