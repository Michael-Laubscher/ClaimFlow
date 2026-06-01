import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { Privacy as PrivacySectionType } from "@/shared/types/privacy.types";
import { BulletList } from "./BulletList";

interface Props {
  section: PrivacySectionType;
}

export function PrivacySection({ section }: Props) {
  return (
    <Card variant="glass" className="p-6 sm:p-8">
      <Heading as="h2" size="lg" className="text-[--color-text-primary]">
        {section.title}
      </Heading>

      {section.content && (
        <Text variant="body" color="muted" className="mt-3">
          {section.content}
        </Text>
      )}

      {section.list && (
        <div className="mt-4">
          <BulletList items={section.list} />
        </div>
      )}
    </Card>
  );
}
