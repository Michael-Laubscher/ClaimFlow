import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { GradientText } from "@/shared/components/design-system/typography/GradientText";

export function HeroHeadline() {
  return (
    <h1
      className="
      mt-8

      max-w-[14ch]

      font-black

      tracking-[-0.06em]

      text-white

      leading-[0.92]

      text-[2.6rem]

      sm:text-[3rem]

      lg:text-[3.8rem]

      xl:text-[3.8rem]
      "
    >
      <span>{HERO_CONTENT.title.line1}</span>

      <span className="mt-2 font-semibold text-white/90">{HERO_CONTENT.title.line2}</span>

      <span className="relative mt-2 inline-block">
        <GradientText>{HERO_CONTENT.title.highlight}</GradientText>

        {/* Glow */}
        <span
          className="
          absolute

          inset-x-4

          bottom-2

          -z-10

          h-6

          rounded-full

          bg-orange-500/30

          blur-2xl
          "
        />
      </span>

      <span className=" font-semibold text-white/95">{HERO_CONTENT.title.line3}</span>

      <span className="mt-2  text-white/70">{HERO_CONTENT.title.line4}</span>
    </h1>
  );
}
