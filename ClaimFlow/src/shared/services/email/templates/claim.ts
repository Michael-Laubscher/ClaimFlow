import { theme } from "../types/theme";

export function claimEmailTemplate(data: { name: string; claimNumber: string }) {
  return {
    subject: "Claim Received",
    html: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
  body, table, td {
    margin:0;
    padding:0;
    font-family: Inter, Arial, sans-serif;
  }

  .bg {
    width:100%;
    background:${theme.bg};
    padding:40px 0;
  }

  .container {
    max-width:600px;
    margin:0 auto;
    background:${theme.surface};
    border:1px solid ${theme.border};
    border-radius:${theme.radius};
    overflow:hidden;
  }

  .header {
    background:${theme.primaryDark};
    padding:28px 24px;
    color:${theme.textPrimary};
  }

  .header h1 {
    margin:0;
    font-size:${theme.fontSize.xl};
  }

  .header p {
    margin:6px 0 0;
    font-size:${theme.fontSize.sm};
    color:${theme.textSecondary};
  }

  .content {
    padding:24px;
    color:${theme.textPrimary};
  }

  .muted {
    color:${theme.textSecondary};
    font-size:${theme.fontSize.md};
    line-height:1.6;
  }

  .card {
    margin-top:${theme.space.md};
    padding:${theme.space.md};
    border:1px solid ${theme.border};
    border-radius:${theme.radius};
    background:${theme.primarySoft};
    text-align:center;
  }

  .label {
    font-size:${theme.fontSize.xs};
    color:${theme.textMuted};
  }

  .value {
    margin-top:6px;
    font-size:20px;
    font-weight:700;
    color:${theme.primary};
    letter-spacing:1px;
  }

  .btn {
    display:inline-block;
    padding:12px 18px;
    border-radius:${theme.radiusSm};
    font-size:${theme.fontSize.md};
    font-weight:600;
    text-decoration:none;
    margin-top:${theme.space.md};
  }

  .btn-primary {
    background:${theme.primary};
    color:#fff !important;
  }

  .btn-secondary {
    background:transparent;
    border:1px solid ${theme.primary};
    color:${theme.primary} !important;
  }

  .btn-wrap {
    text-align:center;
    margin-top:${theme.space.md};
  }

  .footer {
    padding:16px;
    text-align:center;
    font-size:${theme.fontSize.xs};
    color:${theme.textMuted};
    border-top:1px solid ${theme.border};
  }

  @media (max-width:600px) {
    .content { padding:20px; }
    .header { padding:22px; }
    .btn { width:100%; box-sizing:border-box; }
  }

  @media (prefers-color-scheme: dark) {
    .container { background:${theme.surface} !important; }
  }
</style>
</head>

<body>
  <div class="bg">
    <table width="100%">
      <tr>
        <td align="center">

          <div class="container">

            <!-- HEADER -->
            <div class="header">
              <h1>Claim Received</h1>
              <p>We’ve logged your claim successfully</p>
            </div>

            <!-- CONTENT -->
            <div class="content">

              <p class="muted">
                Hi ${data.name}, your claim is now being reviewed by our team. We’ll notify you of any updates.
              </p>

              <div class="card">
                <div class="label">Claim Number</div>
                <div class="value">${data.claimNumber}</div>
              </div>

              <div class="btn-wrap">
                <a href="#" class="btn btn-primary">
                  View Claim Status
                </a>
              </div>

              <div class="btn-wrap">
                <a href="#" class="btn btn-secondary">
                  Download Claim PDF
                </a>
              </div>

            </div>

            <!-- FOOTER -->
            <div class="footer">
              Need help? Contact support anytime.<br/>
              © ${new Date().getFullYear()} Your Company
            </div>

          </div>

        </td>
      </tr>
    </table>
  </div>
</body>
</html>
    `,
  };
}
