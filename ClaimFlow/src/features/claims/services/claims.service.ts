import { emailService } from "@/shared/services/email";
import type { ClaimFormData } from "../schemas/claim.schema";

export type SubmitClaimInput = ClaimFormData & {
  zip: Blob;
};

export const submitClaim = async (data: SubmitClaimInput) => {
  const claimId = `CLM-${Date.now()}`;

  const claimZip = data.zip;

  await emailService.sendClaimReceived({
    email: data.step1.email,
    name: data.step1.fullName,
    claimNumber: claimId,
  });

  return {
    success: true,
    id: claimId,
    zip: claimZip,
  };
};