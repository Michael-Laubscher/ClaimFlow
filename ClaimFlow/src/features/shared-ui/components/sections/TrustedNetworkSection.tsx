import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Text } from "@/shared/components/design-system/typography/Text";
import { Card } from "@/shared/components/design-system/composite/card/Card";

const logos = ["TransGlobal", "CargoLink", "AfriMove", "FleetAxis", "TradeRoute"];

export function TrustedNetworkSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <Text
            className="
text-xs
font-semibold
uppercase
tracking-[0.35em]
text-slate-400
"
          >
            Trusted across African trade networks
          </Text>

          <div
            className="
mt-10
grid
grid-cols-2
gap-5
md:grid-cols-5
"
          >
            {logos.map((logo) => (
              <Card
                key={logo}
                className="
group
flex
h-24
items-center
justify-center
rounded-3xl
border-slate-200
bg-white
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"
              >
                <span
                  className="
font-semibold
text-slate-500
transition
group-hover:text-slate-900
"
                >
                  {logo}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
