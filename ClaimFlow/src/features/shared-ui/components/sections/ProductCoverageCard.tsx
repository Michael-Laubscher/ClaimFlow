import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Text } from "@/shared/components/design-system/typography/Text";
import { Shield } from "lucide-react";

interface Props {
  label: string;
  description: string;
}

export function ProductCoverageCard({ label, description }: Props) {
  return (
    <Card
      className="
        border-[--color-slate-200]
        bg-[--color-slate-50]
        p-5
      "
    >
      <Stack direction="row" gap="md" align="start">
        <Shield className="mt-1 h-5 w-5 text-[--color-orange]" />

        <Stack gap="xs">
          <Text variant="body" className="text-[--color-slate-900]">
            {label}
          </Text>

          <Text color="muted">{description}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}
