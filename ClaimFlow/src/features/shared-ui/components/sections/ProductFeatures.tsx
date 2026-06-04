import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { InfoList } from "../lists/InfoList";

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

        <InfoList
          items={features.map((feature) => ({
            id: feature,
            label: feature,
            type: "check",
          }))}
        />
      </Stack>
    </Card>
  );
}
