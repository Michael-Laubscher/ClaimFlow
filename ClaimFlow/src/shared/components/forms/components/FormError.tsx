export function FormError({ message }: { message?: string }) {
  return <p className="mt-1 min-h-[1rem] text-sm form-error">{message ?? " "}</p>;
}
