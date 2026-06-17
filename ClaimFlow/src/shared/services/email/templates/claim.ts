export function claimEmailTemplate(data: { name: string; claimNumber: string }) {
  return {
    subject: "Claim Received",
    html: `
      <div style="font-family: sans-serif">
        <h2>Hi ${data.name}</h2>
        <p>Your claim has been received.</p>
        <h3>Claim #: ${data.claimNumber}</h3>
      </div>
    `,
  };
}
