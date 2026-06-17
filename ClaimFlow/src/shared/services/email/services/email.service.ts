// import type { IEmailProvider } from "../providers/IEmailProvider";
// import type { SendEmailInput } from "../types/types";

import { MockEmailProvider } from "../providers/MockEmailProvider";

// export class EmailService {
//   constructor(private provider: IEmailProvider) {}

//   async send(input: SendEmailInput): Promise<void> {
//     await this.provider.sendEmail(input);
//   }
// }

const provider = new MockEmailProvider();

export const emailService = {
  send: provider.sendEmail.bind(provider),
};
