import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { DriverSection } from "../components/sections/DriverSection";
import { useClaimDriverForm } from "../hooks/useClaimDriverForm";
import { useClaimWizard } from "../hooks/useClaimWizard";

export default function ClaimDriverPage() {
  const navigate = useNavigate();

  const { setStep } = useClaimWizard();

  const form = useClaimDriverForm();

  const handleSubmit = form.handleSubmit(
    (data) => {
      setStep("driver", data); 

      navigate("/claims/vehicle");
    },
    (errors) => {
      console.log("Driver validation errors:", errors);
    }
  );

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={3} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <DriverSection />

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