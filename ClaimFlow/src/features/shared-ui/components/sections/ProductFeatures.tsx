import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Check } from "lucide-react";

interface Props {
  features: string[];
}

export function ProductFeatures({ features }: Props) {
  return (
    <Card
      className="
        border-[--color-slate-200]
        bg-white
        p-8
      "
    >
      <Stack gap="lg">
        <Heading as="h3" size="lg" className="text-[--color-slate-900]">
          Key Features
        </Heading>

        <Stack>
          {features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-start
                gap-3
                border-b
                border-[--color-slate-100]
                py-4
                last:border-none
                last:pb-0
                first:pt-0
              "
            >
              <Check
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0
                  text-[--color-orange]
                "
              />

              <Typography>{feature}</Typography>
            </div>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
