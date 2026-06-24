export interface NewsletterSubscriber {
  id: string;

  email: string;

  active: boolean;

  subscribedAt: Date;

  unsubscribedAt?: Date;
}