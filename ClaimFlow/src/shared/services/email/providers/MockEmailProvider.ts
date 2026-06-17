import type { SendEmailInput } from "../types/types";
import type { IEmailProvider } from "./IEmailProvider";

export class MockEmailProvider implements IEmailProvider {
  async sendEmail(input: SendEmailInput): Promise<void> {
    console.group("📧 MOCK EMAIL");
    console.log("To:", input.to);
    console.log("Subject:", input.subject);
    console.log("HTML:", input.html);
    console.groupEnd();
  }
}
