import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Pill } from "@/shared/components/design-system/primitives/Pill";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

export interface InfoCardItem {
  icon?: React.ReactNode;
  label: React.ReactNode;
  description?: React.ReactNode;
}

interface InfoCardProps {
  title?: string;
  badge?: string;

  icon?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;

  items?: InfoCardItem[];

  variant?: React.ComponentProps<typeof Card>["variant"];
  className?: string;
}

export function InfoCard({ title, badge, icon, label, description, items, variant = "glass", className }: InfoCardProps) {
  return (
    <Card variant={variant} className={className}>
      <Stack gap="lg">
        {(title || badge) && (
          <Stack direction="row" justify="between" align="center">
            {title && (
              <Heading as="h3" size="lg">
                {title}
              </Heading>
            )}

            {badge && <Pill>{badge}</Pill>}
          </Stack>
        )}

        {(icon || label) && (
          <Stack direction="row" gap="md" align="start">
            {icon}

            <Stack gap="xs">
              {label && (
                <Text variant="body" className="font-medium">
                  {label}
                </Text>
              )}

              {description && <Text color="muted">{description}</Text>}
            </Stack>
          </Stack>
        )}

        {items && (
          <Stack gap="md">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}

                <div>
                  {typeof item.label === "string" ? <Text variant="sm">{item.label}</Text> : item.label}

                  {item.description && (
                    <Text variant="sm" color="muted">
                      {item.description}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
