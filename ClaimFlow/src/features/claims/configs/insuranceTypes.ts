import type { LucideIcon } from "lucide-react";

import { PackageIcon, ShieldIcon, TruckIcon } from "lucide-react";

export interface InsuranceTypeItem {
  id: string;
  label: string;
  sub: string;
  Icon?: LucideIcon;
}

export const INSURANCE_TYPES: InsuranceTypeItem[] = [
  {
    id: "cargo",
    label: "Cargo Insurance",
    sub: "Goods in transit",
    Icon: PackageIcon,
  },

  {
    id: "commercial_vehicle",
    label: "Commercial Vehicle",
    sub: "Fleet coverage",
    Icon: TruckIcon,
  },

  {
    id: "liability",
    label: "Liability Insurance",
    sub: "Third-party protection",
    Icon: ShieldIcon,
  },
];
