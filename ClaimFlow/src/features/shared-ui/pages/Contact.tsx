import { Clock3, ShieldCheck, Headphones } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";

import { banners } from "@/features/shared-ui/configs/banners.config";

import ContactForm from "../components/sections/ContactForm";
import { ContactInfo } from "../components/sections/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <PageBanner {...banners.contact} />

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
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
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
        </div>

        <Container>
          <div className="relative mx-auto max-w-6xl">
            {/* HEADER */}

            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-green-700
                "
              >
                Askari Insurance Support
              </span>

              <h1
                className="
                  mt-6
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                We’re here when you need us
              </h1>

              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Speak with our insurance specialists for claims, fleet protection, cargo cover, Yellow Card assistance, and tailored insurance solutions.
              </p>
            </div>

            {/* CONTENT */}

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[400px_1fr]
              "
            >
              {/* INFO */}

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

                <ContactInfo />

                <div
                  className="
                    mt-10
                    space-y-4
                    rounded-2xl
                    bg-slate-50
                    p-5
                  "
                >
                  <div className="flex gap-3">
                    <ShieldCheck className="text-green-600" />

                    <div>
                      <p className="font-semibold text-slate-800">Secure communication</p>

                      <p className="text-sm text-slate-500">Your information is handled securely.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock3 className="text-blue-600" />

                    <div>
                      <p className="font-semibold text-slate-800">Fast response</p>

                      <p className="text-sm text-slate-500">We normally respond within one business day.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FORM */}

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

                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-green-50
                      "
                    >
                      <Headphones className="text-green-600" />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>

                      <p className="text-sm text-slate-500">Our team will get back to you shortly.</p>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
