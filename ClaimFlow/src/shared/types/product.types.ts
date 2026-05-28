import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  tagline: string;

  icon: LucideIcon;

  coverageLabel: string;
  coverageDesc: string;

  features: string[];
}
