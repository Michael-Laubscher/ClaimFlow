import { cn } from "@/shared/lib/cn";
import { Check, ArrowRight } from "lucide-react";

interface InfoListItem {
  id: string | number;
  label: string;
  type?: "bullet" | "check" | "arrow";
}

interface InfoListProps {
  items: InfoListItem[];
  className?: string;
  variant?: "default" | "card";
}

export function InfoList({ items, className, variant = "default" }: InfoListProps) {
  return (
    <ul
      className={cn(
        `
        space-y-4
        `,
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            `
            group
            flex
            items-start
            gap-4
            rounded-2xl
            transition-all
            duration-300
            `,
            variant === "card" &&
              `
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              hover:-translate-y-0.5
              hover:shadow-md
              `
          )}
        >
          <span
            className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-orange-100
            "
          >
            {item.type === "check" && (
              <Check
                className="
                h-4
                w-4
                text-orange-600
                "
              />
            )}

            {item.type === "arrow" && (
              <ArrowRight
                className="
                h-4
                w-4
                text-orange-600
                "
              />
            )}

            {!item.type || item.type === "bullet" ? (
              <span
                className="
                h-2
                w-2
                rounded-full
                bg-gradient-to-r
                from-orange-500
                to-blue-600
                "
              />
            ) : null}
          </span>

          <span
            className="
            pt-1
            text-sm
            leading-relaxed
            text-slate-600
            transition-colors
            group-hover:text-slate-900
            "
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
