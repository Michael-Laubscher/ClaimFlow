import type { ClaimRecord } from "../types/claim.types";

export const CLAIMS: ClaimRecord[] = [
  {
    id: "CLM-2026-12345",
    type: "Vehicle Accident",
    date: "May 8, 2026",
    amount: "$8,500",
    status: "Under Review",
  },
  {
    id: "CLM-2026-11234",
    type: "Cargo Damage",
    date: "April 15, 2026",
    amount: "$12,000",
    status: "Approved",
  },
  {
    id: "CLM-2026-10123",
    type: "Fire Damage",
    date: "March 22, 2026",
    amount: "$25,000",
    status: "Paid",
  },
];
