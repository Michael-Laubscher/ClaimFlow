export const sendClaimConfirmation = async (email: string, claimNumber: string) => {
  console.group("MOCK EMAIL");
  console.log("To:", email);
  console.log("Claim Number:", claimNumber);
  console.groupEnd();

  return Promise.resolve();
};
