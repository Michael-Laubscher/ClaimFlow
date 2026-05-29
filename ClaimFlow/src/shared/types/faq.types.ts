// features/faq/types.ts

export interface FAQItem {
  q: string;
  a: string;
}

export type FAQData = Record<string, FAQItem[]>;
