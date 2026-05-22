import { HERO_CONTENT } from '@/features/shared-ui/configs';

import { GradientText } from '@/shared/components/design-system/typography/GradientText';
import { Heading } from '@/shared/components/design-system/typography/Heading';

export function HeroHeadline() {
  return (
    <Heading size="hero" className="mb-6 text-white">
      {HERO_CONTENT.title.line1}
      <br />

      {HERO_CONTENT.title.line2}
      <br />

      <GradientText>
        {HERO_CONTENT.title.highlight}
      </GradientText>{' '}

      <span>{HERO_CONTENT.title.line3}</span>
      <br />

      {HERO_CONTENT.title.line4}
    </Heading>
  );
}