import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { BulletList } from "./BulletList";
import type { Privacy as PrivacySectionType } from "@/shared/types/privacy.types";
import { Card } from "@/shared/components/design-system/composite/card/Card";

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
        <Typography variant="body-md" color="muted" className="mt-3">
          {section.content}
        </Typography>
      )}

      {section.list && (
        <div className="mt-4">
          <BulletList items={section.list} />
        </div>
      )}
    </Card>
  );
}
