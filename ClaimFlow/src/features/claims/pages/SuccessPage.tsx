import { CheckCircle2, Clock3, FileText, Phone, ArrowRight, ShieldCheck } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export default function SuccessPage() {
  const referenceNumber = "CLM-2026-001245";

  return (
    <>
      <PageBanner
        title="Claim Submitted Successfully"
        subtitle="Your claim has been received and is now being processed."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Claims", to: "/claims" }, { label: "Success" }]}
      />

      <section
        className="
          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-100
          py-16
        "
      >
        <Container>
          <div className="mx-auto max-w-5xl space-y-10">
            <Card
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-10
                text-center
                shadow-xl
                shadow-slate-200/40
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-72
                  w-72
                  rounded-full
                  bg-green-500/10
                  blur-3xl
                "
              />

              <div className="relative">
                <div className="flex justify-center">
                  <div
                    className="
                      rounded-full
                      bg-green-50
                      p-4
                      ring-8
                      ring-green-50/60
                    "
                  >
                    <CheckCircle2 className="text-green-600" size={42} />
                  </div>
                </div>

                <h1
                  className="
                    mt-8
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    md:text-4xl
                  "
                >
                  Claim Received
                </h1>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-xl
                    text-slate-500
                    leading-relaxed
                  "
                >
                  Thank you for submitting your claim. Our team has received your information and will begin reviewing your documents.
                </p>

                <div
                  className="
                    mx-auto
                    mt-8
                    max-w-md
                    rounded-2xl
                    border
                    border-green-200
                    bg-green-50
                    px-6
                    py-5
                  "
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-green-700">Claim Reference Number</p>

                  <p
                    className="
                      mt-2
                      text-xl
                      font-bold
                      tracking-wide
                      text-green-800
                    "
                  >
                    {referenceNumber}
                  </p>
                </div>

                <p
                  className="
                    mt-6
                    text-sm
                    text-slate-500
                  "
                >
                  Estimated review time:
                  <span className="font-semibold text-slate-700"> 3–5 business days</span>
                </p>
              </div>
            </Card>

            <Card
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                shadow-slate-200/30
              "
            >
              <div className="mb-8 flex items-center gap-3">
                <ShieldCheck className="text-green-600" />

                <h2 className="text-xl font-semibold text-slate-900">What happens next?</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: FileText,
                    title: "Claim Logged",
                    text: "Your claim details and attachments have been securely recorded.",
                  },
                  {
                    icon: Clock3,
                    title: "Assessment in Progress",
                    text: "A claims specialist will review your information and validate the details.",
                  },
                  {
                    icon: Phone,
                    title: "Updates & Communication",
                    text: "We will contact you if additional information is required.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-5">
                      <div className="relative">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-slate-100
                          "
                        >
                          <Icon className="text-[#0c2578]" size={22} />
                        </div>

                        {index !== 2 && (
                          <div
                            className="
                              absolute
                              left-1/2
                              top-12
                              h-10
                              w-px
                              -translate-x-1/2
                              bg-slate-200
                            "
                          />
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>

                        <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-white
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-6
                  
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
                  <h3 className="text-xl text-slate-700 font-semibold">Need help with your claim?</h3>

                  <p className="mt-2 text-sm text-slate-300">Our support team is available if you need assistance.</p>
                </div>

                <Button
                  size="lg"
                  to="/"
                  className="btn
                  "
                >
                  Return Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            <p
              className="
                text-center
                text-xs
                text-slate-400
              "
            >
              If you need to update your claim, please contact support within 24 hours of submission.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
