// import { quoteSubmittedTemplate } from "../../shared/services/email/templates/quoteSubmitted";
// import { sendEmail } from "../email/sendEmail";

import { quoteSubmittedTemplate } from "../../shared/services/email/templates/quoteSubmitted";
import { sendEmail } from "../email/sendEmail";

// async function test() {
//   const email = quoteSubmittedTemplate({
//     business: "Test Business (Pty) Ltd",
//     insuranceType: "Public Liability",
//     coverage: "R1,000,000",
//   });

//   await sendEmail({
//     to: "prodworkspace98@gmail.com",
//     subject: email.subject,
//     html: email.html,
//   });

//   console.log("Test email sent!");
// }

// test();

async function main() {
  const template = quoteSubmittedTemplate({
    business: "ABC Logistics",
    insuranceType: "Fleet Insurance",
    coverage: "R2,000,000",
  });

  const result = await sendEmail({
    to: "test@example.com",
    subject: template.subject,
    html: template.html,
  });

  console.log(result.previewUrl);
}

main().catch(console.error);
