// import type { ClaimFormData } from "../schemas/claim.schema";

import { emailService } from "@/shared/services/email/services/email.service";

// export async function submitClaim(data: ClaimFormData & { zip: Blob }) {
//   const formData = new FormData();

//   Object.entries(data).forEach(([key, value]) => {
//     if (value instanceof Blob) {
//       formData.append(key, value);
//     } else {
//       formData.append(key, String(value));
//     }
//   });

//   const response = await fetch(`${import.meta.env.VITE_API_URL}/claims`, {
//     method: "POST",
//     body: formData,
//   });

//   if (!response.ok) {
//     throw new Error("Failed to submit claim");
//   }

//   return response.json();
// }

// features/claims/services/claims.service.ts

export const submitClaim = async (data: any) => {
  const claimId = `CLM-${Date.now()}`;

  await emailService.send({
    to: data.email,
    subject: "Claim Received",
    html: `
      <h2>Claim Received</h2>
      <p>Claim Number: ${claimId}</p>
    `,
  });

  return {
    success: true,
    id: claimId,
  };
};
