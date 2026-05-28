import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";

const logos = ["TransGlobal", "CargoLink", "AfriMove", "FleetAxis", "TradeRoute"];

export function LogoCloudSection() {
  return (
    <Section className="border-b border-slate-200 bg-white py-10">
      <Container>
        <Stack align="center" gap="lg">
          <Typography className="text-sm uppercase tracking-[0.2em] text-slate-400">Trusted Across African Trade Networks</Typography>

          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-5">
            {logos.map((item) => (
              <div key={item} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                <Typography className="font-semibold text-slate-500">{item}</Typography>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
