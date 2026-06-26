import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import BrandImage from "@/shared/components/design-system/svg/images/BrandImage.svg";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import type { CoreValue, CoreValueColor } from "@/shared/types/about.types";

import { SectionBlock } from "../components/sections/SectionBlock";

import { coreValues, ourStory } from "../configs/about.config.data";

import { banners } from "../configs/banners.config";
import { CustomerStoriesSection } from "../components/sections/CustomerStoriesSection";

export default function AboutPage() {
  return (
    <>
      <PageBanner {...banners.about} />

      <SectionBlock
        className="
bg-white
py-28
"
        layout="split"
        left={
          <div>
            <span
              className="
inline-flex
rounded-full
bg-orange-100
px-4
py-2
text-xs
font-semibold
uppercase
tracking-wider
text-orange-600
"
            >
              Our Story
            </span>

            <Heading
              className="
mt-6
text-5xl
font-black
tracking-tight
"
            >
              Building trust across African trade
            </Heading>

            <div className="mt-8 space-y-5">
              {ourStory.paragraphs.map((p) => (
                <Text
                  key={p}
                  color="muted"
                  className="
leading-relaxed
"
                >
                  {p}
                </Text>
              ))}
            </div>
          </div>
        }
        right={
          <div
            className="
relative
"
          >
            <div
              className="
absolute
inset-0
rounded-[3rem]
bg-blue-500/10
blur-3xl
"
            />

            <img
              src={BrandImage}
              alt="Askari brand"
              className="
relative
rounded-[3rem]
shadow-2xl
"
            />
          </div>
        }
      />

      {/* VALUES */}

      <SectionBlock
        subtitle="Our Values"
        title="What Drives Us"
        description="
The principles that guide every partnership,
product and decision we make.
"
        className="
bg-slate-50
py-28
"
        layout="cards"
        items={coreValues}
        renderItem={(value: CoreValue) => {
          const Icon = value.icon;

          const colors: Record<CoreValueColor, string> = {
            blue: "from-blue-500 to-blue-700",

            green: "from-emerald-500 to-emerald-700",

            purple: "from-purple-500 to-purple-700",

            orange: "from-orange-500 to-orange-700",

            teal: "from-teal-500 to-teal-700",
          };

          return (
            <Card
              className="
group
rounded-[2rem]
border-slate-200
bg-white
p-8
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
            >
              <div
                className={`
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
${colors[value.iconColor]}
text-white
shadow-lg
`}
              >
                <Icon
                  className="
h-8
w-8
"
                />
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
leading-relaxed
text-slate-500
"
              >
                {value.desc}
              </p>
            </Card>
          );
        }}
      />
      <CustomerStoriesSection />
    </>
  );
}
