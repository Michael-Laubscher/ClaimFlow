import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { EvidenceSection } from "../components/sections/EvidenceSection";
import { useClaimWizard } from "../hooks/useClaimWizard";
import { useClaimEvidenceForm } from "../hooks/useClaimEvidenceForm";
import { ClaimStepper } from "../components/sections/stepper/ClaimStepper";
import { claimEvidenceSchema } from "../schemas/claim-evidence.schema";

type FormValues = z.infer<typeof claimEvidenceSchema>;

export default function ClaimEvidencePage() {
  const navigate = useNavigate();

  const { claimData, setStep } = useClaimWizard();

 
const form = useClaimEvidenceForm({
  defaultValues: {
    witnesses: claimData.evidence?.witnesses ?? [],
    evidenceNotes: claimData.evidence?.evidenceNotes ?? "",
    attachments: claimData.evidence?.attachments ?? [],
  },
});

  const handleSubmit = form.handleSubmit((data: FormValues) => {
   
    setStep("evidence", data);

    navigate("/claims/assessment");
  });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <ClaimStepper current={6} />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <EvidenceSection />

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