import { cn } from "@/shared/lib/cn";
import { Text } from "../typography/Text";

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({ title, description, children, className }: Props) {
  return (
    <section className={cn("space-y-8 py-2 first:pt-0 last:pb-0", className)}>
      <header className="space-y-2">
        <Text variant="title" color="default" className="text-2xl font-semibold tracking-tight">
          {title}
        </Text>

        {description && (
          <Text color="muted" className="max-w-2xl text-base leading-7">
            {description}
          </Text>
        )}
      </header>

      <div className="h-px bg-slate-200" />

      <div className="space-y-10">{children}</div>
    </section>
  );
}
