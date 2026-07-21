import nodemailer from "nodemailer";
import type { SendEmailInput } from "../types/types";
import type { IEmailProvider } from "./IEmailProvider";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export class NodemailerProvider implements IEmailProvider {
  async sendEmail(input: SendEmailInput) {
    console.log("EMAIL_PROVIDER =", process.env.EMAIL_PROVIDER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: requireEnv("EMAIL_USER"),
        clientId: requireEnv("EMAIL_CLIENT_ID"),
        clientSecret: requireEnv("EMAIL_CLIENT_SECRET"),
        refreshToken: requireEnv("EMAIL_REFRESH_TOKEN"),
      },
    });

    await transporter.verify();

    const result = await transporter.sendMail({
      from: input.from ?? requireEnv("EMAIL_FROM"),
      to: input.to,
      cc: input.cc,
      bcc: input.bcc,
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text,
    });

    return {
      messageId: result.messageId,
    };
  }
}
