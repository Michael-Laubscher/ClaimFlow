import { MockEmailProvider } from "../providers/MockEmailProvider";
import { NodemailerProvider } from "../providers/NodemailerProvider";

export function createEmailProvider() {

  console.log("EMAIL_PROVIDER =", process.env.EMAIL_PROVIDER);

  switch (process.env.EMAIL_PROVIDER) {
    case "smtp":
      return new NodemailerProvider();

    case "mock":
      return new MockEmailProvider();

    default:
      throw new Error("Provider not configured");
  }
}

