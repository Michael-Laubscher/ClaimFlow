import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Pill } from "@/shared/components/design-system/primitives/Pill";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { FeatureCardProps } from "./FeatureCardProps";

export function FeatureCard({ title, description, icon: Icon, to, badge, ctaLabel = "Learn more", iconClassName = "text-[#233C7B]" }: FeatureCardProps) {
  const content = (
    <Card variant="solid" interactive className="group h-full bg-white border-2 border-[#0A25401A]">
      <div className="p-6">
        <Stack gap="lg">
          <Stack direction="row" align="center" justify="between">
            <IconSurface>
              <Icon className={`h-6 w-6 bg-[#233C7B1A] ${iconClassName}`} />
            </IconSurface>

            {badge && <Pill>{badge}</Pill>}
          </Stack>

          <Stack gap="xs">
            <Heading as="h3" size="lg" className="text-[#0A2540]">
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
              text-[#233C7B]
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
