import { useFormContext } from "react-hook-form";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

interface Props {
  children: React.ReactNode;
}

import { Send } from "lucide-react";

export function FormSubmitButton({ children }: Props) {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext();

  return (
    <Button
      type="submit"
      loading={isSubmitting}
      disabled={!isValid || isSubmitting}
      variant="primary"
      size="lg"
      className="ml-auto inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[var(--color-primary)] text-white hover:opacity-90 h-12 px-6 text-base rounded-xl min-w-[180px]
    "
      iconRight={!isSubmitting && <Send size={18} />}
    >
      {isSubmitting ? "Sending..." : children}
    </Button>
  );
}
