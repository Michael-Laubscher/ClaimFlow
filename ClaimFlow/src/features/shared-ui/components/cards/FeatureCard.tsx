import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Pill } from "@/shared/components/design-system/primitives/Pill";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { FeatureCardProps } from "./FeatureCardProps";

export function FeatureCard({ title, description, icon: Icon, to, badge, ctaLabel = "Learn more", iconClassName = "text-[--color-orange]" }: FeatureCardProps) {
  const content = (
    <Card variant="solid" interactive className="group h-full">
      <div className="p-6">
        <Stack gap="lg">
          <Stack direction="row" align="center" justify="between">
            <IconSurface>
              <Icon className={`h-5 w-5 ${iconClassName}`} />
            </IconSurface>

            {badge && <Pill>{badge}</Pill>}
          </Stack>

          <Stack gap="xs">
            <Heading as="h3" size="lg">
              {title}
            </Heading>

            <Text color="muted">{description}</Text>
          </Stack>

          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[--color-orange]
            "
          >
            {ctaLabel}

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:translate-x-1
              "
            />
          </div>
        </Stack>
      </div>
    </Card>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
