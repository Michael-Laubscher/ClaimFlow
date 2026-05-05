import { FormProvider } from "react-hook-form";
import { useClaimForm } from "../hooks/useClaimForm";
import PolicySection from "./sections/PolicySection";
import PersonalSection from "./sections/PersonalSection";
import IncidentSection from "./sections/IncidentSection";
import { submitClaim } from "../services/claims.service";

export default function ClaimForm() {
  const methods = useClaimForm();

  const onSubmit = async (data: any) => {
    console.log("Submitting:", data);
    await submitClaim(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <PolicySection />
        <PersonalSection />
        <IncidentSection />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Claim
        </button>
      </form>
    </FormProvider>
  );
}