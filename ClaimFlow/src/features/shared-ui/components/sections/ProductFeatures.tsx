import { CheckCircle2 } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

interface Props {
  features: string[];
}

export function ProductFeatures({ features }: Props) {
  return (
    <Card
      className="
rounded-[2.5rem]
border-slate-200
bg-white
p-10
shadow-lg
"
    >
      <Stack gap="lg">
        <div>
          <Heading as="h3" size="lg">
            Key Features
          </Heading>

          <Text color="muted" className="mt-2">
            Everything included in this protection solution.
          </Text>
        </div>

        <div
          className="
space-y-4
"
        >
          {features.map((feature) => (
            <div
              key={feature}
              className="
group
flex
items-start
gap-4
rounded-2xl
border
border-slate-100
p-4
transition
hover:border-orange-200
hover:bg-orange-50/50
"
            >
              <CheckCircle2
                className="
mt-0.5
h-5
w-5
shrink-0
text-orange-500
"
              />

              <Text
                className="
text-slate-700
group-hover:text-slate-900
"
              >
                {feature}
              </Text>
            </div>
          ))}
        </div>
      </Stack>
    </Card>
  );
}
