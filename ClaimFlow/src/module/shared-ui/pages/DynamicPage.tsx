import HeroSection from "@/module/shared-ui/components/sections/HeroSection";
import TextSection from "@/module/shared-ui/components/sections/TextSection";
import CardGrid from "@/module/shared-ui/components/sections/CardGrid";
import CTASection from "@/module/shared-ui/components/sections/CTASection";
import StatsSection from "@/module/shared-ui/components/sections/StatsSection";
import ImageSection from "@/module/shared-ui/components/sections/ImageSection";
import FeatureSection from "@/module/shared-ui/components/sections/FeatureSection";
import TestimonialsSection from "@/module/shared-ui/components/sections/TestimonialSection";
import FAQSection from "@/module/shared-ui/components/sections/FAQSection";


import type { PageConfig, PageSection } from "@/shared/types/page.types";

type DynamicPageProps = {
  config: PageConfig;
};

export default function DynamicPage({ config }: DynamicPageProps) {
  return (
    <div>
      {config.sections.map((section: PageSection, index: number) => {
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
            return <TestimonialsSection key={index} {...section} />;

          case "faq":
            return <FAQSection key={index} {...section} />;

          case "text":
            return <TextSection key={index} {...section} />;

          case "cards":
            return <CardGrid key={index} {...section} />;

          case "cta":
            return <CTASection key={index} {...section} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
