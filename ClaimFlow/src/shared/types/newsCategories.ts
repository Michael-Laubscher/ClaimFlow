export const CATEGORY_VARIANT = {
  "Company News": "company",
  "Product Update": "product",
  "Industry Insights": "warning",
  Partnerships: "default",
  Reports: "success",
  "Tips & Advice": "warning",
} as const;

export type ArticleCategory = keyof typeof CATEGORY_VARIANT;
