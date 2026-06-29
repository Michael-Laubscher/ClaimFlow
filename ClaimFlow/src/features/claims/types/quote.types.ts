import type { Country } from "../configs/countries";
import type { CoverageLevel } from "../configs/coverageLevels";

export interface QuoteDetails {
  insuranceType: "cargo" | "commercial_vehicle" | "other" | null;

  business: string | null;
  contact: string | null;
  email: string | null;
  phone: string | null;

  country: Country | null;

  coverage: CoverageLevel | null;
}
