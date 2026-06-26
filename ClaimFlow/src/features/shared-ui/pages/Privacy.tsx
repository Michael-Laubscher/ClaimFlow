import { CalendarDays, LockKeyhole, ShieldCheck } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Text } from "@/shared/components/design-system/typography/Text";

import { PrivacySection } from "../components/sections/PrivacySection";
import { privacyConfig } from "../configs/privacy.config";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        subtitle="
          How we collect, use, and protect your personal information.
        "
      />

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
        {/* Background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
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
                    <LockKeyhole className="text-green-600" size={28} />
                  </div>

                  <div>
                    <h1
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                      "
                    >
                      Privacy Policy
                    </h1>

                    <Text
                      variant="sm"
                      className="
                        mt-1
                        text-slate-500
                      "
                    >
                      Learn how we protect and manage your personal information.
                    </Text>
                  </div>
                </div>

                {/* METADATA */}

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
                        {privacyConfig.lastUpdated}
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
                        Data Protection
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Secure Information Handling
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
                {privacyConfig.sections.map((section) => (
                  <PrivacySection key={section.title} section={section} />
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
