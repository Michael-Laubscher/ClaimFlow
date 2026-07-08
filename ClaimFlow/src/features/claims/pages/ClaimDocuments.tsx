import { useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Form } from "@/shared/components/forms/components/Form";

import { banners } from "@/features/shared-ui/configs/banners.config";

import ClaimReviewSection from "../components/sections/ClaimReviewSection";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

import { useClaimAttachmentsForm } from "../hooks/useClaimAttachmentsForm";
import { useClaimWizard } from "../hooks/useClaimWizard";

import type { ClaimAttachmentsData } from "../hooks/useClaimAttachmentsForm";
import { ArrowLeft } from "lucide-react";
import { AttachmentsSection } from "../components/sections/AttachmentSection";
import { useClaimStore } from "../utils/ClaimStore";

export default function ClaimDocumentsPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const { completeStep } = useClaimStore();

  const methods = useClaimAttachmentsForm({
    attachments: claimData?.evidence?.attachments ?? [],
  });

const handleSubmit = (data: ClaimAttachmentsData) => {

  setStep("documents", {
    attachments: data.attachments,
  });

  completeStep("documents");
  completeStep("success");

  navigate("/claims/success");
};

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section
        className="
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
        py-16
      "
      >
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <ClaimStepper current={8} />
            </div>

            <Form methods={methods} onSubmit={handleSubmit}>
              <Card
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-xl
                  shadow-slate-200/40
                "
              >
                <div className="space-y-12 p-8 md:p-10 lg:p-12">
                  {/* REVIEW */}

                  <ClaimReviewSection claimData={claimData} />

                  <div className="border-t border-slate-200" />

                  {/* DOCUMENTS */}

                  <AttachmentsSection />
                </div>

                <footer
                  className="
                    flex
                    flex-col
                    gap-6
                    border-t
                    border-slate-200
                    bg-slate-50
                    px-8
                    py-6
                    md:flex-row
                    md:justify-between
                  "
                >
                  <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                    <ArrowLeft
                      className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:-translate-x-1
    "
                    />
                    Back
                  </Button>

                  <Button
                    type="submit"
                    size="lg"
                    className="
                      min-w-[220px]
                      bg-green-600
                      hover:bg-green-700
                    "
                  >
                    Submit Claim
                  </Button>
                </footer>
              </Card>
            </Form>
          </div>
        </Container>
      </Section>
    </>
  );
}
