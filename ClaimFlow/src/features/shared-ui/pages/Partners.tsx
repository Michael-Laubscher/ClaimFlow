import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { LogoCloudSection } from "../components/sections/LogoCloudSection";
import { PartnersCTASection } from "../components/sections/PartnersCTASection";
import { PartnersTestimonialsSection } from "../components/sections/PartnersTestimonialsSection";
import { PartnerTypesSection } from "../components/sections/PartnerTypesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { banners } from "../configs/banners.config";

export default function PartnersPage() {
  return (
    <>
      <PageBanner {...banners.partner} />

      <LogoCloudSection />

      <PartnerTypesSection />

      <BenefitsSection />

      <ProcessSection />

      <PartnersCTASection
        badge="Let’s Build Together"
        title="Ready To Partner With Askari Insure?"
        description="Let’s discuss how we can work together to deliver scalable insurance solutions across African markets."
        primaryAction={{
          label: "Contact Partnership Team",
          href: "/contact",
        }}
        secondaryAction={{
          label: "Schedule Consultation",
          href: "/consultation",
        }}
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
