import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ThirdPartySection } from "../components/sections/ThirdPartySection";
import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimThirdPartyForm } from "../hooks/useClaimThirdPartyForm";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

export default function ClaimThirdPartyPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const form = useClaimThirdPartyForm({
    defaultValues: claimData.thirdParty ?? {},
  });

  const handleSubmit = form.handleSubmit((data) => {
    
    setStep("thirdParty", data);

    navigate("/claims/evidence");
  });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={5} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <ThirdPartySection />

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