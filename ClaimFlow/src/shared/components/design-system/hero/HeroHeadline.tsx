import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { GradientText } from "@/shared/components/design-system/typography/GradientText";

export function HeroHeadline() {
  return (
    <h1
      className="
mt-6

text-4xl

font-bold

leading-[1.05]

tracking-tight

text-white


sm:text-5xl

lg:text-6xl

"
    >
      {HERO_CONTENT.title.line1}

      <br />

      {HERO_CONTENT.title.line2}

      <br />

      <GradientText>{HERO_CONTENT.title.highlight}</GradientText>

      <span> {HERO_CONTENT.title.line3}</span>

      <br />

      {HERO_CONTENT.title.line4}
    </h1>
  );
}
