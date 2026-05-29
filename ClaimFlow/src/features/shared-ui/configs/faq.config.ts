// features/faq/data.ts

import type { FAQData } from "@/shared/types/faq.types";

export const faqs: FAQData = {
  General: [
    {
      q: "What types of insurance do you offer?",
      a: "We offer Cargo Insurance, Commercial Vehicle Insurance, Yellow Card (COMESA) Insurance, and Liability Coverage.",
    },
    {
      q: "Which countries do you cover?",
      a: "We provide coverage across COMESA member states and African trade corridors.",
    },
  ],
  Claims: [
    {
      q: "How do I file a claim?",
      a: "Via dashboard, hotline, or branch locations.",
    },
  ],
  Payments: [
    {
      q: "What payment methods do you accept?",
      a: "M-Pesa, cards, bank transfer, and cheques.",
    },
  ],
};
