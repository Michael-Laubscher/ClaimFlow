import {
  PlaceholderIcon,
} from "@/shared/components/design-system/svg/icons";

import {
  PackageIcon,
  TruckIcon,
} from "lucide-react";

export const INSURANCE_TYPES = [
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
    id: "other",
    label: "Other Insurance",
    sub: "Custom coverage",
    Icon: PlaceholderIcon,
  },
] as const;

export type InsuranceType =
  (typeof INSURANCE_TYPES)[number]["id"];

export const FALLBACK_INSURANCE_ICON =
  PlaceholderIcon;