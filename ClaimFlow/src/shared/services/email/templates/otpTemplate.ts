import { theme } from "../types/theme";

export function otpTemplate(data: { otp: string }) {
  const year = new Date().getFullYear();

  return {
    subject: "Your Verification Code",

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
    padding: 20px;
    border-radius: ${theme.radiusSm};
    margin-top: 16px;
    text-align: center;
  }

  .label {
    font-size: ${theme.fontSize.sm};
    color: ${theme.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .value {
    font-size: 32px;
    font-weight: bold;
    margin-top: 8px;
    color: ${theme.primary};
    letter-spacing: 8px;
  }

  .footer {
    padding: 16px;
    text-align: center;
    font-size: ${theme.fontSize.xs};
    color: ${theme.textMuted};
    border-top: 1px solid ${theme.border};
  }

  @media (max-width: 600px) {
    .container {
      margin: 0;
      border-radius: 0;
    }

    .value {
      letter-spacing: 4px;
      font-size: 28px;
    }
  }
</style>
</head>

<body>

<div class="container">

  <div class="header">
    <h1>Verification Required</h1>
    <p>Use the code below to continue</p>
  </div>

  <div class="content">

    <p>Hello,</p>

    <p>
      Please enter the following verification code to complete your sign-in.
    </p>

    <div class="box">
      <div class="label">Verification Code</div>
      <div class="value">${data.otp}</div>
    </div>

    <p style="margin-top:20px;color:${theme.textSecondary};">
      This code will expire in <strong>10 minutes</strong>.
    </p>

    <p style="font-size:14px;color:${theme.textSecondary};">
      If you did not request this code, you can safely ignore this email.
    </p>

  </div>

  <div class="footer">
    © ${year} Your Company. Never share this code with anyone.
  </div>

</div>

</body>
</html>
    `,

    text: `
Verification Code

Your verification code is:

${data.otp}

This code expires in 10 minutes.

© ${year} Your Company
    `,
  };
}
