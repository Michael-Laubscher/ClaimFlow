import { PageBanner } from "@/shared/components/design-system/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { BranchCard } from "../components/sections/BranchCard";
import { branches } from "../configs/branches.config";

export default function BranchesPage() {
  return (
    <>
      <PageBanner
        badge="Regional Presence"
        title="Our Branches"
        subtitle="
          Find an Askari Insure office near you.
          We are strategically positioned across
          major transport and logistics hubs
          in Africa.
        "
        stats={[
          {
            value: "6+",
            label: "Regional Offices",
          },
          {
            value: "5",
            label: "Countries Served",
          },
          {
            value: "24/7",
            label: "Client Support",
          },
        ]}
      />

      <Section className="bg-[--color-slate-50] py-20">
        <Container size="xl">
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
