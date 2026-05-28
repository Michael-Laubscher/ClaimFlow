export const COUNTRIES = ["South Africa", "Botswana", "Namibia", "Zimbabwe", "Mozambique", "Zambia", "Kenya", "Tanzania"] as const;

export type Country = (typeof COUNTRIES)[number];
