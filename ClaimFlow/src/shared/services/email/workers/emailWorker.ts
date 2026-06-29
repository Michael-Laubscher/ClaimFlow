import { Worker } from "bullmq";
import { emailService } from "..";

new Worker(
  "emails",

  async (job) => {
    switch (job.name) {
      case "claim_received":
        return emailService.sendClaimReceived(
          job.data
        );

      case "claim_approved":
        return emailService.sendClaimApproved(
          job.data
        );

      case "otp":
        return emailService.sendOtp(
          job.data
        );
    }
  },

  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);