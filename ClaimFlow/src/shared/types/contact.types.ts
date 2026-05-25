export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  lines: string[];
  highlight?: string;
}