import { MockEmailProvider } from "./providers/MockEmailProvider";
import { EmailService } from "./services/emailService";

export const emailService = new EmailService(new MockEmailProvider());
