import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { ReactNode } from "react";

type Layout = "grid" | "split" | "centered" | "cards" | "stats" | "logos";

interface SectionBlockProps<T = unknown> {
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

export function SectionBlock<T = unknown>({
  title,
  subtitle,
  description,
  layout = "grid",
  className = "",
  children,
  left,
  right,
  items = [],
  renderItem,
  columns = "grid gap-6",
}: SectionBlockProps<T>) {
  return (
    <Section className={className}>
      <Container>
        {(title || subtitle || description) && (
          <div className="mb-10 text-center">
            <Stack gap="sm">
              {subtitle && <Text className="text-sm uppercase tracking-[0.2em] text-slate-400">{subtitle}</Text>}

              {title && <Heading className="text-3xl font-bold text-slate-900">{title}</Heading>}

              {description && <Text className="mx-auto max-w-2xl text-slate-600">{description}</Text>}
            </Stack>
          </div>
        )}

        {layout === "split" && (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {left}
            {right}
          </div>
        )}

        {layout === "grid" && <div className={columns}>{children}</div>}

        {layout === "cards" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index}>{renderItem?.(item)}</div>
            ))}
          </div>
        )}

        {layout === "stats" && (
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {(items as Array<{ label: string; value: string }>).map((item) => (
              <div key={item.label}>
                <div className="text-5xl font-black text-white lg:text-6xl">{item.value}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        )}

        {layout === "logos" && (
          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-5">
            {(items as string[]).map((logo) => (
              <Card key={logo} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                <Text className="font-semibold text-slate-500">{logo}</Text>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
