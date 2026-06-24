import { emailService } from "..";

await emailService.sendClaimReceived({
  email: "mloubscher@xsuredigital.com",
  name: "John",
  claimNumber: "CLM-123"
});