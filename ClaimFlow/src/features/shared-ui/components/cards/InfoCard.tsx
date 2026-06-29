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

interface Props {
  title?: string;

  badge?: string;

  icon?: React.ReactNode;

  label?: React.ReactNode;

  description?: React.ReactNode;

  items?: InfoCardItem[];

  variant?: React.ComponentProps<typeof Card>["variant"];

  className?: string;
}

export function InfoCard({
  title,
  badge,

  icon,
  label,
  description,

  items,

  variant = "glass",

  className,
}: Props) {
  return (
    <Card
      variant={variant}
      className={`
relative
overflow-hidden
rounded-3xl
${className}
`}
    >
      <Stack gap="lg">
        {/* Header */}

        {(title || badge) && (
          <div className="flex items-center justify-between">
            {title && (
              <Heading as="h3" size="lg">
                {title}
              </Heading>
            )}

            {badge && <Pill>{badge}</Pill>}
          </div>
        )}

        {/* Single item mode */}

        {(label || icon) && (
          <div className="flex items-start gap-4">
            {icon && (
              <div
                className="
flex
h-10
w-10
items-center
justify-center
rounded-2xl
bg-orange-500/10
"
              >
                {icon}
              </div>
            )}

            <div>
              <Text variant="body" className="font-medium">
                {label}
              </Text>

              {description && (
                <Text variant="sm" color="muted" className="mt-1">
                  {description}
                </Text>
              )}
            </div>
          </div>
        )}

        {/* Multiple items mode */}

        {items && (
          <div className="space-y-5">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className="
flex
h-10
w-10
items-center
justify-center
rounded-2xl
bg-orange-500/10
"
                >
                  {item.icon}
                </div>

                <div>
                  <Text variant="sm" className="font-medium">
                    {item.label}
                  </Text>

                  {item.description && (
                    <Text variant="sm" color="muted">
                      {item.description}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Stack>
    </Card>
  );
}
