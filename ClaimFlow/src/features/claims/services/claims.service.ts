export const submitClaim = async (data: unknown) => {
  console.log("Mock claim submitted:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        id: "CLM-" + Date.now(),
      });
    }, 1000);
  });
};
