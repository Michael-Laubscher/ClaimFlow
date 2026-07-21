import type { SendEmailInput } from "../types/types";

export interface IEmailProvider {
  sendEmail(input: SendEmailInput): Promise<{
    messageId: string;
  }>;
}
