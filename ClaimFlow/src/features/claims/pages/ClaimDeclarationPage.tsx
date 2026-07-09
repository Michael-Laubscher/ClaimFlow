import { useNavigate } from "react-router-dom";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { Form } from "@/shared/components/forms/components/Form";

import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { DeclarationSection } from "../components/sections/DeclarationSection";

import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimDeclarationForm } from "../hooks/useClaimDeclarationForm";

import type { ClaimDeclarationData } from "../schemas/claim-declaration.schema";
import { banners } from "@/features/shared-ui/configs/banners.config";
import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { useClaimStore } from "../utils/ClaimStore";

export default function ClaimDeclarationPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const { completeStep } = useClaimStore();

  const methods = useClaimDeclarationForm({
    defaultValues: claimData.declaration ?? {},
  });

  const submit = (data: ClaimDeclarationData) => {
    setStep("declaration", data);
    

    completeStep("declaration");

    navigate("/claims/documents");
  };

  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-16">
      <PageBanner {...banners.newClaim} />
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="m-10">
            <ClaimStepper current={8} />
          </div>

          <Form methods={methods} onSubmit={submit}>
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
              <div className="p-8 md:p-10 lg:p-12">
                <DeclarationSection />
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
                  md:items-center
                  md:justify-between
                  lg:px-12
                "
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">Final Step</p>

                  <p className="mt-1 text-sm text-slate-500">Review and submit your claim</p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="
                    min-w-[200px]
                    bg-green-600
                    hover:bg-green-700
                  "
                >
                  Continue to Documents
                </Button>
              </footer>
            </Card>
          </Form>
        </div>
      </Container>
    </Section>
  );
}
