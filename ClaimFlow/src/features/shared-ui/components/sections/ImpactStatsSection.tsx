import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import type { ImpactStat } from "@/shared/types/about.types";


interface Props {
  stats: ImpactStat[];
}

export function ImpactStatsSection({
  stats,
}: Props) {
  return (
    <Section
      className="
        bg-[linear-gradient(135deg,#071852_0%,#0c2578_40%,#c9562a_100%)]
        py-24
      "
    >
      <Container>
        <div
          className="
            grid
            gap-10
            text-center
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="
                  text-5xl
                  font-black
                  text-white
                  lg:text-6xl
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-3
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}