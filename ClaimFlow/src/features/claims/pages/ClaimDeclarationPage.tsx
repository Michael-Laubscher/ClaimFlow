import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { DeclarationSection } from "../components/sections/DeclarationSection";
import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimDeclarationForm } from "../hooks/useClaimDeclarationForm";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

export default function ClaimDeclarationPage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();


  const form = useClaimDeclarationForm({
    defaultValues: claimData.declaration ?? {},
  });

  const handleSubmit = form.handleSubmit((data) => {
   
    setStep("declaration", data);

    navigate("/claims/documents");
  });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={8} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <DeclarationSection />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-6 py-3 text-white"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}