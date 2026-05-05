const API_MODE = "mock";

const mockApi = {
  post: async (url: string, data: any) => {
    console.log("Mock POST:", url, data);
    return { success: true };
  },
};

const realApi = {
  post: async (url: string, data: any) => {
    // future axios implementation
  },
};

export const apiClient = API_MODE === "mock" ? mockApi : realApi;