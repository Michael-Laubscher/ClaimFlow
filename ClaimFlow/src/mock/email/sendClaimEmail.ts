import { claimReceivedTemplate } from "@/shared/services/email/templates/claimReceived";
import { sendEmail } from "./sendEmail";

export async function sendClaimEmail() {
  const email = claimReceivedTemplate({
    name: "John Doe",
    claimNumber: "CLM-98231",
  });

  await sendEmail({
    to: "client@example.com",
    subject: email.subject,
    html: email.html,
  });
}
