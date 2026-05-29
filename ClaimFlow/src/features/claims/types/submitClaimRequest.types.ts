import type { Claim } from "./claim.types";

export type SubmitClaimRequest = Claim & {
  zip: Blob;
};
