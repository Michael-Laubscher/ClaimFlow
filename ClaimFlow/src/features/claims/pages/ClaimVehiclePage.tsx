import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { VehicleSection } from "../components/sections/VehicleSection";
import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimVehicleForm } from "../hooks/useClaimVehicleForm";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";

export default function ClaimVehiclePage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

  const form = useClaimVehicleForm({
    defaultValues: claimData.vehicle ?? {}, 
  });

  const handleSubmit = form.handleSubmit((data) => {
    setStep("vehicle", data);

    navigate("/claims/third-party");
  });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={4} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <VehicleSection />

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