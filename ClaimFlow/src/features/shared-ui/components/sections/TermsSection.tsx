import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { Terms } from "@/shared/types/terms.types";

interface Props {
  section: Terms;
}

export function TermsSection({ section }: Props) {
  return (
    <Card variant="glass" className="p-6 sm:p-8">
      <Stack gap="sm">
        <Heading as="h2" size="lg" className="text-[--color-slate-900]">
          {section.title}
        </Heading>

        <Text variant="body" color="muted">
          {section.content}
        </Text>
      </Stack>
    </Card>
  );
}
