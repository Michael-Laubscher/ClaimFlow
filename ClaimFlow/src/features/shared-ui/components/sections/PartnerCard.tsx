import { ArrowRight } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

interface PartnerCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function PartnerCard({ title, description, icon: Icon }: PartnerCardProps) {
  return (
    <Card variant="solid" interactive padding="lg" className="group h-full">
      <Stack gap="lg">
        <IconSurface>
          <Icon className="h-5 w-5 text-white" />
        </IconSurface>

        <Stack gap="sm">
          <Heading size="lg" className="text-slate-900">
            {title}
          </Heading>

          <Text className="leading-relaxed text-slate-500">{description}</Text>
        </Stack>

        <button
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[--color-orange]
            transition-all
            duration-200
            group-hover:gap-3
          "
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </button>
      </Stack>
    </Card>
  );
}
