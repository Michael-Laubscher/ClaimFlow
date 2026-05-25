import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { IconSurface } from "@/shared/components/design-system/surface/IconSurface";
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
              <Typography className="font-semibold">
                {item.title}
              </Typography>

              {item.lines.map((line) => (
                <Typography key={line} className="text-[--color-slate-500]">
                  {line}
                </Typography>
              ))}

              {item.highlight && (
                <Typography className="text-[--color-orange] font-semibold">
                  {item.highlight}
                </Typography>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}