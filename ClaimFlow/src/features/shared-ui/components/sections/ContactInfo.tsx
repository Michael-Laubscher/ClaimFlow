import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import { CONTACT_INFO } from "../../configs/contact.config";

export function ContactInfo() {
  return (
    <Stack gap="lg">
      <Heading size="lg">Get in Touch</Heading>

      <Stack gap="lg">
        {CONTACT_INFO.map((item) => (
          <Stack key={item.title} direction="row" gap="md">
            <IconSurface>{item.icon}</IconSurface>

            <Stack gap="xs">
              <Text variant="sm" className="font-semibold">
                {item.title}
              </Text>

              {item.lines.map((line) => (
                <Text key={line} variant="sm" className="text-[--color-slate-500]">
                  {line}
                </Text>
              ))}

              {item.highlight && (
                <Text variant="sm" className="text-[--color-orange] font-semibold">
                  {item.highlight}
                </Text>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
