import { FormProvider } from "react-hook-form";
import { useClaimForm } from "../hooks/useClaimForm";
import PolicySection from "./sections/PolicySection";
import PersonalSection from "./sections/PersonalSection";
import IncidentSection from "./sections/IncidentSection";
import { submitClaim } from "../services/claims.service";
import AttachmentsSection from "./sections/AttachmentSection";
import { generateClaimZip } from "../utils/zip.util";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../app/store/useAppStore";

type FileWithId = {
  file: File;
  id: string;
};

export default function ClaimForm() {
  const methods = useClaimForm();
  const navigate = useNavigate();
  const { setLoading, setError, loading, error } = useAppStore();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setError(null);

      const attachments: File[] = (data.attachments || [])
        .map((a: FileWithId) => a?.file)
        .filter((f: File | undefined): f is File => f instanceof File);

      const zipBlob = await generateClaimZip(data, attachments);

      await submitClaim({
        ...data,
        zip: zipBlob,
      });

      navigate("/claims/success");
      methods.reset();
    } catch (err: any) {
      console.error(err);
      setError("Failed to submit claim. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>
        )}

        <PolicySection />
        <PersonalSection />
        <IncidentSection />
        <AttachmentsSection />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Claim"}
        </button>
      </form>
    </FormProvider>
  );
}
