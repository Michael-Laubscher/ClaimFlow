import Hero from "../components/sections/HeroSection";
import TextSection from "../components/sections/TextSection";
import CardGrid from "../components/sections/CardGrid";
import CTASection from "../components/sections/CTASection";
import StatsSection from "../components/sections/StatsSection";
import ImageSection from "../components/sections/ImageSection";
import FeatureSection from "../components/sections/FeatureSection";
import TestimonialsSection from "../components/sections/TestimonialSection";
import FAQSection from "../components/sections/FAQSection";
import type { PageConfig, PageSection } from "../../../shared/types/page.types";

type DynamicPageProps = {
  config: PageConfig;
};

export default function DynamicPage({ config }: DynamicPageProps) {
  return (
    <div>
      {config.sections.map((section: PageSection, index: number) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} {...section} />;

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
