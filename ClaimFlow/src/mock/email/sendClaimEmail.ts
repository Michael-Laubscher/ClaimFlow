import { claimEmailTemplate } from "../../shared/services/email/templates/claim";
import { sendEmail } from "./sendEmail";

export async function sendClaimEmail() {
  const email = claimEmailTemplate({
    name: "John Doe",
    claimNumber: "CLM-98231",
  });

  await sendEmail({
    to: "client@example.com",
    subject: email.subject,
    html: email.html,
  });
}
