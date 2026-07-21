import type { EmailLog } from "../EmailLog";

export interface EmailLogRepository {
  create(log: EmailLog): Promise<void>;

  markSent(id: string, providerMessageId: string): Promise<void>;

  markFailed(id: string, error: string): Promise<void>;
}
