import { ArrowRight } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import type { FeatureCardProps } from "./FeatureCardProps";

export function FeatureCard({ title, description, icon: Icon, ctaLabel = "Learn more" }: FeatureCardProps) {
  return (
    <Card
      variant="solid"
      className="
group
relative
h-full
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
p-8
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
    >
      <div
        className="
absolute
right-0
top-0
h-32
w-32
rounded-full
bg-orange-500/10
blur-3xl
"
      />

      <Stack gap="lg">
        <IconSurface>
          <Icon
            className="
h-6
w-6
text-orange-500
"
          />
        </IconSurface>

        <Stack gap="sm">
          <Heading as="h3" size="lg">
            {title}
          </Heading>

          <Text color="muted">{description}</Text>
        </Stack>

        <div
          className="
flex
items-center
gap-2
font-semibold
text-orange-500
"
        >
          {ctaLabel}

          <ArrowRight
            className="
h-4
transition-transform
group-hover:translate-x-2
"
          />
        </div>
      </Stack>
    </Card>
  );
}
