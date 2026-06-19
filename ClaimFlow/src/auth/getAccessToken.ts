import { msalInstance } from "./msalConfig";
import { graphScopes } from "./scopes";

export async function getAccessToken(): Promise<string> {
  const account = msalInstance.getAllAccounts()[0];

  if (!account) {
    throw new Error("No signed-in account");
  }

  const response = await msalInstance.acquireTokenSilent({
    account,
    scopes: graphScopes,
  });

  return response.accessToken;
}
