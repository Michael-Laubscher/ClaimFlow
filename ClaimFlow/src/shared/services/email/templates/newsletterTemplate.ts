import { theme } from "../types/theme";
import { escapeHtml } from "../utils/escapeHtml";

type NewsletterTopic = {
  title: string;
  description: string;
  url: string;
};

type NewsletterTemplateProps = {
  name?: string;
  title: string;
  intro: string;
  newsPageUrl: string;
  topics: NewsletterTopic[];
  unsubscribeToken: string;
};

export function newsletterTemplate(data: NewsletterTemplateProps): {
  subject: string;
  html: string;
  text?: string;
} {
  return {
    subject: data.title,

    html: `
<!DOCTYPE html>
<html>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body, table, td {
 margin:0;
 padding:0;
 font-family:Inter,Arial,sans-serif;
}

.bg {
 width:100%;
 background:${theme.bg};
 padding:40px 0;
}

.container {
 max-width:600px;
 margin:auto;
 background:${theme.surface};
 border:1px solid ${theme.border};
 border-radius:${theme.radius};
 overflow:hidden;
}

.header {
 background:${theme.primaryDark};
 padding:32px 24px;
 color:${theme.textPrimary};
}

.header h1 {
 margin:0;
 font-size:${theme.fontSize.xl};
}

.content {
 padding:24px;
}

.text {
 color:${theme.textSecondary};
 line-height:1.7;
 font-size:${theme.fontSize.md};
}

.footer {
 padding:16px;
 text-align:center;
 color:${theme.textMuted};
 font-size:${theme.fontSize.xs};
 border-top:1px solid ${theme.border};
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

<h1>
${data.title}
</h1>

</div>


<div class="content">

<p class="text">

${escapeHtml(data.name)}${data.name ? `Hi ${escapeHtml(data.name)}${data.name},<br/><br/>` : ""}

${data.intro}

</p>

<div style="text-align:center;margin:24px 0;">
  <a
    href="${data.newsPageUrl}"
    style="
      display:inline-block;
      background:${theme.primary};
      color:white;
      padding:12px 24px;
      border-radius:8px;
      text-decoration:none;
      font-weight:600;
    "
  >
    View All News & Updates
  </a>
</div>

${data.topics
  .map(
    (topic) => `
      <div
        style="
          border:1px solid ${theme.border};
          border-radius:${theme.radius};
          padding:20px;
          margin-bottom:16px;
          background:${theme.bg};
        "
      >

        <h3
          style="
            margin:0 0 8px;
            color:${theme.textPrimary};
          "
        >
          ${topic.title}
        </h3>

        <p
          style="
            margin:0 0 16px;
            color:${theme.textSecondary};
            line-height:1.6;
          "
        >
          ${topic.description}
        </p>

        <a
          href="${topic.url}"
          style="
            color:${theme.primary};
            font-weight:600;
            text-decoration:none;
          "
        >
          Explore Topic →
        </a>

      </div>
    `
  )
  .join("")}

</div>


<div class="footer">

You received this email because you subscribed to our updates.

<br/>

© ${new Date().getFullYear()} Your Company

</div>
<br/>

<div>

<a href="https://domain.com/unsubscribe?token=xyz">
  Unsubscribe
</a>
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
${data.title}

${escapeHtml(data.name)}${data.name ? `Hi ${escapeHtml(data.name)}${data.name},` : ""}

${data.intro}

View All News:
${data.newsPageUrl}

${data.topics
  .map(
    (topic) => `
${topic.title}
${topic.description}
${topic.url}
`
  )
  .join("\n")}

© ${new Date().getFullYear()} Your Company
`,
  };
}
