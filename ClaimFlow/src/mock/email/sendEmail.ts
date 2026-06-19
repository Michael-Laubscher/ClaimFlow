import { nodemailer, transporter } from "./nodemailer";

type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const info = await transporter.sendMail({
    from: '"ClaimFlow" <no-reply@claimflow.test>',
    to,
    subject,
    html,
  });

  const previewUrl = nodemailer.getTestMessageUrl(info);

  console.log("Message ID:", info.messageId);

  if (previewUrl) {
    console.log("Preview URL:", previewUrl);
  }

  return {
    info,
    previewUrl,
  };
}
