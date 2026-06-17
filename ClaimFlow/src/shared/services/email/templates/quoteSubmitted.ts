export const quoteSubmittedTemplate = ({ business, insuranceType, coverage }: { business: string; insuranceType: string; coverage: string }) => ({
  subject: "Quote Request Received",
  html: `
    <h2>Quote Request Received</h2>

    <p>Thank you for your enquiry.</p>

    <p><strong>Business:</strong> ${business}</p>
    <p><strong>Insurance:</strong> ${insuranceType}</p>
    <p><strong>Coverage:</strong> ${coverage}</p>

    <p>We'll contact you shortly.</p>
  `,
});
