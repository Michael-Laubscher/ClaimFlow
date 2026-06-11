import { FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void | Promise<void>;
  children: React.ReactNode;
}

export function Form<T extends FieldValues>({ methods, onSubmit, children }: Props<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
