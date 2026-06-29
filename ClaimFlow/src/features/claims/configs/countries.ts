export const COUNTRIES = ["Botswana", "Kenya", "Mozambique", "Namibia", "South Africa", "Tanzania", "Zambia", "Zimbabwe"] as const;

export type Country = (typeof COUNTRIES)[number];
