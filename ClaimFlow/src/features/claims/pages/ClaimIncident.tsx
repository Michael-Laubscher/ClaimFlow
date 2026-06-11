import { FormProvider } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import IncidentSection from "../components/sections/IncidentSection";

import { banners } from "@/features/shared-ui/configs/banners.config";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { useClaimForm } from "../hooks/useClaimForm";

export default function ClaimIncidentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useClaimForm({
    defaultValues: location.state ?? {},
  });

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ClaimStepper current={2} />

            <FormProvider {...methods}>
              <Card className="p-8 rounded-3xl">
                <Stack gap="lg">
                  <IncidentSection />

                  <div className="flex justify-between">
                    <Button variant="secondary" onClick={() => navigate(-1)}>
                      Back
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() =>
                        navigate("/claims/documents", {
                          state: methods.getValues(),
                        })
                      }
                    >
                      Continue
                    </Button>
                  </div>
                </Stack>
              </Card>
            </FormProvider>
          </div>
        </Container>
      </Section>
    </>
  );
}
