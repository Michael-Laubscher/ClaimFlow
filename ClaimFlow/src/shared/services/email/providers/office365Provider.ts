import type { SendEmailInput } from "../types/types";
import type { IEmailProvider } from "./IEmailProvider";

export class Office365Provider implements IEmailProvider {
  constructor(private client: any) {}
  senderEmail = import.meta.env.VITE_EMAIL_SENDER;

  async sendEmail(input: SendEmailInput): Promise<void> {
    await this.client.api(`/users/${this.senderEmail}/sendMail`).post({
      message: {
        subject: input.subject,
        body: {
          contentType: "HTML",
          content: input.html,
        },
        toRecipients: [{ emailAddress: { address: input.to } }],
      },
    });
  }
}
