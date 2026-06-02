import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { CTASection } from "../components/sections/CTASection";
import { PartnersTestimonialsSection } from "../components/sections/PartnersTestimonialsSection";
import { PartnerTypesSection } from "../components/sections/PartnerTypesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { SectionBlock } from "../components/sections/SectionBlock";
import { banners } from "../configs/banners.config";

const logos = ["TransGlobal", "CargoLink", "AfriMove", "FleetAxis", "TradeRoute"];

export default function PartnersPage() {
  return (
    <>
      <PageBanner {...banners.partner} />

      <SectionBlock subtitle="Trusted Across African Trade Networks" layout="logos" items={logos} />

      <PartnerTypesSection />

      <BenefitsSection />

      <ProcessSection />

      <CTASection
        badge="Let’s Build Together"
        title="Ready To Partner With Askari Insure?"
        subtitle="Let’s discuss how we can work together to deliver scalable insurance solutions across African markets."
        actions={[
          {
            label: "Contact Partnership Team",
            to: "/contact",
            variant: "primary",
          },
          {
            label: "Schedule Consultation",
            to: "/consultation",
            variant: "outline",
          },
        ]}
        backgroundGradient="bg-gradient-to-br from-[--color-navy] to-[--color-teal]"
        cardVariant="glass"
      />

      <PartnersTestimonialsSection
        title="What Our Partners Say"
        items={[
          {
            company: "East Africa Logistics Group",
            quote: "Askari helped us streamline insurance processes for cross-border operations.",
            role: "Operations Director",
          },
          {
            company: "Continental Freight Solutions",
            quote: "The onboarding experience and support were exceptional from day one.",
            role: "Regional Manager",
          },
        ]}
      />
    </>
  );
}
