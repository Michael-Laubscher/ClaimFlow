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
      {/* subtle accent */}

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

      <Stack gap="sm">
        <Heading
          as="h2"
          size="lg"
          className="
            text-slate-900
            transition
            group-hover:text-green-700
          "
        >
          {section.title}
        </Heading>

        <Text
          variant="body"
          className="
            leading-relaxed
            text-slate-600
          "
        >
          {section.content}
        </Text>
      </Stack>
    </Card>
  );
}
