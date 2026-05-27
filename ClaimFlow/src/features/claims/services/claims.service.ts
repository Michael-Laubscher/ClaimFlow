import { apiClient } from "@/shared/services/api.client";
export const submitClaim = async (data: unknown) => {
  return apiClient.post("/claims", data);
};
