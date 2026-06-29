import "dotenv/config";

import { EmailType } from "../types/EmailType";
import { runEmailTest } from "./runEmailTest";

const emailTypeValues = Object.values(EmailType) as string[];

function isEmailType(value: string): value is EmailType {
  return emailTypeValues.includes(value);
}

async function main() {
  const rawType = process.argv[2];
  const recipient = process.argv[3];

  if (!rawType) {
    console.log("❌ Missing email type");
    console.log("");
    console.log("Usage:");
    console.log("npm run test:email -- <type> <recipient>");
    console.log("");
    console.log("Examples:");
    console.log("npm run test:email -- otp your@gmail.com");
    console.log("npm run test:email -- claim_received your@gmail.com");
    console.log("npm run test:email -- all your@gmail.com");
    console.log("");
    console.log("Valid types:");
    console.log(emailTypeValues.join(", "));
    process.exit(1);
  }

  if (!recipient) {
    console.log("❌ Missing recipient email");
    process.exit(1);
  }

  if (rawType === "all") {
    console.log(`📧 Sending all email templates to ${recipient}`);

    for (const type of emailTypeValues) {
      console.log(`\n➡ Running: ${type}`);

      await runEmailTest(type as EmailType, recipient);
    }

    console.log("\n✅ All email tests completed");
    return;
  }

  if (!isEmailType(rawType)) {
    console.log(`❌ Invalid email type: ${rawType}`);
    console.log("");
    console.log("Valid types:");
    console.log(emailTypeValues.join(", "));
    process.exit(1);
  }

  await runEmailTest(rawType, recipient);

  console.log("✅ Email test completed");
}

main().catch((err) => {
  console.error("❌ Test failed:");
  console.error(err);
  process.exit(1);
});