import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { ReactNode } from "react";

type Layout = "grid" | "split" | "centered" | "cards" | "stats" | "logos";

interface SectionBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;

  layout?: Layout;
  className?: string;

  children?: ReactNode;

  left?: ReactNode;
  right?: ReactNode;

  items?: any[];
  renderItem?: (item: any) => ReactNode;

  columns?: string;
}

export function SectionBlock({ title, subtitle, description, layout = "grid", className = "", children, left, right, items = [], renderItem, columns = "grid gap-6" }: SectionBlockProps) {
  return (
    <Section className={className}>
      <Container>
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="mb-10 text-center">
            <Stack gap="sm">
              {subtitle && <Text className="text-sm uppercase tracking-[0.2em] text-slate-400">{subtitle}</Text>}

              {title && <Heading className="text-3xl font-bold text-slate-900">{title}</Heading>}

              {description && <Text className="text-slate-600 max-w-2xl mx-auto">{description}</Text>}
            </Stack>
          </div>
        )}

        {/* Layouts */}
        {layout === "split" && (
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {left}
            {right}
          </div>
        )}

        {layout === "grid" && <div className={`${columns}`}>{children}</div>}

        {layout === "cards" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i}>{renderItem?.(item)}</div>
            ))}
          </div>
        )}

        {layout === "stats" && (
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item: any) => (
              <div key={item.label}>
                <div className="text-5xl font-black text-white lg:text-6xl">{item.value}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        )}

        {layout === "logos" && (
          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-5">
            {items.map((logo: any) => (
              <Card key={logo} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                <Text className="font-semibold text-slate-500">{logo}</Text>
              </Card>
            ))}
          </div>
        )}

        {/* fallback */}
        {children}
      </Container>
    </Section>
  );
}
