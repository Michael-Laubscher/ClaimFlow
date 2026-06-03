export interface Step {
  label: string;
  date: string;
  done: boolean;
}

export interface Claim {
  policyNumber: string;
  fullName: string;
  incidentDate: string;
  description: string;
}

export interface ClaimResult {
  id: string;
  type: string;
  status: string;
  submitted: string;
  estimatedAmount: string;
  assignedTo: string;
  steps: Step[];
}

export interface ClaimRecord {
  id: string;
  type: string;
  date: string;
  amount: string;
  status: "Under Review" | "Approved" | "Paid" | "Rejected";
}

export interface ClaimStat {
  value: string;
  label: string;
  color?: string;
}
