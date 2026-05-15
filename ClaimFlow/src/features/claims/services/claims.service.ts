import { apiClient } from "../../../infrastructure/api/client";

export const submitClaim = async (data: any) => {
  return apiClient.post("/claims", data);
};