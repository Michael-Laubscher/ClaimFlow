import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import { filterFAQs, getTotalFAQs } from "@/shared/utilis/faq.utils";
import { useState } from "react";
import { FAQCategoryPills } from "../components/sections/FAQCategoryPills";
import { FAQList } from "../components/sections/FAQList";
import { FAQSearch } from "../components/sections/FAQSearch";
import { banners } from "../configs/banners.config";
import { faqs } from "../configs/faq.config";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.keys(faqs)];

  const filtered = filterFAQs(faqs, search, activeCategory);

  const total = getTotalFAQs(filtered);

  return (
    <div>
      {/* HERO */}
      <PageBanner {...banners.faq} title="Frequently Asked Questions" subtitle="Find answers about claims, payments, Yellow Card insurance, and transport coverage across Africa." />

      {/* FLOATING FILTER PANEL */}
      <Container size="lg" className="relative z-10  py-16">
        <Card
          className="
            border border-white/10
            backdrop-blur-xl
            p-6
            shadow-2xl
            bg-white
          "
        >
          <div className="space-y-6">
            {/* TITLE */}
            <div className="text-center">
              <Heading size="lg" className="text-black/60">
                How can we help?
              </Heading>

              <Text variant="sm" className="mt-2 text-black/60">
                Search our support center or browse by category.
              </Text>
            </div>

            {/* SEARCH */}
            <FAQSearch value={search} onChange={setSearch} />

            {/* FILTERS */}
            <FAQCategoryPills categories={categories} active={activeCategory} onChange={setActiveCategory} />

            {/* RESULTS */}
            <div className="border-t border-white/10 pt-4">
              <Text className="text-sm text-black/60">
                {total} result{total !== 1 ? "s" : ""} found
              </Text>
            </div>
          </div>
        </Card>
      </Container>

      {/* FAQ CONTENT */}
      <section className="pb-24">
        <Container size="lg">
          {total === 0 ? (
            <Card className="p-12 text-center">
              <Heading size="lg" className="text-black/60">
                No FAQs found
              </Heading>

              <Text className="mt-3 text-black/60">Try searching with different keywords or browse another category.</Text>
            </Card>
          ) : (
            <FAQList data={filtered} />
          )}
        </Container>
      </section>
    </div>
  );
}
