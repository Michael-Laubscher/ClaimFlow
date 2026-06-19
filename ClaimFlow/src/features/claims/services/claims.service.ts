import { emailService } from "@/shared/services/email";
import type { ClaimFormData } from "../schemas/claim.schema";

export type SubmitClaimInput = ClaimFormData & {
  zip: Blob;
};

export const submitClaim = async (data: SubmitClaimInput) => {
  const claimId = `CLM-${Date.now()}`;

  // TODO:
  // Upload zip to storage, attach it to an email,
  // or persist it with the claim record.
  const claimZip = data.zip;

  await emailService.sendClaimReceived({
    email: data.email,
    name: data.fullName,
    claimNumber: claimId,
  });

  return {
    success: true,
    id: claimId,
    zip: claimZip,
  };
};
