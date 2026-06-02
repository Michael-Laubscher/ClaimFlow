import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import BrandImage from "@/shared/components/design-system/svg/images/BrandImage.svg";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import type { CoreValue, CoreValueColor, ImpactStat } from "@/shared/types/about.types";
import { SectionBlock } from "../components/sections/SectionBlock";
import { coreValues, ourStory } from "../configs/about.config.data";
import { banners } from "../configs/banners.config";

export default function AboutPage() {
  const stats: ImpactStat[] = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10", label: "Years of Experience" },
  ];

  return (
    <>
      <PageBanner {...banners.about} />

      <SectionBlock
        layout="split"
        left={
          <div>
            <Heading>Our Story</Heading>
            {ourStory.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-slate-600">
                {p}
              </p>
            ))}
          </div>
        }
        right={<img src={BrandImage} className="rounded-3xl shadow-xl" />}
      />

      <SectionBlock
        className="bg-slate-50 py-20"
        layout="cards"
        items={coreValues}
        renderItem={(item) => {
          const Icon = item.icon;

          return (
            <Card className="rounded-3xl border-slate-200 bg-white p-10">
              <Icon className="h-9 w-9 text-[#233C7B]" />
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.desc}</p>
            </Card>
          );
        }}
      />

      <SectionBlock
        subtitle="Core Values"
        title="What Drives Us"
        layout="cards"
        items={coreValues}
        className="bg-white py-24"
        renderItem={(value: CoreValue) => {
          const Icon = value.icon;

          const iconStyles: Record<CoreValueColor, string> = {
            blue: "from-[#277AFF] to-[#1863FD]",
            green: "from-[#00B879] to-[#00A56E]",
            purple: "from-[#AA41FF] to-[#9C1EFC]",
            orange: "from-[#f97316] to-[#ea580c]",
            teal: "from-[#14b8a6] to-[#0d9488]",
          };

          return (
            <Card className="text-center p-10 rounded-3xl border-black/10 hover:-translate-y-1 transition-all duration-300">
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${iconStyles[value.iconColor]}`}>
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-slate-500">{value.desc}</p>
            </Card>
          );
        }}
      />

      <SectionBlock className="bg-gradient-to-br from-[#071852] to-[#c9562a] py-24" layout="stats" items={stats} />
    </>
  );
}
