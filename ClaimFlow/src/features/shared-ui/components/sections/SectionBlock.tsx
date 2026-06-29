import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { ReactNode } from "react";

type Layout = "grid" | "split" | "centered" | "cards" | "stats" | "logos";

interface StatItem {
  label: string;
  value: React.ReactNode;
}
interface SectionBlockProps<T = unknown> {
  titleClassName?: string;

  title?: string;
  subtitle?: string;
  description?: string;

  layout?: Layout;
  className?: string;

  children?: ReactNode;

  left?: ReactNode;
  right?: ReactNode;

  items?: T[];
  renderItem?: (item: T) => ReactNode;

  columns?: string;
}

export function SectionBlock<T>({ title, subtitle, description, layout = "grid", className = "", children, left, right, items = [], renderItem, columns = "grid gap-6" }: SectionBlockProps<T>) {
  return (
    <Section className={className}>
      <Container>
        {(title || subtitle || description) && (
          <div
            className="
mb-16
mx-auto
max-w-3xl
text-center
"
          >
            <Stack gap="sm">
              {subtitle && (
                <Text
                  className="
text-xs
uppercase
tracking-[0.3em]
text-slate-400
"
                >
                  {subtitle}
                </Text>
              )}

              {title && (
                <Heading
                  className="
text-4xl
font-black
tracking-tight
"
                >
                  {title}
                </Heading>
              )}

              {description && (
                <Text color="muted" className="mt-4">
                  {description}
                </Text>
              )}
            </Stack>
          </div>
        )}

        {layout === "split" && (
          <div
            className="
grid
items-center
gap-16
lg:grid-cols-2
"
          >
            {left}

            {right}
          </div>
        )}

        {layout === "cards" && (
          <div
            className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"
          >
            {items.map((item, index) => (
              <div key={index}>{renderItem?.(item)}</div>
            ))}
          </div>
        )}

        {layout === "stats" && (
          <div className="grid gap-12 text-center sm:grid-cols-3">
            {(items as StatItem[]).map((item) => (
              <div key={item.label}>
                <div className="text-5xl font-black tracking-tight text-white">{item.value}</div>

                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</div>
              </div>
            ))}
            
          </div>
        )}

        {layout === "grid" && <div className={columns}>{children}</div>}
      </Container>
    </Section>
  );
}
