import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { claimSchema, type ClaimFormData } from "../validation/claim.schema";

export const useClaimForm = () => {
  return useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),
    defaultValues: {
      claimType: "vehicle",
    },
  });
};
