import { quoteSubmittedTemplate } from "../../shared/services/email/templates/quoteSubmitted";
import { sendEmail } from "./sendEmail";

export async function sendQuoteEmail() {
  const email = quoteSubmittedTemplate({
    business: "Acme Pty Ltd",
    insuranceType: "Public Liability",
    coverage: "R5,000,000",
  });

  await sendEmail({
    to: "client@example.com",
    subject: email.subject,
    html: email.html,
  });
}
