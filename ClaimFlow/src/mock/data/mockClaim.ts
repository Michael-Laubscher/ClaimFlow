export const MOCK_CLAIM = {
  id: "CLM-2026-12345",
  type: "Vehicle Accident",
  status: "Under Review",
  submitted: "May 8, 2026",
  estimatedAmount: "R8,500",
  assignedTo: "Claims Adjuster: Jane Kamau",
  steps: [
    { label: "Claim Submitted", date: "May 8, 2026 10:30 AM", done: true },
    { label: "Documents Verified", date: "May 8, 2026 2:15 PM", done: true },
    { label: "Assessment in Progress", date: "May 9, 2026 9:00 AM", done: true },
    { label: "Final Review", date: "Pending", done: false },
    { label: "Payment Processing", date: "Pending", done: false },
  ],
};