export type EmailJob =
  | {
      type: "claim_received";
      email: string;
      name: string;
      claimNumber: string;
    }
  | {
      type: "claim_approved";
      email: string;
      name: string;
      claimNumber: string;
    }
  | {
      type: "otp";
      email: string;
      otp: string;
    };
