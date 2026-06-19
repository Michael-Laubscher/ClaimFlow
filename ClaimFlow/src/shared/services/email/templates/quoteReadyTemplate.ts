import { theme } from "../types/theme";

type QuoteReadyTemplateProps = {
  name: string;
  quoteNumber: string;
  amount?: string;
};

export function quoteReadyTemplate(data: QuoteReadyTemplateProps): {
  subject: string;
  html: string;
  text?: string;
} {
  return {
    subject: "Your Quote Is Ready",

    html: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
  body, table, td {
    margin:0;
    padding:0;
    font-family:Inter, Arial, sans-serif;
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
  }

  .btn-wrap {
    text-align:center;
    margin-top:${theme.space.md};
  }

  .btn {
    display:inline-block;
    padding:12px 18px;
    border-radius:${theme.radiusSm};
    background:${theme.primary};
    color:#fff !important;
    text-decoration:none;
    font-weight:600;
  }

  .footer {
    padding:16px;
    text-align:center;
    font-size:${theme.fontSize.xs};
    color:${theme.textMuted};
    border-top:1px solid ${theme.border};
  }

  @media(max-width:600px){
    .container {
      margin:0;
      border-radius:0;
    }

    .btn {
      width:100%;
      box-sizing:border-box;
    }
  }
</style>

</head>

<body>

<div class="bg">

<table width="100%">
<tr>
<td align="center">

<div class="container">

<div class="header">
  <h1>Quote Ready 🎉</h1>
  <p>Your personalised quote is available</p>
</div>


<div class="content">

<p class="muted">
Hi ${data.name}, your quote has been prepared and is ready for you to review.
</p>


<div class="card">

<div class="label">
Quote Number
</div>

<div class="value">
${data.quoteNumber}
</div>


${
  data.amount
    ? `
<div style="margin-top:16px;">
<div class="label">
Estimated Coverage
</div>

<div class="value">
${data.amount}
</div>
</div>
`
    : ""
}

</div>


<div class="btn-wrap">

<a href="#" class="btn">
View Quote Details
</a>

</div>


<p style="margin-top:20px;color:${theme.textSecondary};font-size:14px;">
If you have any questions, our team is ready to assist you.
</p>


</div>


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

    text: `
Your Quote Is Ready

Hi ${data.name},

Your quote (${data.quoteNumber}) is ready to review.

${data.amount ? `Coverage: ${data.amount}` : ""}

View your quote details online.

© ${new Date().getFullYear()} Your Company
`,
  };
}
