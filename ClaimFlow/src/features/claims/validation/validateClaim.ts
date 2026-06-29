import { claimSchema, type ClaimFormData } from "../schemas/claim.schema";

export function validateClaim(data: unknown):
  | {
      success: true;
      data: ClaimFormData;
    }
  | {
      success: false;
      errors: string[];
    } {
  const result = claimSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  return {
    success: true,
    data: result.data,
  };
}
