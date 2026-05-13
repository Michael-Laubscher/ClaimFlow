import { claimsDB } from "@/mock/data/claims";

const API_MODE = "mock";

const mockApi = {
  post: async (url: string, data: any) => {
    if (url === "/claims") {
      const newClaim = {
        id: Date.now(),
        ...data,
        createdAt: new Date(),
      };

      claimsDB.push(newClaim);

      console.log("Saved to mock DB:", claimsDB);

      return { success: true, data: newClaim };
    }

    throw new Error("Unknown endpoint");
  },
};

const realApi = {
  post: async (url: string, data: any) => {
    // future axios logic
  },
};

export const apiClient = API_MODE === "mock" ? mockApi : realApi;