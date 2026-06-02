import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { Privacy as PrivacySectionType } from "@/shared/types/privacy.types";
import { InfoList } from "../lists/InfoList";

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

      {section.list && section.list.length > 0 && (
        <div className="mt-4">
          <InfoList
            items={section.list.map((item) => ({
              id: item,
              label: item,
              type: "bullet",
            }))}
          />
        </div>
      )}
    </Card>
  );
}
