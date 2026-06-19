import { sendEmail } from "../../../../mock/email/sendEmail";
import type { EmailTestType } from "./emailTestRegistry";
import { emailTestRegistry } from "./emailTestRegistry";

export async function runEmailTest(type: EmailTestType) {
  console.log(`📧 Running email test: ${type}`);

  const template = emailTestRegistry[type]();

  const result = await sendEmail({
    to: "test@example.com",
    subject: template.subject,
    html: template.html,
    text: template.text,
  });

  console.log("✅ Email sent");
  console.log("Preview:", result.previewUrl);

  return result;
}
