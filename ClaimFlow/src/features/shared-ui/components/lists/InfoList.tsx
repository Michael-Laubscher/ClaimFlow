import { cn } from "@/shared/lib/cn";
import { Check } from "lucide-react";

interface InfoListItem {
  id: string | number;
  label: string;
  type?: "bullet" | "check"; // default "bullet"
}

interface InfoListProps {
  items: InfoListItem[];
  className?: string;
}

export function InfoList({ items, className }: InfoListProps) {
  return (
    <ul className={cn("space-y-2 text-[--color-text-secondary]", className)}>
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          {item.type === "check" ? (
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[--color-orange]" />
          ) : (
            <span
              className="
                mt-1.5
                h-1.5
                w-1.5
                flex-shrink-0
                rounded-full
                bg-[--color-brand-primary]
              "
            />
          )}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
