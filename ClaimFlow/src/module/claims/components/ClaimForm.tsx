import { FormProvider } from "react-hook-form";
import { useClaimForm } from "../hooks/useClaimForm";
import PolicySection from "./sections/PolicySection";
import PersonalSection from "./sections/PersonalSection";
import IncidentSection from "./sections/IncidentSection";
import { submitClaim } from "../services/claims.service";
import AttachmentsSection from "./sections/AttachmentSection";
import { generateClaimZip } from "../utils/zip.util";

export default function ClaimForm() {
  const methods = useClaimForm();

  const onSubmit = async (data: any) => {
    try {
      const zipBlob = await generateClaimZip(data, data.attachments);

      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "claim.zip";
      a.click();

      
      await submitClaim({
        ...data,
        zip: zipBlob,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <PolicySection />
        <PersonalSection />
        <IncidentSection />
        <AttachmentsSection />

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
