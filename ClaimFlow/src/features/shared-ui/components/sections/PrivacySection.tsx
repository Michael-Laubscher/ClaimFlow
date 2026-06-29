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
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:border-slate-300
        hover:shadow-lg
        hover:shadow-slate-200/40
        sm:p-8
      "
    >
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-gradient-to-b
          from-green-500
          to-blue-500
          opacity-0
          transition
          group-hover:opacity-100
        "
      />

      <Heading
        as="h2"
        size="lg"
        className="
          text-slate-900
          group-hover:text-green-700
        "
      >
        {section.title}
      </Heading>

      {section.content && (
        <Text
          variant="body"
          className="
            mt-3
            leading-relaxed
            text-slate-600
          "
        >
          {section.content}
        </Text>
      )}

      {section.list && section.list.length > 0 && (
        <div
          className="
            mt-5
            rounded-2xl
            bg-slate-50
            p-5
          "
        >
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
