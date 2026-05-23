import { Card } from "@/shared/components/design-system/surface/Card";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";

import type {
  CoreValue,
  CoreValueColor,
} from "@/shared/types/about.types";

interface Props {
  values: CoreValue[];
}

const iconStyles: Record<CoreValueColor, string> = {
  blue: "from-[#3b6ef5] to-[#0c2578]",
  green: "from-[#22c55e] to-[#16a34a]",
  purple: "from-[#a855f7] to-[#7c3aed]",
  orange: "from-[#f97316] to-[#ea580c]",
  teal: "from-[#14b8a6] to-[#0d9488]",
};

export function CoreValuesSection({ values }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          centered
          badge="Core Values"
          title="What Drives Us"
        />

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.id}
                className="
                  rounded-3xl
                  border-black/10
                  bg-white
                  p-10
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div
                  className={`
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    text-white
                    ${iconStyles[value.iconColor]}
                  `}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-500
                  "
                >
                  {value.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}