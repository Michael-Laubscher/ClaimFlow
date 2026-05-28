import type { FAQData } from "@/shared/types/faq.types";
import { FAQItem } from "./FAQItem";

interface Props {
  data: FAQData;
}

export function FAQList({ data }: Props) {
  return (
    <div className="space-y-10">
      {Object.entries(data).map(([category, items]) => (
        <section key={category}>
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">{category}</h2>
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/50">{items.length}</span>
          </div>

          <div className="space-y-3">
            {items.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
