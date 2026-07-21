import { createEmailProvider } from "../services/EmailFactory";
import type { EmailTestType } from "./emailTestRegistry";
import { emailTestRegistry } from "./emailTestRegistry";

export async function runEmailTest(type: EmailTestType, recipient: string) {
  console.log(`📧 Running email test: ${type}`);

  const template = emailTestRegistry[type]();

  const provider = createEmailProvider();

  const result = await provider.sendEmail({
    to: recipient,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });

  console.log("✅ Email sent");
  console.log("Message ID:", result.messageId);

  return result;
}
