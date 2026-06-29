import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { CONTACT_INFO } from "../../configs/contact.config";

export function ContactInfo() {
  return (
    <Stack gap="lg">
      <div>
        <Heading size="lg">Contact Details</Heading>

        <Text variant="sm" className="mt-2 text-slate-500">
          Reach our team through any of the channels below.
        </Text>
      </div>

      <Stack gap="lg">
        {CONTACT_INFO.map((item) => (
          <div
            key={item.title}
            className="
              flex
              gap-4
              rounded-2xl
              transition
              hover:bg-slate-50
              p-2
            "
          >
            <IconSurface>{item.icon}</IconSurface>

            <div>
              <Text variant="sm" className="font-semibold text-slate-800">
                {item.title}
              </Text>

              <div className="mt-1 space-y-1">
                {item.lines.map((line) => (
                  <Text key={line} variant="sm" className="text-slate-500">
                    {line}
                  </Text>
                ))}
              </div>

              {item.highlight && (
                <Text
                  variant="sm"
                  className="
                    mt-2
                    font-semibold
                    text-green-600
                  "
                >
                  {item.highlight}
                </Text>
              )}
            </div>
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
