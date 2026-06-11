import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import PersonalSection from "../components/sections/PersonalSection";
import PolicySection from "../components/sections/PolicySection";

import { banners } from "@/features/shared-ui/configs/banners.config";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { useClaimForm } from "../hooks/useClaimForm";

export default function NewClaimPage() {
  const methods = useClaimForm();
  const navigate = useNavigate();

  return (
    <>
      <PageBanner {...banners.newClaim} />

      <Section className="bg-slate-50 py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ClaimStepper current={1} />

            <FormProvider {...methods}>
              <Card className="p-8 rounded-3xl">
                <Stack gap="lg">
                  <PolicySection />

                  <PersonalSection />

                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() =>
                      navigate("/claims/incident", {
                        state: methods.getValues(),
                      })
                    }
                  >
                    Continue
                  </Button>
                </Stack>
              </Card>
            </FormProvider>
          </div>
        </Container>
      </Section>
    </>
  );
}
