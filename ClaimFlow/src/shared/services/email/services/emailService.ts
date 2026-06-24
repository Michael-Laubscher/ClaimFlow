import type { IEmailProvider } from "../providers/IEmailProvider";

import { claimApprovedTemplate } from "../templates/claimApproved";
import { claimReceivedTemplate } from "../templates/claimReceived";
import { contactTemplate } from "../templates/contactConfirmation";
import { otpTemplate } from "../templates/otpTemplate";
import { quoteSubmittedTemplate } from "../templates/quoteSubmitted";

import type { SendEmailInput } from "../types/types";
import { prepareHtml } from "../utils/prepareHtml";
import { validateEmail } from "../utils/validateEmail";

const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL ?? "support@company.com";

export class EmailService {
  constructor(private provider: IEmailProvider) {}

  // -----------------------------
  // Base sender (single gateway)
  // -----------------------------
  private async send(input: SendEmailInput) {
    validateEmail(input.to);
    const html = prepareHtml(input.html);

    return this.provider.sendEmail({
      ...input,
      html,
    });
  }

  private buildEmail(to: string, template: { subject: string; html: string; text?: string }): SendEmailInput {
    return {
      to,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };
  }

  // -----------------------------
  // CLAIM RECEIVED
  // -----------------------------
  async sendClaimReceived(data: { email: string; name: string; claimNumber: string }) {
    const template = claimReceivedTemplate(data);

    return this.send(this.buildEmail(data.email, template));
  }

  // -----------------------------
  // CLAIM APPROVED
  // -----------------------------
  async sendClaimApproved(data: { email: string; name: string; claimNumber: string }) {
    const template = claimApprovedTemplate({
      name: data.name,
      claimNumber: data.claimNumber,
    });

    return this.send(this.buildEmail(data.email, template));
  }

  // -----------------------------
  // QUOTE SUBMITTED
  // -----------------------------
  async sendQuoteSubmitted(data: { email: string; business: string; insuranceType: string; coverage: string }) {
    const template = quoteSubmittedTemplate(data);

    return this.send(this.buildEmail(data.email, template));
  }

  // -----------------------------
  // CONTACT RECEIVED
  // -----------------------------
  async sendContactReceived(data: { email: string; name: string; message: string }) {
    const template = contactTemplate(data);

    // internal notification (support team)
    await this.send({
      to: SUPPORT_EMAIL,
      subject: "New Contact Request",
      html: template.html,
      text: template.text,
    });

    // optional user confirmation
    return this.send(
      this.buildEmail(data.email, {
        subject: "We received your message",
        html: template.html,
        text: template.text,
      })
    );
  }

  // -----------------------------
  // OTP (transaction verification only)
  // -----------------------------
  async sendOtp(data: { email: string; otp: string }) {
    const template = otpTemplate({ otp: data.otp });

    return this.send(this.buildEmail(data.email, template));
  }
}
