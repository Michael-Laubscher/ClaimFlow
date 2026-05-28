export const COVERAGE_LEVELS = ["Basic", "Standard", "Comprehensive", "Premium"] as const;

export type CoverageLevel = (typeof COVERAGE_LEVELS)[number];
