import { useAppStore } from "@/app/store/useAppStore";
import { useNavigate } from "react-router-dom";

import type { ClaimFormData } from "../schemas/claim.schema";
import { submitClaim } from "../services/claims.service";
import type { Attachment } from "../types/Attachment.types";
import { generateClaimZip } from "../utils/zip.util";

export function useSubmitClaim(reset: () => void) {
  const navigate = useNavigate();
  const { setLoading, setError } = useAppStore();

  const extractFiles = (attachments: Attachment[] = []) => attachments.map((attachment) => attachment.file);

  const submit = async (data: ClaimFormData) => {
    try {
      setLoading(true);
      setError(null);

      const files = extractFiles(data.attachments);

      const zip = await generateClaimZip(data, files);

      await submitClaim({
        ...data,
        zip,
      });

      reset();
      navigate("/claims/success");
    } catch (error) {
      console.error(error);
      setError("Failed to submit claim. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { submit };
}
