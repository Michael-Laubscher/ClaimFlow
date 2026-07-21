import { theme } from "../types/theme";

type QuoteTemplateProps = {
  business: string;
  insuranceType: string;
  coverage: string;
  text?: string;
};

export function quoteSubmittedTemplate({ business, insuranceType, coverage, text }: QuoteTemplateProps): {
  subject: string;
  html: string;
  text?: string;
} {
  return {
    subject: "Quote Request Received",
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

  .intro {
    font-size:${theme.fontSize.md};
    color:${theme.textSecondary};
    line-height:1.6;
    margin-bottom:${theme.space.md};
  }

  .card {
    border:1px solid ${theme.border};
    border-radius:${theme.radius};
    padding:${theme.space.md};
    margin-bottom:${theme.space.sm};
    background:rgba(255,255,255,0.02);
  }

  .label {
    font-size:${theme.fontSize.xs};
    color:${theme.textMuted};
    margin-bottom:4px;
  }

  .value {
    font-size:${theme.fontSize.md};
    font-weight:600;
    color:${theme.textPrimary};
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
              <h1>Quote Request Received</h1>
              <p>Your tailored quote is being prepared</p>
            </div>

            <!-- CONTENT -->
            <div class="content">

              <p class="intro">
                Thank you for your request. Our team is reviewing your details and will prepare your quote shortly.
              </p>

              <div class="card">
                <div class="label">Business</div>
                <div class="value">${business}</div>
              </div>

              <div class="card">
                <div class="label">Insurance Type</div>
                <div class="value">${insuranceType}</div>
              </div>

              <div class="card">
                <div class="label">Coverage</div>
                <div class="value">${coverage}</div>
              </div>

              <div class="btn-wrap">
                <a href="#" class="btn btn-primary">
                  View Quote Progress
                </a>
              </div>

              <div class="btn-wrap">
                <a href="#" class="btn btn-secondary">
                  Download Quote PDF
                </a>
              </div>

            </div>

            <!-- FOOTER -->
            <div class="footer">
              © ${new Date().getFullYear()} Your Company. All rights reserved.
            </div>

          </div>

        </td>
      </tr>
    </table>
  </div>
</body>
</html>
    `,
    text: `
${text}
    `,
  };
}
