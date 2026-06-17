import { CheckCircle2, Clock3, FileText, Phone } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconBubble } from "@/shared/components/design-system/composite/card/IconBubble";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export default function SuccessPage() {
  return (
    <>
      <PageBanner
        title="Claim Submitted Successfully"
        subtitle="Your claim has been received and is now being processed by our claims team."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Claims", to: "/claims" }, { label: "Success" }]}
      />

      <Container className="py-16">
        <div className="mx-auto max-w-4xl">
          <Card
            variant="glass"
            className="
              relative
              overflow-hidden
              p-10
              text-center
            "
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex justify-center">
                <IconBubble>
                  <CheckCircle2 size={28} />
                </IconBubble>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">Claim Received</h2>

              <p className="mx-auto mt-3 max-w-xl text-slate-500">Thank you for submitting your claim. Our team has successfully received your information and will begin reviewing it shortly.</p>

              <div
                className="
                  mt-8
                  inline-flex
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-green-700
                "
              >
                Claim Reference: CLM-2026-001245
              </div>
            </div>
          </Card>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card variant="glass" className="p-6">
              <FileText className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Submitted</h3>
              <p className="mt-2 text-sm text-slate-500">Your claim has been logged in our system.</p>
            </Card>

            <Card variant="glass" className="p-6">
              <Clock3 className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Assessment</h3>
              <p className="mt-2 text-sm text-slate-500">A claims specialist will review your submission.</p>
            </Card>

            <Card variant="glass" className="p-6">
              <Phone className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-slate-500">We will contact you if further information is needed.</p>
            </Card>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" to="/">
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
