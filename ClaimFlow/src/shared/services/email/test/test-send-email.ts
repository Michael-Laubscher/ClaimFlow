import { EmailType } from "../types/EmailType";
import { runEmailTest } from "./runEmailTest";

const emailTypeValues = Object.values(EmailType) as string[];

function isEmailType(value: string): value is EmailType {
  return emailTypeValues.includes(value);
}

async function main() {
  const rawType = process.argv[2];

  if (!rawType || !isEmailType(rawType)) {
    console.log("❌ Invalid or missing email type");
    console.log("Valid types:");
    console.log(emailTypeValues.join(", "));
    process.exit(1);
  }

  await runEmailTest(rawType as EmailType);
}

main().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
