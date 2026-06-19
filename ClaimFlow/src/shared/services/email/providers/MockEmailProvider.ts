import type { SendEmailInput } from "../types/types";
import type { IEmailProvider } from "./IEmailProvider";

export class MockEmailProvider implements IEmailProvider {
  async sendEmail(input: SendEmailInput) {
    console.log("EMAIL MOCK");
    console.log(input);
    return { messageId: "mock-id" };
  }
}
