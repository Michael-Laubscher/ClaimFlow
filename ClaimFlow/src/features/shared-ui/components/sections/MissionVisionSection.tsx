import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";


import type { MissionVisionItem } from "@/shared/types/about.types";

interface Props {
  items: MissionVisionItem[];
}

export function MissionVisionSection({ items }: Props) {
  return (
    <Section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className="
                  rounded-3xl
                  border-slate-200
                  bg-white
                  p-10
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0c2578]/10
                    bg-blue-50
                    text-[#0c2578]
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
