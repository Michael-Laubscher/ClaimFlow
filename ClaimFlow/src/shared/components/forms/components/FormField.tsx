import type { ReactElement } from "react";
import { Controller, useFormContext, type ControllerRenderProps, type FieldPath, type FieldValues } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  render: (args: { field: ControllerRenderProps<T, FieldPath<T>>; error?: string }) => ReactElement;
}

export function FormField<T extends FieldValues>({ name, render }: FormFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>
        render({
          field,
          error: fieldState.error?.message,
        })
      }
    />
  );
}
