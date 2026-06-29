import { OtpService } from "../services/OtpService";

import { claimApprovedTemplate } from "../templates/claimApproved";
import { claimReceivedTemplate } from "../templates/claimReceived";
import { contactTemplate } from "../templates/contactConfirmation";
import { newsletterTemplate } from "../templates/newsletterTemplate";
import { otpTemplate } from "../templates/otpTemplate";
import { quoteReadyTemplate } from "../templates/quoteReadyTemplate";
import { quoteSubmittedTemplate } from "../templates/quoteSubmitted";

import { emailTestData } from "./emailTestData";

const otpService = new OtpService();

export const emailTestRegistry = {
  claim_received: () =>
    claimReceivedTemplate({
      name: emailTestData.user.name,
      claimNumber: emailTestData.claim.number,
    }),

  claim_approved: () =>
    claimApprovedTemplate({
      name: emailTestData.user.name,
      claimNumber: emailTestData.claim.number,
    }),

  quote_submitted: () =>
    quoteSubmittedTemplate({
      business: emailTestData.quote.business,
      insuranceType: emailTestData.quote.insuranceType,
      coverage: emailTestData.quote.coverage,
    }),

  quote_ready: () =>
    quoteReadyTemplate({
      name: emailTestData.user.name,
      quoteNumber: emailTestData.quote.number,
      amount: emailTestData.quote.amount,
    }),

  contact: () =>
    contactTemplate({
      name: emailTestData.user.name,
      email: emailTestData.user.email,
      message: emailTestData.contact.message,
    }),

  newsletter: () =>
    newsletterTemplate({
      name: emailTestData.user.name,
      title: emailTestData.newsletter.title,
      intro: emailTestData.newsletter.intro,
      newsPageUrl: emailTestData.newsletter.newsPageUrl,
      topics: emailTestData.newsletter.topics,
    }),
  otp: () =>
    otpTemplate({
      otp: otpService.generate(),
    }),
} as const;

export type EmailTestType = keyof typeof emailTestRegistry;
