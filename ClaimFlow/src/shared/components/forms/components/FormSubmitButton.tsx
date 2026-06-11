import { useFormContext } from "react-hook-form";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

interface Props {
  children: React.ReactNode;
}

export function FormSubmitButton({ children }: Props) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button type="submit" loading={isSubmitting} variant="primary" size="lg">
      {children}
    </Button>
  );
}
