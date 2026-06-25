import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AssessmentSection } from "../components/sections/AssessmentSection";
import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimAssessmentForm } from "../hooks/useClaimAssessmentForm";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

export default function ClaimAssessmentPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const form = useClaimAssessmentForm({
    defaultValues: claimData.assessment ?? {},
  });

  const handleSubmit = form.handleSubmit((data) => {

    setStep("assessment", data);

    navigate("/claims/declaration");
  });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={7} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <AssessmentSection />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-[#0f2044] px-6 py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}