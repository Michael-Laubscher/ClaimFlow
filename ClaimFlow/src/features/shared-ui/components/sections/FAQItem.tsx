import { AccordionItem } from "@/shared/components/design-system/Accordion/Accordion";

import type { FAQItem as Item } from "@/shared/types/faq.types";

export function FAQItem({ q, a }: Item) {
  return <AccordionItem title={q}>{a}</AccordionItem>;
}
