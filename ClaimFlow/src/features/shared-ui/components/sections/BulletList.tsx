import { cn } from "@/shared/lib/cn";

interface Props {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: Props) {
  return (
    <ul className={cn("space-y-2 text-[--color-text-secondary]", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
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
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
