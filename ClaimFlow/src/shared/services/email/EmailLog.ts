export interface EmailLog {
  id: string;

  recipient: string;

  subject: string;

  template: string;

  provider: string;

  providerMessageId?: string;

  status:
    | "pending"
    | "sent"
    | "failed";

  error?: string;

  createdAt: Date;

  sentAt?: Date;
}