import { theme } from "../types/theme";

type ContactTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export function contactTemplate(data: ContactTemplateProps) {
  const year = new Date().getFullYear();

  return {
    subject: "We've Received Your Message",

    html: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: ${theme.bg};
  }

  .container {
    max-width: 600px;
    margin: 40px auto;
    background: ${theme.surface};
    border-radius: ${theme.radius};
    overflow: hidden;
    border: 1px solid ${theme.border};
  }

  .header {
    background: ${theme.primary};
    padding: 24px;
    color: white;
    text-align: center;
  }

  .header h1 {
    margin: 0;
    font-size: ${theme.fontSize.xl};
  }

  .content {
    padding: 24px;
    color: ${theme.textPrimary};
  }

  .box {
    background: ${theme.primarySoft};
    padding: 16px;
    border-radius: ${theme.radiusSm};
    margin-top: 16px;
  }

  .label {
    font-size: ${theme.fontSize.sm};
    color: ${theme.textSecondary};
    margin-bottom: 6px;
  }

  .footer {
    padding: 16px;
    text-align: center;
    font-size: ${theme.fontSize.xs};
    color: ${theme.textMuted};
    border-top: 1px solid ${theme.border};
  }

  .message {
    background: rgba(255,255,255,0.04);
    border: 1px solid ${theme.border};
    padding: 16px;
    border-radius: ${theme.radiusSm};
    margin-top: 10px;
    white-space: pre-wrap;
    line-height: 1.6;
    color: ${theme.textSecondary};
  }

  @media (max-width: 600px) {
    .container {
      margin: 0;
      border-radius: 0;
    }
  }
</style>
</head>

<body>

<div class="container">

  <div class="header">
    <h1>Message Received</h1>
    <p>Thank you for contacting us</p>
  </div>

  <div class="content">

    <p>Hi ${data.name},</p>

    <p>
      We've successfully received your message and a member of our team
      will respond as soon as possible.
    </p>

    <div class="box">
      <div class="label">Name</div>
      <div>${data.name}</div>

      <div class="label" style="margin-top:12px;">
        Email
      </div>
      <div>${data.email}</div>
    </div>

    <div style="margin-top:20px;">
      <div class="label">Your Message</div>

      <div class="message">
${data.message}
      </div>
    </div>

  </div>

  <div class="footer">
    © ${year} Your Company. This is an automated confirmation email.
  </div>

</div>

</body>
</html>
    `,

    text: `
Message Received

Hi ${data.name},

We've received your message and will respond shortly.

Email:
${data.email}

Message:
${data.message}

© ${year} Your Company
    `,
  };
}
