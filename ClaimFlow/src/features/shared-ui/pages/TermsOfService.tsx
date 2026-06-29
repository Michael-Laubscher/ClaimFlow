import { CalendarDays, FileText, ShieldCheck } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Text } from "@/shared/components/design-system/typography/Text";

import { TermsSection } from "../components/sections/TermsSection";
import { termsConfig } from "../configs/terms.config";

export default function TermsOfServicePage() {
  return (
    <>
      <PageBanner title="Terms of Service" subtitle="Legal terms governing the use of Askari Insure services." />

      <Section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-100
          py-20
        "
      >
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-green-500/5
            blur-3xl
          "
        />

        <Container size="lg">
          <Card
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-xl
              shadow-slate-200/40
            "
          >
            {/* Brand accent */}

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

            <div
              className="
                space-y-10
                p-8
                md:p-10
                lg:p-12
              "
            >
              {/* HEADER */}

              <div
                className="
                  border-b
                  border-slate-200
                  pb-8
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-green-50
                    "
                  >
                    <FileText className="text-green-600" size={28} />
                  </div>

                  <div>
                    <h1
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                      "
                    >
                      Terms of Service
                    </h1>

                    <Text
                      variant="sm"
                      className="
                        mt-1
                        text-slate-500
                      "
                    >
                      Please review the terms and conditions governing our services.
                    </Text>
                  </div>
                </div>

                {/* META */}

                <div
                  className="
                    mt-8
                    grid
                    gap-4
                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-slate-50
                      p-4
                    "
                  >
                    <CalendarDays className="text-blue-600" />

                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-slate-400
                        "
                      >
                        Last Updated
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        May 12, 2026
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-slate-50
                      p-4
                    "
                  >
                    <ShieldCheck className="text-green-600" />

                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-slate-400
                        "
                      >
                        Status
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Active Policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div
                className="
                  space-y-6
                "
              >
                {termsConfig.map((section) => (
                  <TermsSection key={section.title} section={section} />
                ))}

                <TermsSection
                  section={{
                    title: "8. Contact Information",
                    content: "For questions about these Terms, contact us at legal@askariinsure.com or +254 700 000 000.",
                  }}
                />
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
