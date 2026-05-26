import { useNavigate } from "react-router-dom";
import { submitClaim } from "../services/claims.service";
import { generateClaimZip } from "../utils/zip.util";
import { useAppStore } from "../../../app/store/useAppStore";
import type { Attachment } from "../types/Attachment.types";

export function useSubmitClaim(reset: () => void) {
  const navigate = useNavigate();
  const { setLoading, setError } = useAppStore();

  const extractFiles = (attachments: Attachment[] = []) =>
    attachments.map((a) => a.file);

  const submit = async (data: any) => {
    try {
      setLoading(true);
      setError(null);

      const files = extractFiles(data.attachments);

      const zipBlob = await generateClaimZip(data, files);

      await submitClaim({
        ...data,
        zip: zipBlob,
      });

      reset();
      navigate("/claims/success");
    } catch (err) {
      console.error(err);
      setError("Failed to submit claim. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { submit };
}
