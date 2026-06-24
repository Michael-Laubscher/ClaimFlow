export type EmailAttachment = {
  filename: string;
  content: Buffer | string;
  contentType?: string;
};

export type SendEmailInput = {
  to: string;
  subject: string;

  html: string;
  text?: string;

  from?: string;
  replyTo?: string;

  cc?: string[];
  bcc?: string[];

  attachments?: EmailAttachment[];
};