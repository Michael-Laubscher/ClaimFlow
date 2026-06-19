import type { Client } from "@microsoft/microsoft-graph-client";
import type { SendEmailInput } from "../types/types";
import type { IEmailProvider } from "./IEmailProvider";

export class Office365Provider implements IEmailProvider {
  constructor(private client: Client) {}

  senderEmail = process.env.EMAIL_SENDER;

  async sendEmail(input: SendEmailInput) {
    const res = await this.client.api(`/users/${this.senderEmail}/sendMail`).post({
      message: {
        subject: input.subject,
        body: {
          contentType: "HTML",
          content: input.html,
        },
        toRecipients: [{ emailAddress: { address: input.to } }],
      },
    });

    return {
      messageId: res.id ?? "unknown",
    };
  }
}
