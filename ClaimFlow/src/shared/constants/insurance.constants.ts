import type { ReactNode } from "react";

export type InsuranceTypeId =
  | "cargo"
  | "commercial_vehicle"
  | "yellow_card"
  | "liability";

export interface InsuranceType {
  id: InsuranceTypeId;
  label: string;
  sub: string;
  Icon: ReactNode;
}