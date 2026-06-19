import { graphClient } from "../../graphClient";
import type { IEmailProvider } from "../providers/IEmailProvider";
import { MockEmailProvider } from "../providers/MockEmailProvider";
import { Office365Provider } from "../providers/office365Provider";

export function createEmailProvider(): IEmailProvider {
  switch (process.env.EMAIL_PROVIDER) {
    case "office365":
      return new Office365Provider(graphClient);

    case "mock":
      return new MockEmailProvider();

    default:
      throw new Error("Provider not configured");
  }
}
