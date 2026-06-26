import { cn } from "@/shared/lib/cn";
import { Check } from "lucide-react";

interface InfoListItem {
  id: string | number;
  label: string;
  type?: "bullet" | "check";
}

interface InfoListProps {
  items: InfoListItem[];
  className?: string;
}

export function InfoList({ items, className }: InfoListProps) {
  return (
    <ul
      className={cn(
        `
        space-y-3
        text-sm
        text-slate-600
        `,
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="
            group
            flex
            items-start
            gap-3
            rounded-xl
            transition
            hover:bg-white
            hover:px-2
            hover:py-1.5
          "
        >
          {item.type === "check" ? (
            <span
              className="
                mt-0.5
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-50
              "
            >
              <Check
                className="
                  h-3.5
                  w-3.5
                  text-green-600
                "
              />
            </span>
          ) : (
            <span
              className="
                mt-2
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-gradient-to-r
                from-green-500
                to-blue-500
              "
            />
          )}

          <span
            className="
              leading-relaxed
              text-slate-600
              transition
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
