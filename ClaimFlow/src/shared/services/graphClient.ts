import { getAccessToken } from "@/auth/getAccessToken";
import { Client } from "@microsoft/microsoft-graph-client";

export const graphClient = Client.init({
  authProvider: async (done) => {
    try {
      const token = await getAccessToken();
      done(null, token);
    } catch (err) {
      done(err as Error, null);
    }
  },
});
