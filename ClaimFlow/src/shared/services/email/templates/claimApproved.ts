import { theme } from "../types/theme";
import { escapeHtml } from "../utils/escapeHtml";

type ClaimApprovedTemplateProps = {
  name: string;
  claimNumber: string;
};

export function claimApprovedTemplate(data: ClaimApprovedTemplateProps) {
  const year = new Date().getFullYear();

  return {
    subject: "Your Claim Has Been Approved",
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
    color: #fff;
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
    text-align: center;
  }

  .label {
    font-size: ${theme.fontSize.sm};
    color: ${theme.textSecondary};
  }

  .value {
    font-size: 20px;
    font-weight: bold;
    margin-top: 6px;
    color: ${theme.primary};
    letter-spacing: 1px;
  }

  .footer {
    padding: 16px;
    text-align: center;
    font-size: ${theme.fontSize.xs};
    color: ${theme.textMuted};
    border-top: 1px solid ${theme.border};
  }

  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 18px;
    background: ${theme.primary};
    color: #fff;
    text-decoration: none;
    border-radius: ${theme.radiusSm};
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
      <h1>Claim Approved 🎉</h1>
      <p>Good news, your claim has been approved</p>
    </div>

    <div class="content">

      <p>Hi ${escapeHtml(data.name)}${data.name},</p>

      <p>
        We’re pleased to inform you that your claim has been reviewed and approved.
      </p>

      <div class="box">
        <div class="label">Claim Number</div>
        <div class="value">${escapeHtml(data.claimNumber)}${data.claimNumber}</div>
      </div>

      <div style="text-align:center;">
        <a href="#" class="btn">
          View Claim Details
        </a>
      </div>

      <p style="margin-top:20px; font-size:14px; color:${theme.textSecondary};">
        If you have any questions, please contact support.
      </p>

    </div>

    <div class="footer">
      © ${year} Your Company. All rights reserved.
    </div>

  </div>

</body>
</html>
    `,
    text: `
Claim Approved

Hi ${escapeHtml(data.name)}${data.name},

Your claim (${escapeHtml(data.claimNumber)}${data.claimNumber}) has been approved.

Please contact support if you have any questions.

© ${year} Your Company
    `,
  };
}
