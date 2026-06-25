import { CheckCircle2, Clock3, FileText, Phone } from "lucide-react";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconBubble } from "@/shared/components/design-system/composite/card/IconBubble";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export default function SuccessPage() {
  const referenceNumber = "CLM-2026-001245"; // replace with backend later

  return (
    <>
      <PageBanner
        title="Claim Submitted Successfully"
        subtitle="Your claim has been received and is now in our system for review."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Claims", to: "/claims" },
          { label: "Success" },
        ]}
      />

      <Container className="py-16">
        <div className="mx-auto max-w-4xl">

         
          <Card
            variant="glass"
            className="relative overflow-hidden p-10 text-center"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex justify-center">
                <IconBubble>
                  <CheckCircle2 size={28} />
                </IconBubble>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Claim Received
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-slate-500">
                Thank you. Your claim has been successfully submitted and will now be reviewed by our claims team.
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
                We typically process claims within <strong>3–5 business days</strong>. You may be contacted if additional information is required.
              </p>

              <div className="mt-6 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-700">
                Claim Reference: {referenceNumber}
              </div>
            </div>
          </Card>

          
          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <Card variant="glass" className="p-6">
              <FileText className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Claim Logged</h3>
              <p className="mt-2 text-sm text-slate-500">
                Your claim has been recorded and assigned a reference number in our system.
              </p>
            </Card>

            <Card variant="glass" className="p-6">
              <Clock3 className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Under Review</h3>
              <p className="mt-2 text-sm text-slate-500">
                A claims assessor will review your documents and verify the details provided.
              </p>
            </Card>

            <Card variant="glass" className="p-6">
              <Phone className="mb-4 text-[#0c2578]" />
              <h3 className="font-semibold">Updates Sent</h3>
              <p className="mt-2 text-sm text-slate-500">
                You will receive updates via email or SMS. We only contact you if more information is needed.
              </p>
            </Card>

          </div>

         
          <Card variant="glass" className="mt-10 p-6">
            <h3 className="mb-3 font-semibold text-slate-900">
              What happens next?
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Our team reviews your claim details and attachments</li>
              <li>• We may request additional documentation if needed</li>
              <li>• Once approved, settlement or repair instructions will follow</li>
            </ul>
          </Card>

      
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" to="/">
              Return Home
            </Button>

         
          </div>

        
          <p className="mt-8 text-center text-xs text-slate-400">
            If you need to update your claim, please contact support within 24 hours of submission.
          </p>

        </div>
      </Container>
    </>
  );
}