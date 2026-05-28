import { useState } from "react";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";
import { FAQSearch } from "../components/sections/FAQSearch";
import { FAQCategoryPills } from "../components/sections/FAQCategoryPills";
import { FAQList } from "../components/sections/FAQList";
import { faqs } from "../configs/faq.config";
import { filterFAQs, getTotalFAQs } from "@/shared/utilis/faq.utils";
import { banners } from "../configs/banners.config";
import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.keys(faqs)];

  const filtered = filterFAQs(faqs, search, activeCategory);

  const total = getTotalFAQs(filtered);

  return (
    <div className="bg-[--color-bg]">
      {/* HERO */}
      <PageBanner {...banners.faq} title="Frequently Asked Questions" subtitle="Find answers about claims, payments, Yellow Card insurance, and transport coverage across Africa." />

      {/* FLOATING FILTER PANEL */}
      <Container size="lg" className="relative z-10 -mt-16 pb-16">
        <Card
          className="
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-6
            shadow-2xl
          "
        >
          <div className="space-y-6">
            {/* TITLE */}
            <div className="text-center">
              <Heading size="lg" className="text-white">
                How can we help?
              </Heading>

              <GenericText className="mt-2 text-white/60">Search our support center or browse by category.</GenericText>
            </div>

            {/* SEARCH */}
            <FAQSearch value={search} onChange={setSearch} />

            {/* FILTERS */}
            <FAQCategoryPills categories={categories} active={activeCategory} onChange={setActiveCategory} />

            {/* RESULTS */}
            <div className="border-t border-white/10 pt-4">
              <GenericText className="text-sm text-white/50">
                {total} result{total !== 1 ? "s" : ""} found
              </GenericText>
            </div>
          </div>
        </Card>
      </Container>

      {/* FAQ CONTENT */}
      <section className="pb-24">
        <Container size="lg">
          {total === 0 ? (
            <Card className="p-12 text-center">
              <Heading size="lg" className="text-white">
                No FAQs found
              </Heading>

              <GenericText className="mt-3 text-white/60">Try searching with different keywords or browse another category.</GenericText>
            </Card>
          ) : (
            <FAQList data={filtered} />
          )}
        </Container>
      </section>

      {/* SUPPORT CTA */}
      <section className="pb-24">
        <Container size="md">
          <Card
            className="
              relative overflow-hidden
              border border-[--color-primary]/20
              bg-gradient-to-br
              from-[--color-primary]
              to-[--color-primary-dark]
              p-10
              text-center
            "
          >
            {/* Glow */}
            <div
              className="
                absolute right-0 top-0
                h-40 w-40
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <Heading size="xl" className="text-white">
                Still need help?
              </Heading>

              <GenericText className="mx-auto mt-4 max-w-xl text-white/70">Our support team can assist you with claims, cross-border insurance, policy questions, and fleet coverage.</GenericText>

              <div className="mt-8 flex justify-center">
                <button
                  className="
                    rounded-xl
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[--color-primary]
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  Contact Support
                </button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
