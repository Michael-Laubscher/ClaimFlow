import type { ToastContextValue } from "@/shared/components/design-system/feedback/Toast/ToastProvider";

export const quoteNotifications = {
  stepSaved: (toast: ToastContextValue) =>
    toast.success({
      title: "Progress Saved",
      description: "Your quote information has been updated.",
    }),

  submitted: (toast: ToastContextValue) =>
    toast.success({
      title: "Quote Submitted",
      description: "We'll contact you shortly.",
    }),

  failed: (toast: ToastContextValue) =>
    toast.error({
      title: "Submission Failed",
      description: "Please try again later.",
    }),
};
