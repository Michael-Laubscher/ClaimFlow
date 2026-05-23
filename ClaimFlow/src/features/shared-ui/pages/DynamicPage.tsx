import { HeroSection } from "@/features/shared-ui/components/sections/HeroSection";
import TextSection from "@/features/shared-ui/components/sections/TextSection";
import CTASection from "@/features/shared-ui/components/sections/CTASection";
import StatsSection from "@/features/shared-ui/components/sections/StatsSection";
import ImageSection from "@/features/shared-ui/components/sections/ImageSection";
import FeatureSection from "@/features/shared-ui/components/sections/FeatureSection";
import TestimonialSection from "@/features/shared-ui/components/sections/TestimonialSection";
import FAQSection from "@/features/shared-ui/components/sections/FAQSection";

import type { PageConfig, PageSection } from "@/shared/types/page.types";

type DynamicPageProps = {
  config: PageConfig;
};

export default function DynamicPage({ config }: DynamicPageProps) {
  const sections: PageSection[] = Array.isArray(config?.sections)
    ? config.sections
    : [];

  return (
    <div>
      {sections.map((section, index) => {
        console.log("Section:", section.type, section);

        switch (section.type) {
          case "hero":
            return <HeroSection key={index} {...section} />;

          case "stats":
            return <StatsSection key={index} {...section} />;

          case "feature":
            return <FeatureSection key={index} {...section} />;

          case "image":
            return <ImageSection key={index} {...section} />;

          case "testimonials":
            return <TestimonialSection key={index} {...section} />;

          case "faq":
            return <FAQSection key={index} {...section} />;

          case "text":
            return <TextSection key={index} {...section} />;

          case "cta":
            return <CTASection key={index} {...section} />;

          default:
            return null;
        }
      })}
    </div>
  );
}