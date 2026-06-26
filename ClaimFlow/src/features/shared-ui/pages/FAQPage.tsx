import { Search, HelpCircle } from "lucide-react";
import { useState } from "react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { filterFAQs, getTotalFAQs } from "@/shared/utilis/faq.utils";

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
    <>
      <PageBanner
        {...banners.faq}
        title="Frequently Asked Questions"
        subtitle="
          Find answers about claims, payments, Yellow Card insurance,
          and transport coverage across Africa.
        "
      />

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-100
          py-16
        "
      >
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-green-500/5
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />

        <Container size="lg">
          {/* SEARCH PANEL */}

          <Card
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-xl
              shadow-slate-200/40
              md:p-10
            "
          >
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-1
                bg-gradient-to-r
                from-green-500
                via-blue-500
                to-cyan-500
              "
            />

            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-50
                "
              >
                <HelpCircle className="text-green-600" />
              </div>

              <Heading
                size="lg"
                className="
                  mt-5
                  text-slate-900
                "
              >
                How can we help?
              </Heading>

              <Text
                variant="sm"
                className="
                  mx-auto
                  mt-3
                  max-w-xl
                  text-slate-500
                "
              >
                Search our support centre or browse answers by insurance category.
              </Text>
            </div>

            <div className="mt-8 space-y-6">
              <div
                className="
                  mx-auto
                  max-w-2xl
                "
              >
                <FAQSearch value={search} onChange={setSearch} />
              </div>

              <FAQCategoryPills categories={categories} active={activeCategory} onChange={setActiveCategory} />

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-200
                  pt-5
                "
              >
                <Text variant="sm" className="text-slate-500">
                  Showing
                  <span className="mx-1 font-semibold text-slate-800">{total}</span>
                  result
                  {total !== 1 && "s"}
                </Text>

                {search && (
                  <Text variant="sm" className="text-green-600">
                    Searching: "{search}"
                  </Text>
                )}
              </div>
            </div>
          </Card>

          {/* FAQ RESULTS */}

          <div className="mt-10">
            {total === 0 ? (
              <Card
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-12
                  text-center
                "
              >
                <Search
                  className="
                    mx-auto
                    h-10
                    w-10
                    text-slate-300
                  "
                />

                <Heading size="lg" className="mt-5 text-slate-900">
                  No answers found
                </Heading>

                <Text
                  className="
                    mt-3
                    text-slate-500
                  "
                >
                  Try different keywords or choose another category.
                </Text>
              </Card>
            ) : (
              <FAQList data={filtered} />
            )}
          </div>

          {/* SUPPORT CTA */}

          <Card
            className="
              mt-12
              rounded-3xl
              bg-slate-900
              p-8
              text-white
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
